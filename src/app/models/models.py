from sqlalchemy import MetaData, Table, Column, Integer, String, Boolean, ForeignKey, Sequence

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

company = Table(
    "company",
    metadata,
    Column("id", Integer, Sequence("customers_id_seq", metadata=metadata), primary_key=True),
    Column("name", String, nullable=False),
    Column("description", String, nullable=False)
)

recruiter = Table(
    "recruiters",
    metadata,
    Column("id", Integer, Sequence("recruiters_id_seq", metadata=metadata), primary_key=True),
    Column("name", String, nullable=False),
    Column("company_id", String, nullable=False)
)

applicant = Table(
    "applicants",
    metadata,
    Column("id", Integer, Sequence("applicants_id_seq", metadata=metadata), primary_key=True),
    Column("name", String, nullable=False),
    Column("description", String, nullable=False)
)

vacancy = Table(
    "vacancies",
    metadata,
    Column("id", Integer, Sequence("vacancies_id_seq", metadata=metadata), primary_key=True),
    Column("title", String, nullable=False),
    Column("description", String, nullable=False),
    Column("recruiter_id", Integer, ForeignKey("recruiters.id")),
    Column("city_id", Integer, ForeignKey("cities.id"))
)

response = Table(
    "responses",
    metadata,
    Column("id", Integer, Sequence("responses_id_seq", metadata=metadata), primary_key=True),
    Column("applicant_id", Integer, ForeignKey("applicants.id")),
    Column("vacancy_id", Integer, ForeignKey("vacancies.id")),
    Column("result", String, nullable=False)
)

applicant_skill = Table(
    "applicant_skill",
    metadata,
    Column("skill_id", Integer, ForeignKey("skills.id"), primary_key=True),
    Column("applicant_id", Integer, ForeignKey("applicants.id"), primary_key=True)
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
