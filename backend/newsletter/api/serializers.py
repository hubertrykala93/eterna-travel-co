from rest_framework import serializers

from newsletter.models import Newsletter


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = ['email']

    # def validate_email(self, email):
    #     if Newsletter.objects.filter(email=email).exists():
    #         raise serializers.ValidationError(
    #             {
    #                 "uniqueError": "Newsletter with this email already exists."
    #             }
    #         )
    #
    #     return email
