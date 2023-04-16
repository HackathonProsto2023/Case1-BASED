import datetime

from sqlalchemy import MetaData, Table, Column, Integer, String, Boolean, Date, ForeignKey, Sequence

from src.app.companies.models import vacancy
from src.app.users.models import user, profile

metadata = MetaData()


skill = Table(
    "skills",
    metadata,
    Column("id", Integer, Sequence("skills_id_seq", metadata=metadata), primary_key=True),
    Column("name", String, nullable=False)
)

response = Table(
    "responses",
    metadata,
    Column("id", Integer, Sequence("responses_id_seq", metadata=metadata), primary_key=True),
    Column("applicant_id", Integer, ForeignKey(profile.c.id), nullable=False),
    Column("vacancy_id", Integer, ForeignKey(vacancy.c.id), nullable=False),
    Column("response_date", Date, nullable=False, default=datetime.datetime.now().date()),
    Column("task_result", String, nullable=False),
    Column("answer", String, nullable=False)
)

applicant_skill = Table(
    "applicant_skill",
    metadata,
    Column("skill_id", Integer, ForeignKey("skills.id"), primary_key=True, nullable=False),
    Column("applicant_id", Integer, ForeignKey(user.c.id), primary_key=True, nullable=False)
)

vacancy_skill = Table(
    "vacancy_skill",
    metadata,
    Column("vacancy_id", Integer, ForeignKey("vacancies.id"), primary_key=True, nullable=False),
    Column("skill_id", Integer, ForeignKey("skills.id"), primary_key=True, nullable=False)
)

question = Table(
    "questions",
    metadata,
    Column("id", Integer, Sequence("questions_id_seq", metadata=metadata), primary_key=True),
    Column("vacancy_id", Integer, ForeignKey("vacancies.id")),
    Column("question", String, nullable=False),
    Column("answer", String, nullable=False),
    Column("archived", Boolean, nullable=False, default=False)
)
