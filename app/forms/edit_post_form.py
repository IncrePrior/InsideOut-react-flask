from flask_wtf import FlaskForm
from wtforms import StringField, FileField, TextAreaField
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms.validators import DataRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS


class EditPostForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    text = TextAreaField('description', validators=[DataRequired()])
    photo = FileField('upload a photo', validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
