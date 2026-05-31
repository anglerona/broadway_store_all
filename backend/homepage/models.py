from django.db import models


class HomepageContent(models.Model):
    # Facility Features Section
    features_title = models.CharField(
        max_length=200,
        default="Facility Features"
    )
    features_description = models.TextField(
        default="Broadway Store-All provides a selection of storage units for you to choose from. We are conveniently located in a neighborhood facility located in Fairview Slopes. Whether you need storage for your home or business, we have the space for you."
    )

    # Unit Sizes Section
    unit_sizes_title = models.CharField(
        max_length=200,
        default="Unit Sizes"
    )
    unit_sizes_text_1 = models.CharField(
        max_length=300,
        default="Prices range from $60-$490 / month + GST."
    )

    unit_sizes_text_2 = models.CharField(
        max_length=300,
        default="Not sure what size is best? Our storage experts are here to help!"
    )

    # Contact Section
    contact_title = models.CharField(
        max_length=200,
        default="Contact & Hours"
    )
    phone_number = models.CharField(
        max_length=50,
        default="778-775-2026"
    )
    address = models.TextField(
        default="2425 Laurel Street, Vancouver, BC V5Z 4M3, Canada"
    )

    # Hours
    hours_description = models.CharField(
        max_length=200,
        blank=True,
        default="Accessible during hours of operation"
    )
    weekday_hours = models.CharField(
        max_length=100,
        default="Monday-Saturday: 10am - 6pm"
    )
    closed_hours = models.CharField(
        max_length=100,
        default="Closed Sunday, Holidays"
    )

    # Google Maps Embed URL
    google_maps_embed_url  = models.TextField(
        blank=True,
        default="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8854894857686!2d-123.08452968433845!3d49.27185797933135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867392e1b9aa13%3A0xa1b3c24f5e8f5f5f!2s2425%20Laurel%20St%2C%20Vancouver%2C%20BC%20V5Z%204M3%2C%20Canada!5e0!3m2!1sen!2sus!4v1692295567890!5m2!1sen!2sus"
    )

    class Meta:
        verbose_name = "Homepage Content"
        verbose_name_plural = "Homepage Content"

    def __str__(self):
        return "Homepage Content"
    
class Feature(models.Model):
    ICON_CHOICES = [
        ("sun", "Sun"),
        ("shield", "Shield"),
        ("fire", "Fire"),
        ("home", "Home"),
        ("location", "Location"),
        ("sparkles", "Sparkles"),
    ]

    title = models.CharField(max_length=200)
    icon = models.CharField(
        max_length=20,
        choices=ICON_CHOICES,
        default="sun"
    )
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.title
    
