from myKey import key
from openai import OpenAI

# TODO: describe script
"""

"""

client = OpenAI(api_key=key) # Initialize the OpenAI client with the provided API key

def action1(text):
    """
    action1.

    Parameters:
    text (str): The text to .

    Returns:
    .
    """
    propmt_message = (
    f"translate the following text to hebrew: {text}, return only the hebrew text.")
    #print(propmt_message)
    response = client.chat.completions.create(
    model="gpt-4o-mini",

    messages=[
      {"role": "user",
       "content": propmt_message},
    ],
    max_tokens=300,
    )
    return response.choices[0].message.content.lower() # TODO: configure



if __name__ == "__main__":
    print(action1("hello, Im 24 years old"))

