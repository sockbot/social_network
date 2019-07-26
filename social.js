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

let mostPopular = function() {
  let biggestFollowedCount = 0;
  let name = '';
  for (let uid in data) {
    if (getNumFollowed(uid) > biggestFollowedCount) {
      biggestFollowedCount = getNumFollowed(uid);
      name = data[uid].name;
    }
  }
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

let doesFollow = function(uid1, uid2) {
  // returns true if uid1 follows uid2
  let uid1Followers = data[uid1].follows;
  for (element of uid1Followers) {
    if (element === uid2) {
      return true;
    }
  } 
  return false;
}

let getNameFromUid = function(uid) {
  return data[uid].name;
}

let getFollowingList = function(uid) {
  // takes a uid and returns an array of followed 
  let followedList = [];
  for (name of data[uid].follows) {
    followedList.push(name);
  }
  return followedList;
}

const isInArray = function(val, arr) {
  for (let element of arr) {
    if (element === val) {
      return true;
    }
  }
  return false;
}

let getFollowerList = function(uid) {
  // takes a uid and returns an array of followers
  let followerList = [];
  // console.log(data['f01'].follows);
  // 
  for (let person in data) {
    console.log('person', person);
    // for (let index of data[person].follows) {
    //   console.log('index', index, 'data[person].follows', data[person].follows);
      
    // }
    if (isInArray(uid, data[person].follows)) {
      followerList.push(person);
    }
  }
  return followerList;
}

const getOneUser = function(uid) {
  let results = {};
  results.following = getFollowingList(uid);
  results.followed = getFollowedList(uid);
  return results;
}

const printUser = function(uid) {

}
console.log('Biggest follower is', biggestFollower());
console.log('Followed count for f06 is', getNumFollowed('f06'));
console.log('Most popular is', mostPopular());
console.log('f01 follows f02', doesFollow('f01', 'f02'));
console.log('f01 follows f05', doesFollow('f01', 'f05'));
console.log('Followed list of f01:', getFollowingList('f01'))
console.log('Follower list of f01:', getFollowerList('f01'))
