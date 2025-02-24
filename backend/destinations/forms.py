from django import forms
from .models import Currency, Language, TimeZone, Month, DestinationThumbnail, DestinationImage, Destination
from PIL import Image
from django.core.validators import ValidationError
from django_summernote.widgets import SummernoteWidget


class AdminCurrencyForm(forms.ModelForm):
    name = forms.CharField(
        help_text="Enter the currency name.",
        label="Name",
        required=True,
    )
    code = forms.CharField(
        help_text="Enter the currency code.",
        label="Code",
        required=True
    )

    class Meta:
        model = Currency
        fields = [
            "name",
            "code",
        ]


class AdminLanguageForm(forms.ModelForm):
    name = forms.CharField(
        help_text="Enter the language name.",
        label="Name",
        required=True,
    )
    code = forms.CharField(
        help_text="Enter the currency code.",
        label="Code",
        required=True,
    )

    class Meta:
        model = Language
        fields = [
            "name",
            "code",
        ]


class AdminTimeZoneForm(forms.ModelForm):
    name = forms.CharField(
        help_text="Enter the timezone name.",
        label="Name",
        required=True,
    )

    class Meta:
        model = TimeZone
        fields = [
            "name",
        ]


class AdminMonth(forms.ModelForm):
    name = forms.CharField(
        help_text="Enter the name of month.",
        label="Name",
        required=True,
    )

    class Meta:
        model = Month
        fields = [
            "name",
        ]


class AdminDestinationThumbnail(forms.ModelForm):
    image = forms.ImageField(
        required=True,
        help_text="Upload the destination thumbnail.",
        label="Thumbnail",
    )
    alt = forms.CharField(
        required=True,
        help_text="Enter the alternate text.",
        label="Alt",
    )

    class Meta:
        model = DestinationThumbnail
        fields = [
            "image",
            "alt",
        ]

    def clean_image(self):
        image = self.cleaned_data.get("image")

        try:
            img = Image.open(fp=image)
            width, height = img.size

            if width < height:
                raise ValidationError("The orientation of the photo must be horizontal.")

        except Exception as e:
            raise ValidationError(message=e)

        return image


class AdminDestinationImage(forms.ModelForm):
    image = forms.ImageField(
        required=True,
        help_text="Upload the destination image.",
        label="Thumbnail",
    )
    alt = forms.CharField(
        required=True,
        help_text="Enter the alternate text.",
        label="Alt",
    )

    class Meta:
        model = DestinationImage
        fields = [
            "image",
            "alt",
        ]

    def clean_image(self):
        image = self.cleaned_data.get("image")

        try:
            img = Image.open(fp=image)
            width, height = img.size

            if width < height:
                raise ValidationError("The orientation of the photo must be horizontal.")

        except Exception as e:
            raise ValidationError(message=e)

        return image


class AdminDestinationForm(forms.ModelForm):
    country = forms.CharField(
        help_text="Enter the country name.",
        label="Country",
        required=True,
    )
    description = forms.CharField(
        widget=SummernoteWidget,
        help_text="Enter the country description.",
        label="Description",
        required=True,
    )
    area = forms.CharField(
        help_text="Enter the country area.",
        label="Area",
        required=True,
    )
    population = forms.CharField(
        help_text="Enter the country population.",
        label="Population",
        required=True,
    )
    total_travelers = forms.CharField(
        help_text="Enter the number of travelers.",
        label="Number of Travelers",
        required=True,
    )

    class Meta:
        model = Destination
        fields = [
            "country",
            "description",
            "thumbnail",
            "images",
            "languages",
            "currencies",
            "area",
            "population",
            "timezone",
            "popular_tours",
            "time_to_travel",
        ]

    def __init__(self, *args, **kwargs):
        super(AdminDestinationForm, self).__init__(*args, **kwargs)

        self.fields["thumbnail"].help_text = "Upload the destination thumbnail."
        self.fields["thumbnail"].label = "Thumbnail"
        self.fields["thumbnail"].required = True

        self.fields["images"].help_text = "Upload the destination images."
        self.fields["images"].label = "Images"
        self.fields["images"].required = True

        self.fields["languages"].help_text = "Select languages."
        self.fields["languages"].label = "Languages"
        self.fields["languages"].required = True

        self.fields["currencies"].help_text = "Select currencies."
        self.fields["currencies"].label = "Currencies"
        self.fields["currencies"].required = True

        self.fields["timezone"].help_text = "Select timezone."
        self.fields["timezone"].label = "Timezone"
        self.fields["timezone"].required = True

        self.fields["popular_tours"].help_text = "Select popular tours."
        self.fields["popular_tours"].label = "Popular Tours"
        self.fields["popular_tours"].required = False

        self.fields["time_to_travel"].help_text = "Select the best months to travel."
        self.fields["time_to_travel"].label = "Time to Travel"
        self.fields["time_to_travel"].required = True
