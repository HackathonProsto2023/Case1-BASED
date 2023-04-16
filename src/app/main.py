from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.app.responses.routers import response_router
from src.app.users.routers import users_router
from src.app.companies.routers import company_router
from src.app.skills.routers import skills_router
from src.app.applicant.routers import applicants_router

app = FastAPI(
    title="Hi Mark"
)

# front-end availability
origins = ["*", "https://hahaton-52985.web.app/"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTION", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
                   "Authorization"],
)

app.include_router(response_router)
app.include_router(users_router)
app.include_router(company_router)
app.include_router(skills_router)
app.include_router(applicants_router)
