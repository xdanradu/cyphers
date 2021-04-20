	- A encodes the message with a random key 
	- A sends the message to B
	- B encodes the ciphered message with a random key
	- B sends the message to A
	- A decodes the message with its own initial key
	- A sends the message to B
	- B decodes the message with its initial key and gets the initial text.

1 XOR 0 = 1 and 1 XOR 1 = 0

Message XOR A Key XOR B Key XOR A Key XOR B Key = Message XOR (A Key XOR A Key) XOR (B Key XOR B Key) = Message XOR 0 XOR 0 = Initial Message

https://en.wikipedia.org/wiki/XOR_cipher#Use_and_security