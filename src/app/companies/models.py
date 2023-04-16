import datetime

from sqlalchemy import MetaData, Table, Column, Integer, String, Date, ForeignKey, Sequence
from src.app.users.models import profile

metadata = MetaData()

vacancy = Table(
    "vacancies",
    metadata,
    Column("id", Integer, Sequence("vacancies_id_seq", metadata=metadata), primary_key=True),
    Column("title", String, nullable=False),
    Column("description", String, nullable=False),
    Column("company_id", Integer, ForeignKey(profile.c.id)),
    Column("publish_date", Date, nullable=False, default=datetime.datetime.now().date()),
    Column("status", String, nullable=False, default="проверяется")
)