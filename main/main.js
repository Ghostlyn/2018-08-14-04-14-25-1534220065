module.exports = function main() {
	var lcd = [['._.','|.|','|_|'],
		   ['...','..|','..|'],
		   ['._.','._|','|_.'],
		   ['._.','._|','._|'],
		   ['...','|_|','..|'],
		   ['._.','|_.','._|'],
		   ['._.','|_.','|_|'],
		   ['._.','..|','..|'],
		   ['._.','|_|','|_|'],
		   ['._.','|_|','..|']]
    var result = ""
	var nums = arguments[0].split('')
	for (var i = 0; i <= 2; i++) {
		for (var j = 0; j < nums.length-1; j++) {
			result += lcd[nums[j]][i]
			result += ' '
        }	
		result += lcd[nums[j]][i]
		result += '\n'
	}
	console.log(result)
	return result
};