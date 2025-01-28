from .models import User, Profile, ProfileImage, Gender
from django import forms


class AdminUserForm(forms.ModelForm):
    username = forms.CharField(
        required=True,
        help_text="Enter the username.",
        label="Username",
    )
    email = forms.CharField(
        required=True,
        help_text="Enter the email.",
        label="Email",
    )
    password = forms.CharField(
        required=True,
        help_text="Enter the password.",
        label="Password",
    )
    is_active = forms.BooleanField(
        required=False,
        help_text="Mark if this user should be active.",
        initial=True,
    )
    is_staff = forms.BooleanField(
        required=False,
        help_text="Mark if this user should be staff.",
    )
    is_superuser = forms.BooleanField(
        required=False,
        help_text="Mark if this user should be superuser.",
    )

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "password",
            "is_active",
            "is_staff",
            "is_superuser",
        ]


class AdminProfileForm(forms.ModelForm):
    user = forms.ModelChoiceField(
        queryset=User.objects.all(),
        required=True,
        help_text="Select the user.",
        label="User"
    )
    firstname = forms.CharField(
        required=True,
        help_text="Enter the firstname.",
        label="Firstname",
    )
    lastname = forms.CharField(
        required=True,
        help_text="Enter the lastname.",
        label="Lastname",
    )
    gender = forms.ModelChoiceField(
        queryset=Gender.objects.all(),
        required=True,
        help_text="Select the gender.",
        label="Gender",
    )
    bio = forms.CharField(
        widget=forms.Textarea,
        required=False,
        help_text="Enter the short biography.",
        label="Biography",
    )
    phone_number = forms.CharField(
        required=True,
        help_text="Enter the phone number.",
        label="Phone Number",
    )
    country = forms.CharField(
        required=True,
        help_text="Enter the country.",
        label="Country",
    )
    state = forms.CharField(
        required=True,
        help_text="Enter the state",
        label="State",
    )
    city = forms.CharField(
        required=True,
        help_text="Enter the city.",
        label="City",
    )

    class Meta:
        model = Profile
        fields = [
            "user",
            "firstname",
            "lastname",
            "profile_image",
            "gender",
            "bio",
            "phone_number",
            "country",
            "state",
            "city",
        ]


class AdminProfileImageForm(forms.ModelForm):
    image = forms.ImageField(
        required=True,
        help_text="Upload the profile image.",
        label="Profile Image",
    )
    alt = forms.CharField(
        required=False,
        help_text="Enter the alternate text.",
        label="Alt",
    )

    class Meta:
        model = ProfileImage
        fields = [
            "id",
            "image",
            "alt",
        ]
