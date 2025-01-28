from .models import Newsletter
from django import forms


class AdminNewsletterForm(forms.ModelForm):
    email = forms.CharField(
        required=True,
        help_text="Enter the email.",
        label="Email",
    )
    active = forms.BooleanField(
        required=False,
        help_text="Check if you want this newsletter to be active.",
        label="Is Active",
    )

    class Meta:
        model = Newsletter
        fields = [
            "email",
            "active",
        ]
