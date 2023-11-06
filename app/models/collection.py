from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from .post_collection import PostCollection
from .post import Post



class Collection(db.Model):
    __tablename__ = 'collections'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(180), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    type = db.Column(db.String(255), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)

    user = db.relationship('User', back_populates='collections')
    posts = db.relationship('Post', secondary=add_prefix_for_prod('posts_collections'), back_populates='collections')
    posts_collections = db.relationship('PostCollection', back_populates='collections', viewonly=True)



    def to_dict(self):

        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'type': self.type,
            'user_id': self.user_id,
            'createdAt': self.created_at.strftime('%m/%d/%y'),
            'updatedAt': self.updated_at.strftime('%m/%d/%y'),
            'posts' : [post.to_dict() for post in self.posts]
        }
