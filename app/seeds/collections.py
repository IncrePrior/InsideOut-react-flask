from app.models import db, Collection, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

current_date = datetime.now()


def seed_collections(posts):
    collections = [
        #1
    Collection(
        user_id = 1,
        name = "Spectacular",
        description = "That makes me feel like I can do anything...",
        type = "inside",
        created_at=current_date,
        updated_at=current_date,
        posts=[posts[1], posts[8], posts[9], posts[14], posts[21], posts[27], posts[29], posts[35], posts[36], posts[37], posts[42], posts[48]]
    ),
    #2
    Collection(
        user_id = 1,
        name = "Retreat at home",
        description = "Most beautiful staycation places.",
        type = "mixed",
        created_at=current_date,
        updated_at=current_date,
        posts=[posts[2], posts[6], posts[7], posts[20], posts[26], posts[28], posts[30], posts[31], posts[34], posts[41], posts[46], posts[47]]
    ),
    #3
    Collection(
        user_id = 1,
        name = "Outdoor living",
        description = "Beauty of nature next to the house.",
        type = "out",
        created_at=current_date,
        updated_at=current_date,
        posts=[posts[1], posts[4], posts[10], posts[45]]
    ),
    #4
    Collection(
        user_id = 2,
        name = "Modern",
        description = "Inspiration for clean and calm modern interiors.",
        type = "inside",
        created_at=current_date,
        updated_at=current_date,
        posts=[posts[1], posts[15], posts[16], posts[17], posts[18], posts[19], posts[32], posts[38], posts[39], posts[40], posts[49]]
    ),
    #5
    Collection(
        user_id = 3,
        name = "Art at home",
        description = "How art makes a difference and makes everything around alive.",
        type = "inside",
        created_at=current_date,
        updated_at=current_date,
        posts=[posts[3], posts[5], posts[11], posts[12], posts[13], posts[22], posts[24], posts[25], posts[33], posts[43], posts[44], posts[50]]
    )
    ]

    db.session.add_all(collections)
    db.session.commit()



def undo_collections():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.boards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM collections"))

    db.session.commit()
