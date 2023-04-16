from sqlalchemy import MetaData, Table, Column, Integer, String, Boolean, ForeignKey, Sequence

from src.app.companies.models import vacancy
from src.app.users.models import user

metadata = MetaData()


skill = Table(
    "skills",
    metadata,
    Column("id", Integer, Sequence("skills_id_seq", metadata=metadata), primary_key=True),
    Column("name", String, nullable=False)
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
    Column("vacancy_id", Integer, ForeignKey(vacancy.c.id), primary_key=True, nullable=False),
    Column("skill_id", Integer, ForeignKey("skills.id"), primary_key=True, nullable=False)
)

question = Table(
    "questions",
    metadata,
    Column("id", Integer, Sequence("questions_id_seq", metadata=metadata), primary_key=True),
    Column("vacancy_id", Integer, ForeignKey(vacancy.c.id)),
    Column("question", String, nullable=False),
    Column("answer", String, nullable=False),
    Column("archived", Boolean, nullable=False, default=False)
)
