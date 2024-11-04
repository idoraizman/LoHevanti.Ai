from myKey import key
from openai import OpenAI

# TODO: describe script
"""

"""

client = OpenAI(api_key=key) # Initialize the OpenAI client with the provided API key


def sendPrompt(prompt: str, model: str = "gpt-4o-mini") -> str:
    """
    sends a prompt to gpt and returns its response
    :param prompt: text of the prompt
    :param model: which model to use
    :return: the response of chat-gpt
    """
    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "user",
             "content": prompt}
        ],
        max_tokens=300,
    )

    return response.choices[0].message.content.lower()


def translate(text):
    return sendPrompt(f"translate the following text to hebrew: {text}, return only the hebrew text.")


def rephrase(text):
    return sendPrompt(f"rephrase the following text in a friendly and short way: {text}. "
                      f"return only the rephrased text.")


def detail(text):
    return sendPrompt(f"rephrase the following text in a more detailed and elaborated way: {text}. "
                      f"return only the rephrased text.")


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

