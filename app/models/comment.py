from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('posts.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    text = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    post = db.relationship('Post', back_populates='comments')
    user = db.relationship('User', back_populates='comments')

    def to_dict(self):
        return {
        'id': self.id,
        'postId': self.post_id,
        'userId': self.user_id,
        'text': self.text,
        'createdAt': self.created_at.strftime('%B %d, %Y'),
        'updatedAt': self.updated_at.strftime('%B %d, %Y'),
    }
