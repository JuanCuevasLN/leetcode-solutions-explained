function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let num2: number = target - nums[i];
        if (map.has(num2)) {
            return [map.get(num2)!, i];
        } 
        map.set(nums[i], i);
    }

    return [];
};