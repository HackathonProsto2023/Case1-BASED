import datetime

from sqlalchemy import MetaData, Table, Column, Integer, String, Boolean, Date, ForeignKey, Sequence

from src.app.users.models import user, profile
metadata = MetaData()


response = Table(
    "responses",
    metadata,
    Column("id", Integer, Sequence("responses_id_seq", metadata=metadata), primary_key=True),
    Column("applicant_id", Integer, ForeignKey(profile.c.id), nullable=False),
    Column("vacancy_id", Integer, ForeignKey("vacancies.id"), nullable=False),
    Column("response_date", Date, nullable=False, default=datetime.datetime.now().date()),
    Column("task_result", String, nullable=False),
    Column("answer", String, nullable=False)
)
