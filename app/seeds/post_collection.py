from app.models import db, Collection, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

current_date = datetime.now()




def undo_posts_collections():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts_collections RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts_collections"))

    db.session.commit()
