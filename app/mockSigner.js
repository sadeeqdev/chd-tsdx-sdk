export class MockSigner {
  constructor(address) {
    this.address = address;
  }

  getAddress() {
    return Promise.resolve(this.address);
  }

  signMessage(message) {
    // Simulate message signing
    const signature = `0x${Buffer.from(message).toString("hex")}`;
    return Promise.resolve(signature);
  }

  sendTransaction(transaction) {
    // Simulate transaction signing and sending
    const transactionHash = `0x${Buffer.from(
      JSON.stringify(transaction)
    ).toString("hex")}`;
    return Promise.resolve(transactionHash);
  }
}
