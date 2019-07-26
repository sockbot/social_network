const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },

};

let biggestFollower = function() {
  let biggestFollowerCount = 0;
  let name = '';
  for (let uid in data) {
    if (getNumFollowing(uid) > biggestFollowerCount) {
      biggestFollowerCount = getNumFollowing(uid)
      name = data[uid].name;
    }
  }
  console.log(name);
  return name;
}

let getNumFollowing = function(uid) {
  return data[uid].follows.length;
}

let getNumFollowed = function(uid) {
  let followedCount = 0;
  for (let person in data) {
    for (let element of data[person].follows) {
      if (uid === element) {
        followedCount += 1;
      }
    }
  }
  return followedCount;
}

console.log('Biggest follower is', biggestFollower());
console.log('Followed count for f06 is', getNumFollowed('f06'));
