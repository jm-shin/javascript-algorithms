function twoSum(nums: number[], target: number) {
    let map = {} as any;
    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];

        if (another in map) {
            return [map[another], i];
        }

        map[nums[i]] = i;
    }
};

const nums = [2, 5, 5, 11];
const target = 10;
console.log(twoSum(nums, target));