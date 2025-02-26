const Moralis = require('moralis');

/* Moralis init code */
const serverUrl = "https://k8imqlb5dzpd.usemoralis.com:2053/server";
const appId = "Kf7O2boPKsgVF9Xiz7tWnhXNQCufgNyEBfnDkLeu";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */

async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  document.getElementById("btn-login").onclick = login;

/*Get NFTs Metadata*/

const options = { address: "0xd...07", chain: "bsc" };
const metaData = await Moralis.Web3API.token.getNFTMetadata(options);