from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class PostCollectionForm(FlaskForm):
    post_id = IntegerField('post_id', validators=[DataRequired()])
    collection_id = IntegerField('collection_id', validators=[DataRequired()])
