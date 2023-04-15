from sqlalchemy import MetaData, Table, Column, Integer, String, Sequence, ForeignKey

metadata = MetaData()


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
