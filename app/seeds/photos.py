from ..models import db, Photo, environment, SCHEMA
from datetime import datetime
from sqlalchemy.sql import text

current_date = datetime.now()

def seed_photos():
    photos = [
    # 1
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.30.54+PM.png",
    ),
    # 2
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.33.43+PM.png",
    ),
    # 3
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.34.30+PM.png",
    ),
    # 4
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.32.27+PM.png",
    ),
    # 5
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.45.29+PM.png",
    ),
    # 6
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.45.48+PM.png",
    ),
    # 7
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.46.05+PM.png",
    ),
    # 8
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.46.36+PM.png",
    ),
    # 9
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.46.50+PM.png",
    ),
    # 10
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.47.17+PM.png",
    ),
    # 11
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.47.29+PM.png",
    ),
    # 12
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.47.45+PM.png",
    ),
    # 13
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.47.57+PM.png",
    ),
    # 14
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.48.16+PM.png",
    ),
    # 15
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.49.14+PM.png",
    ),
    # 16
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.49.41+PM.png",
    ),
    # 17
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.49.48+PM.png",
    ),
    # 18
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.49.57+PM.png",
    ),
    # 19
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.50.09+PM.png",
    ),
    # 20
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.50.53+PM.png",
    ),
    # 21
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.51.22+PM.png",
    ),
    # 22
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.52.38+PM.png",
    ),
    # 23
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.53.01+PM.png",
    ),
    # 24
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.53.20+PM.png",
    ),
    # 25
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.53.41+PM.png",
    ),
    # 26
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.54.35+PM.png",
    ),
    # 27
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.55.03+PM.png",
    ),
    # 28
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.55.20+PM.png",
    ),
    # 29
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.56.06+PM.png",
    ),
    # 30
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.56.29+PM.png",
    ),
    # 31
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.56.53+PM.png",
    ),
    # 32
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+3.58.07+PM.png",
    ),
    # 33
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.00.41+PM.png",
    ),
    # 34
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.01.24+PM.png",
    ),
    # 35
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.02.15+PM.png",
    ),
    # 36
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.02.30+PM.png",
    ),
    # 37
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.02.59+PM.png",
    ),
    # 38
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.03.25+PM.png",
    ),
    # 39
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.03.40+PM.png",
    ),
    # 40
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/Screenshot+2023-11-01+at+4.04.24+PM.png",
    ),
    # 41
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/41.png",
    ),
    # 42
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/42.png",
    ),
    # 43
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/43.png",
    ),
    # 44
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/44.png",
    ),
    # 45
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/45.png",
    ),
    # 46
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/46.png",
    ),
    # 47
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/47.png",
    ),
    # 48
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/48.png",
    ),
    # 49
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/49.png",
    ),
    # 51
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/51.png",
    ),
    # 52
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/52.png",
    ),
    # 53
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/53.png",
    ),
    # 54
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/54.png",
    ),
    # 55
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/55.png",
    ),
    # 56
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/56.png",
    ),
    # 57
    Photo(
        photo_url="https://insideout-nov2023.s3.amazonaws.com/interior-desing-pics/new-pics/57.png",
    )
    ]

    db.session.add_all(photos)
    db.session.commit()
    return photos

def undo_photos():
    if environment == "production":
        db.session.execute(
        f"TRUNCATE table {SCHEMA}.photos RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM photos"))
    db.session.commit()
