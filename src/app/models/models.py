from sqlalchemy import MetaData, Table, Column, Integer, String, ForeignKey

metadata = MetaData()


recruiters = Table(
    "recruiters",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("company_name", String, nullable=False),
    Column("description", String, nullable=False)
)

applicants = Table(
    "applicants",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("description", String, nullable=False)
)

skills = Table(
    "skills",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False)
)

cities = Table(
    "cities",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False)
)

vacancies = Table(
    "vacancies",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("title", String, nullable=False),
    Column("description", String, nullable=False),
    Column("recruiter_id", Integer, ForeignKey("recruiters.id")),
    Column("city_id", Integer, ForeignKey("cities.id"))
)

responses = Table(
    "responses",
    metadata,
    Column("id", Integer, primary_key=True),
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

questions = Table(
    "question",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("question", String, nullable=False),
    Column("answer_id", String, ForeignKey("answers.id")),
    Column("vacancy_id", String, ForeignKey("vacancies.id"))
)

answers = Table(
    "answers",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("question_id", Integer, ForeignKey("questions.id")),
    Column("value", String, nullable=False)
)
