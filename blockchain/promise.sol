pragma solidity ^0.4.20;

import "./ownable.sol";

contract PromiseContract is Ownable {

    struct Promise {
        uint timestamp;
        string promiseMessage;
        string author;
    }

    Promise[] promises;

    //  All the promises  owned by the user
    mapping (address => Promise[]) usersPromises;

    //  Indicate the last time the user posted
    mapping (address => uint32) userReadyToPost;
    
    //  the number of promise the user has created
    mapping (address => uint32) userNumberOfPromises;

    //  The time between which the user cannot post any promise
    uint32 coolDownTime = 1 days;

    //  the number of promises we return by 
    uint numberPromisesReturn = 50;


    //  the same user cannot post consecutives promises
    function _checkCoolDown() internal view returns (bool) {
        return (userReadyToPost[msg.sender] <= now);
    }

    //  the count down is trigger after the sender posted a promise
    function _triggerCooldown() internal {
        userReadyToPost[msg.sender] = uint32(now + coolDownTime);
    }

    //  Add a promise in the blockchain !
    function addPromise(string _message, uint _timestamp, string _author) external {
        require(_checkCoolDown());
        Promise memory promise = Promise(_timestamp, _message, _author);
        promises.push(promise);
        usersPromises[msg.sender].push(promise);
        userNumberOfPromises[msg.sender]++;
    }

    //  We cannot return the entire list of promise everytime, we need to set a limit at numberPromisesReturn
    //  Solidity doesn't lets us return struct in external functions, so we need to return array of tuples here
    function getPromisesFrom(uint _start) external returns (uint[],string[],string[]) { 
        //  the start cannot be negative
        require(_start >= 0);
        //  the start has to be smaller than the total lenght of promises
        require(_start <= promises.length);
        // I need before hand to know the size of the array returned, that`s why we donot use a while loop
        uint numberPromise = 0;
        if ((_start + numberPromisesReturn) >= promises.length) {
            numberPromise = promises.length - _start - 1;
        } else {
            numberPromise = numberPromisesReturn - 1;
        }
       
        uint[] memory timestamps = new uint[](numberPromise);
        string[] memory promiseMessages = new string[](numberPromise);
        string[] memory authors = new string[](numberPromise);

        for (uint i = _start; i < numberPromise; i++) {
            timestamps[i] = promises[i].timestamp;
            promiseMessages[i] = promises[i].promiseMessage;
            authors[i] = promises[i].author;
        }

        return (timestamps, promiseMessages, authors);
        
    }

    function changeReadyToPost(uint32 _time) external onlyOwner() {
        coolDownTime = _time;
    }


}