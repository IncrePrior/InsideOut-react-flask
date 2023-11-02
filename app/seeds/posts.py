from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

current_date = datetime.now()

def seed_posts():
    posts = [
        #1
        Post(
        user_id=1,
        photo_id=6,
        title="A Modern Dining Area Overlooking Water",
        text="As I gazed out of the modern dining area, I couldn't help but be captivated by the stunning view of the tranquil water. It felt like a serene escape, and I couldn't wait to sit down for a meal and take it all in.",
        created_at=current_date,
        updated_at=current_date
        ),
        #2
        Post(
        user_id=2,
        photo_id=7,
        title="A Glamour Bathroom with a Sculptural Ceiling Lamp Feature",
        text="Stepping into the bathroom, I was immediately struck by the glamour it exuded. The sculptural ceiling lamp above the bathtub added a touch of opulence, making it feel like a sanctuary of relaxation.",
        created_at=current_date,
        updated_at=current_date
        ),
        #3
        Post(
        user_id=3,
        photo_id=8,
        title="Colorful Playful Dining Area with Modern Art",
        text="I found myself in a colorful and playful dining area adorned with captivating modern art. The vibrant surroundings instantly put me in a cheerful mood, making it the perfect place to share a meal with friends.",
        created_at=current_date,
        updated_at=current_date
        ),
        #4
        Post(
        user_id=1,
        photo_id=9,
        title="The Serenity of Waterfront Living",
        text="Imagine waking up to the tranquil view of water every morning. This living room, with its simple yet stunning design, offers a peaceful escape that's hard to resist. Who else appreciates the beauty of waterfront living?",
        created_at=current_date,
        updated_at=current_date
        ),
        #5
        Post(
        user_id=2,
        photo_id=10,
        title="A Side Table with Animal-Like Sculptures",
        text="A unique side table caught my attention – it was adorned with sculptures, and its legs resembled playful animals. It was a delightful addition to the room and sparked conversation among guests.",
        created_at=current_date,
        updated_at=current_date
        ),
        #6
        Post(
        user_id=3,
        photo_id=11,
        title='The Power of Color',
        text="Colors can transform a room's atmosphere. I painted my kitchen a vibrant colors, and it's amazing how it lifts my mood every time I walk in. What colors have you used to express your personality at home?",
        created_at=current_date,
        updated_at=current_date
        ),
        #7
        Post(
        user_id=1,
        photo_id=12,
        title= "A Ceiling Worth Admiring",
        text= "The moment I stepped into this living room, my gaze was drawn upward to the beautifully decorated ceiling and that oversized pink painting. It's a mesmerizing combination of art and architecture. Have you seen a more captivating ceiling?",
        created_at=current_date,
        updated_at=current_date
        ),
        #8
        Post(
        user_id=2,
        photo_id=13,
        title="Palace-Like Open Door to a Modern Dining Room",
        text="As I pushed open the palace-like doors, I was greeted with a breathtaking view of the modern dining room. The gorgeous wooden floor, adorned with a grand pattern, added an extra layer of luxury to the space.",
        created_at=current_date,
        updated_at=current_date
        ),
        #9
        Post(
        user_id=3,
        photo_id=14,
        title="Elegance in Every Curve",
        text="This living room with a round white sofa and modern patterned armchairs is the epitome of elegance. The smooth lines and unique design create a perfect blend of comfort and style. Would you love to relax here?",
        created_at=current_date,
        updated_at=current_date
        ),
        #10
        Post(
        user_id=2,
        photo_id=16,
        title="An Outdoor Pool Amidst Beautiful Greenery",
        text="I witnessed an incredible sight as I stepped into an indoor pool surrounded by lush greenery. Someone was jumping into the pool, and the whole scene felt like a moment of pure joy and relaxation.",
        created_at=current_date,
        updated_at=current_date
        ),
        #11
        Post(
        user_id=3,
        photo_id=17,
        title="A Sculptural Modern Blue Stairway",
        text="A modern blue stairway caught my eye, and its design felt like a piece of art. The entire space had a sculptural quality, and I marveled at the attention to detail.",
        created_at=current_date,
        updated_at=current_date
        ),
        #12
        Post(
        user_id=1,
        photo_id=18,
        title="The Joys of DIY",
        text="I recently completed a DIY project—upcycling an old dresser into a stylish side table. It was challenging but so rewarding. Have you tried your hand at DIY home projects? Share your stories and successes!",
        created_at=current_date,
        updated_at=current_date
        ),
        #13
        Post(
        user_id=2,
        photo_id=19,
        title="Dancing Lights Above",
        text="The artistic arrangement of hanging lamps in this living room creates a captivating play of light and shadows. It's a perfect setting for evening gatherings or a quiet night in. How do you like the interplay of light in this space?",
        created_at=current_date,
        updated_at=current_date
        ),
        #14
        Post(
        user_id=3,
        photo_id=20,
        title="A Library of Dreams",
        text="A living room that doubles as a library is a book lover's paradise. The cozy, reddish tones and the wall of books make it a space where you can lose yourself in the world of literature. What's your favorite reading spot at home?",
        created_at=current_date,
        updated_at=current_date
        ),
        #15
        Post(
        user_id=1,
        photo_id=21,
        title= "Simplicity Meets Sophistication",
        text= "Simplicity and style go hand in hand in this modern living room. The clean lines and open space create a welcoming atmosphere. How do you feel about minimalist design?",
        created_at=current_date,
        updated_at=current_date
        ),
        #16
        Post(
        user_id=2,
        photo_id=22,
        title='Finding Comfort in Simplicity',
        text="I recently visited a friend's minimalist living room, and I was struck by how simplicity can be so inviting. The uncluttered space and neutral tones created a sense of calm that I can't stop thinking about.",
        created_at=current_date,
        updated_at=current_date
        ),
        #17
        Post(
        user_id=3,
        photo_id=23,
        title="The Grandeur of Modern Living",
        text="Tall ceilings, a long fireplace, and a modern design—it's the recipe for grandeur. This living room exudes a sense of space and luxury. What's your take on a high-ceilinged living area?",
        created_at=current_date,
        updated_at=current_date
        ),
        #18
        Post(
        user_id=1,
        photo_id=24,
        title="An Invitation to Relaxation",
        text="This modern living room beckons with its calm and inviting ambiance. The spacious seating area is perfect for unwinding after a long day. What's your idea of a relaxing living room?",
        created_at=current_date,
        updated_at=current_date
        ),
        #19
        Post(
        user_id=2,
        photo_id=25,
        title= "Peaceful Shades of Gray",
        text="The gentle gray tones in this living room create a serene atmosphere. It's a space that soothes the senses and allows you to unwind. How do you like this peaceful color palette?",
        created_at=current_date,
        updated_at=current_date
        ),
        #20
        Post(
        user_id=3,
        photo_id=26,
        title= "Big Modern Living Room with Family Comfort",
        text="The big modern living room felt like the heart of the home, a perfect family room with a massive TV at its center. It was inviting and cozy, making it an ideal spot to unwind.",
        created_at=current_date,
        updated_at=current_date
        ),
        #21
        Post(
        user_id=1,
        photo_id=27,
        title="Tall Modern Living Room with Elegance and Charm",
        text="In a tall, modern living room, a large round ceiling feature and golden coffee tables added a touch of grandeur. It felt like a place where elegant gatherings could take place.",
        created_at=current_date,
        updated_at=current_date
        ),
        #22
        Post(
        user_id=2,
        photo_id=28,
        title= "A Gallery-Like Living Room with Artistic Flair",
        text="Another spacious modern living room came into view, and this time, it was adorned with huge art pieces on the wall. It was a gallery-like space, and each piece seemed to tell a story.",
        created_at=current_date,
        updated_at=current_date
        ),
        #23
        Post(
        user_id=3,
        photo_id=29,
        title='I was searching for something chill, and I found this!',
        text="While exploring an antique store, I stumbled upon a weathered but beautiful side table. The imperfections tell a story, and it's now the centerpiece of my rustic-themed bedroom. Sometimes, it's the unique finds that truly define a space.",
        created_at=current_date,
        updated_at=current_date
        ),
        #24
        Post(
        user_id=1,
        photo_id=30,
        title="An Art Lover's Paradise",
        text="This living room is not just a space; it's a gallery of beautiful art pieces. Every corner tells a unique story, and it's a place where creativity knows no bounds. What kind of art do you have in your living space?",
        created_at=current_date,
        updated_at=current_date
        ),
        #25
        Post(
        user_id=2,
        photo_id=31,
        title='Creating a Personal Gallery',
        text="I've been collecting unique art pieces and creating a personal gallery at home. Every piece tells a story, and it's a constant source of inspiration. What art or decor items have you collected that hold sentimental value",
        created_at=current_date,
        updated_at=current_date
        ),
        #26
        Post(
        user_id=3,
        photo_id=32,
        title="Manhattan Living Room with a Touch of Luxury",
        text="Stepping into a Manhattan living room, I was welcomed by yellow curtains and a pink armchair. The crystal chandelier added a touch of sophistication, making it a space that felt both cozy and elegant.",
        created_at=current_date,
        updated_at=current_date
        ),
        #27
        Post(
        user_id=1,
        photo_id=33,
        title="Clean Joyous Space with a Touch of Pink",
        text="I entered a clean and joyous space featuring a pink sofa. The light colors in this living room created a calming atmosphere, and the unique pieces of art and eclectic objects showcased a captivating blend of styles.",
        created_at=current_date,
        updated_at=current_date
        ),
        #28
        Post(
        user_id=2,
        photo_id=34,
        title= "Calm Serenity in Soft Light Colors",
        text="The soft, light colors in the living room immediately put me at ease. It was a space that exuded calmness, with unique pieces of art and eclectic objects adding character and charm.",
        created_at=current_date,
        updated_at=current_date
        ),
        #29
        Post(
        user_id=3,
        photo_id=35,
        title="Industrial Chic in a Tall Ceiling Space",
        text="I explored a white space with a tall ceiling, reminiscent of an old factory that had been transformed for living. A sleek, free-standing black fireplace and soft leather pillow ottomans in various shapes made it a space where coziness met industrial chic.",
        created_at=current_date,
        updated_at=current_date
        ),
        #30
        Post(
        user_id=1,
        photo_id=36,
        title="Modern Scandinavian Simplicity with a Dash of Snow",
        text="In a modern Scandinavian setting, simplicity reigned supreme. A small, plain Christmas tree stood by the window, and I could see snowflakes falling outside. Modern bulb lamps hanging from the ceiling added a warm glow.",
        created_at=current_date,
        updated_at=current_date
        ),
        #31
        Post(
        user_id=2,
        photo_id=37,
        title="Warm Tone Dining Area with Rustic Elegance",
        text="I entered a dining area with a very warm tone and striking deer antlers hanging from a big ceiling lamp. The rustic yet elegant atmosphere made it the perfect place for gathering with loved ones.",
        created_at=current_date,
        updated_at=current_date
        ),
        #32
        Post(
        user_id=3,
        photo_id=38,
        title="A Piece of Paris in an Apartment Living Room",
        text="The living room felt like a piece of Paris in the heart of the city. The tall ceiling featured sculptural patterns, and a massive door opened to reveal a decorative metal balcony railing, enhancing the overall beauty of the space.",
        created_at=current_date,
        updated_at=current_date
        ),
        #33
        Post(
        user_id=1,
        photo_id=39,
        title= "Ocean-View Dining with Sculptural Elegance",
        text="As I walked into the dining room, I was greeted by a full wall of glass that overlooked the vast ocean. A modern sculptural lamp hung above, and a white sculpture of a woman in a long dress graced the table. The wooden table and white leather chairs added a touch of modern elegance.",
        created_at=current_date,
        updated_at=current_date
        ),
        #34
        Post(
        user_id=1,
        photo_id=40,
        title="A Spacious Bedroom with Panoramic Views",
        text="I found myself in a spacious bedroom with corner glass walls that offered a panoramic view of the lush green hills. The towering height and the serene surroundings made it an ideal retreat for relaxation.",
        created_at=current_date,
        updated_at=current_date
        ),
        #35
        Post(
        user_id=2,
        photo_id=41,
        title= "A Sleek Space Transformed by Modern Geometric Painting",
        text="I couldn't help but admire the sleek space and how a modern, colorful geometric painting had completely transformed it. The play of shapes and hues breathed life into the room.",
        created_at=current_date,
        updated_at=current_date
        ),
        #36
        Post(
        user_id=3,
        photo_id=42,
        title="A City Apartment with a Marble Fireplace",
        text="Walking into the city apartment, my eyes were drawn to the beautiful marble fireplace. The predominantly black and white decor created a sophisticated and timeless ambiance.",
        created_at=current_date,
        updated_at=current_date
        ),
        #37
        Post(
        user_id=1,
        photo_id=43,
        title="Stunning and Bright Living Room... A Book Lover's Retreat",
        text="The living room was bathed in light, and it beckoned me to pick up a book and unwind. It was a haven of relaxation, and I felt fortunate to be in its embrace.",
        created_at=current_date,
        updated_at=current_date
        ),
        #38
        Post(
        user_id=2,
        photo_id=44,
        title="A Stylish Lounging Area with Zebra Stools",
        text="The stylish lounging area exuded flair, and I couldn't help but love the zebra stools. They added a playful touch to the space that was both chic and inviting.",
        created_at=current_date,
        updated_at=current_date
        ),
        #39
        Post(
        user_id=3,
        photo_id=45,
        title="The Space-Expanding Magic of a Huge Wall Mirror",
        text="The large mirror on the wall performed an incredible feat—it made the space feel much bigger. It added a touch of glamour and sophistication that was truly enchanting.",
        created_at=current_date,
        updated_at=current_date
        ),
        #40
        Post(
        user_id=1,
        photo_id=46,
        title="A Piano Corner in a Beautiful Setting",
        text="In a corner of the room, a piano awaited. The flower painting above it was delicate, like a musical note, and the setting was as harmonious as a well-composed symphony.",
        created_at=current_date,
        updated_at=current_date
        ),
        #41
        Post(
        user_id=2,
        photo_id=47,
        title="A Dream Kitchen – Black, White, and Perfect Symmetry",
        text="I entered a dream kitchen, where black and white reigned supreme with perfect symmetry. It was a chef's haven, a place where culinary creativity knew no bounds.",
        created_at=current_date,
        updated_at=current_date
        ),
        #42
        Post(
        user_id=3,
        photo_id=48,
        title= "Elegant Living Space with a Splash of Color",
        text="The living space was a canvas of elegance, with vibrant colors serving as a backdrop for two massive sculptures. It was a masterpiece in its own right.",
        created_at=current_date,
        updated_at=current_date
        ),
        #43
        Post(
        user_id=1,
        photo_id=49,
        title="A Dining Room That Doubles as an Art Gallery",
        text="The dining room felt more like an art gallery than a place to have meals. Every glance around the room revealed a new masterpiece, turning dining into an exquisite visual journey.",
        created_at=current_date,
        updated_at=current_date
        ),
        #44
        Post(
        user_id=2,
        photo_id=50,
        title="The Perfect Harmony of Color, Contrast, and Art",
        text="The lounging space was a symphony of color and contrast, with stunning art as the centerpiece. It was a spot where every element seemed to be in perfect harmony.",
        created_at=current_date,
        updated_at=current_date
        ),
        #45
        Post(
        user_id=3,
        photo_id=51,
        title="An Inviting Outdoor Patio with a Natural Backdrop",
        text="Stepping onto the outdoor patio, I was greeted by a lush green wall of nature. It was an inviting oasis, a place where the outdoors seamlessly merged with comfort.",
        created_at=current_date,
        updated_at=current_date
        ),
        #46
        Post(
        user_id=1,
        photo_id=52,
        title="Elegant City Living Room in Modern Grey Tones",
        text="The city living room exuded an air of sophistication with its modern grey palette. It was a space where urban elegance met modern comfort.",
        created_at=current_date,
        updated_at=current_date
        ),
        #47
        Post(
        user_id=2,
        photo_id=53,
        title="Two Round Sofas in a Big, Inviting Space",
        text="Two round sofas sat next to each other in a spacious room, their colors inviting conversation and comfort. It was a space designed for memorable gatherings.",
        created_at=current_date,
        updated_at=current_date
        ),
        #48
        Post(
        user_id=3,
        photo_id=54,
        title="A Venice Apartment Fit for a Princess",
        text="I found myself in a Venice apartment that perfectly combined luxury with modern sensibilities. The colors and decor were a nod to royalty, making me feel like a princess.",
        created_at=current_date,
        updated_at=current_date
        ),
        #48
        Post(
        user_id=1,
        photo_id=55,
        title="Huge Blue Painting and Oversized Lamps – A Unique Sitting Room",
        text="The sitting room was dominated by a massive blue contemporary painting and oversized side lamps that made the space truly unique. It was a work of art in itself.",
        created_at=current_date,
        updated_at=current_date
        ),
        #49
        Post(
        user_id=2,
        photo_id=56,
        title="Spacious, Well-Designed Kitchen in Neutral Warmth",
        text="The kitchen was spacious, well-designed, and oozed both neutral and warm tones. It was a culinary haven where functionality met style.",
        created_at=current_date,
        updated_at=current_date
        ),
        #50
        Post(
        user_id=3,
        photo_id=57,
        title="Intriguing Wall Decoration... A Conversation Starter",
        text="I couldn't help but be intrigued by the wall decoration in this room. I wondered how it was done, and it was a conversation starter that added depth to the space.",
        created_at=current_date,
        updated_at=current_date
        )
    ]

    db.session.add_all(posts)
    db.session.commit()
    return posts

def undo_posts():
    if environment == "production":
     db.session.execute(
        f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
     db.session.execute(text("DELETE FROM posts"))
     db.session.commit()
