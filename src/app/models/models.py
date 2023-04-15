import datetime

from sqlalchemy import MetaData, Table, Column, Integer, String, Boolean, Date, ForeignKey, Sequence

metadata = MetaData()


skill = Table(
    "skills",
    metadata,
    Column("id", Integer, Sequence("skills_id_seq", metadata=metadata), primary_key=True),
    Column("name", String, nullable=False)
)

city = Table(
    "cities",
    metadata,
    Column("id", Integer, Sequence("cities_id_seq", metadata=metadata), primary_key=True),
    Column("name", String, nullable=False)
)

user = Table(
    "users",
    metadata,
    Column("id", Integer, Sequence("users_id_seq", metadata=metadata), primary_key=True),
    Column("login", String, nullable=False),
    Column("role", String, nullable=False),
    Column("profile_id", Integer, ForeignKey("profiles.id"))
)

profile = Table(
    "profiles",
    metadata,
    Column("id", Integer, Sequence("profiles_id_seq", metadata=metadata), primary_key=True),
    Column("name", String, nullable=False),
    Column("city_id", Integer, ForeignKey("cities.id")),
    Column("description", String, nullable=False)
)

vacancy = Table(
    "vacancies",
    metadata,
    Column("id", Integer, Sequence("vacancies_id_seq", metadata=metadata), primary_key=True),
    Column("title", String, nullable=False),
    Column("description", String, nullable=False),
    Column("company_id", Integer, ForeignKey("profiles.id")),
    Column("publish_date", Date, nullable=False, default=datetime.datetime.now().date()),
    Column("is_archived", Boolean, nullable=False, default=False)
)

response = Table(
    "responses",
    metadata,
    Column("id", Integer, Sequence("responses_id_seq", metadata=metadata), primary_key=True),
    Column("applicant_id", Integer, ForeignKey("profiles.id")),
    Column("vacancy_id", Integer, ForeignKey("vacancies.id")),
    Column("response_date", Date, nullable=False, default=datetime.datetime.now().date()),
    Column("task_result", String, nullable=False),
    Column("answer", String, nullable=False)
)

applicant_skill = Table(
    "applicant_skill",
    metadata,
    Column("skill_id", Integer, ForeignKey("skills.id"), primary_key=True),
    Column("applicant_id", Integer, ForeignKey("users.id"), primary_key=True)
)

vacancy_skill = Table(
    "vacancy_skill",
    metadata,
    Column("vacancy_id", Integer, ForeignKey("vacancies.id"), primary_key=True),
    Column("skill_id", Integer, ForeignKey("skills.id"), primary_key=True)
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
