from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

post_collections = db.Table(
    'post_collections',

    db.Column(
    'collection_id',
    db.Integer,
    db.ForeignKey(add_prefix_for_prod('collections.id')),
    primary_key=True
    ),

    db.Column(
    'post_id',
    db.Integer,
    db.ForeignKey(add_prefix_for_prod('posts.id')),
    primary_key=True
    )
)

if environment == 'production':
    post_collections.schema = SCHEMA
