const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
╔══╗\n\
║██║\n\
║(O)║♫ ♪ ♫ ♪\n\
╚══╝\n\
▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █\n\
Min- - - - - - - - - - - -●Max\n\
\n\
✄▒█▀▀█ ▒█░░▒█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀▀█▀▀ ▒█░▄▀ \n\
✄▒█░░░ ▒█▄▄▄█ ▒█▀▀▄ ▒█▀▀▀ ▒█▄▄▀ ░▒█░░ ▒█▀▄░ \n\
✄▒█▄▄█ ░░▒█░░ ▒█▄▄█ ▒█▄▄▄ ▒█░▒█ ░▒█░░ ▒█░▒█ \n\
\n\
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░▒▒▒▒░░░▒▒▒▒░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒░▒▒▒▒▒▒░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░▒▒▒░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░░░░░▓▓  \n\
▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░▓▓  \n\
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n\
_______▒__________▒▒▒▒▒▒▒▒▒▒▒▒▒▒                       \n\
______▒_______________▒▒▒▒▒▒▒▒                            \n\
_____▒________________▒▒▒▒▒▒▒▒                            \n\
____▒___________▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                    \n\
___▒                                                         \n\
__▒______▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ \n\
_▒______▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓   \n\
▒▒▒▒___▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓   \n\
▒▒▒▒__▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓    \n\
▒▒▒__▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓     \n\
▒▒\n");
console.info("\n\
=========================================\n\
BotName: LINE Cyber: JS\n\
Version: FORKED VERSION\n\
Thanks to @CyberTK @TKR_TEAM\n\
=========================================\n\
");

/*[̲̝̫̣̥̝͓͖̠̳̪̯̥̳̲͒̽̀ͩ̊̅̉ͤ̐͒ͬ́̒ͧ̅͑ͪ̏̉̿̃͑̈́͒̈́̎C̺̲͎̞̗͕͙̗̳̰̣͓̹̻̥̻̻̲̺̺̫̼͔̮ͬ͒ͧ̾̋͂ͯͤ̓̐ͧͨ̍̅̌̊̇ͪ̊ͣ̐ͯ̚̚][̜̻̰͉̬̹͎͕̩̦͉̜̙̲ͬ̉͒̈́͂́̅͑̏̍̽ͩ̉͊ͪ̃̄ͪͭͯ̑ͩ̂́ͨ̓ͭ̚Ỹ̥̱̝̹͇͓̲̈̀͐̅ͪͯ]̆̒ͯͯ[͔̖͖̥̝̻̝̼̗̲̰̹̥̤̼͍̽̇̅B̘̱̬̗̱̤̟̩̳̱̱͎̜͍̝̣̘̙̲̥̼̜͖̮̭̳̭̟̻̌̐̓͋̃͗͊ͫ̑͗̅́͑͑͒͆͂̔ͤ̀ͬ͐͊͆̓͆̿̍̔̓ͅ]̖͚͍̹͍͇̥͙̳̺ͬͯͦ̀ͧͬ͊̋̏̀[̭̻̫̳͇̣͈͕̘̙̬͓͚͎̣̜̙͕̱͓̟̹̭̥̟̟̲͔̼̭̜͍̙̯͒̑̔̌́̉͊̽̒̔ͥ̈̀ͥ͐̅E͙̳̦̫̩̗͕̦͉̲̖̙̥̝͔͙͈͈̣̥̟͕͙̅̿̋̿̇̂̑̎ͥ́͌͂̔̀]̦͙͉̦͙̥̟̪͔̺̹̺̙̠͍͂ͣ͊̐͋́̍ͯ͌̇̋̉͑̆ͩ[̞͕͔̠̜̠̲̖̗̮͙̳̞̜͖͚͓̲͓͙̠͖͍̟̥̣̦̜͕̻̹̙͂̎͂ͬ̅ͧ̀̐̿ͭ̄̆̿ͦͨͧ͋̀̚R̞̼͎͉͚̟̺̟̝̹̰̲̅ͅ]̆̀̈́̅́͒̀ͧ̚[̤̗̳͙̰͈͓̜͔͖͈̥͇̭͖̗̘̳̣̝͓̫͕̲̝͓̠̠̩̞̥͖̅̓̂̓͛́̒͛̔͂ͮ̂ͨ̃̉͊̋̏̂͌ͅṬ̺̪͚̝͔͉̺̩̺͔̙̙͇̲̹̗̼̖̭̲̱̮̼̥̅ͬ̅ͨ͐ͪ̐̓̈́ͣͮͫͧͮ̈ͤ̒ͫ͛]̘̳͎̻̤̲̘̜̭͔ͪ͛̾͆ͤͬ̌̈͛ͯ[̭̩̲͖̗̲̐͛ͯ̉̐̂̈ͭ̈́̅̓̐̏͋̇̚K̼̰̜̦̤̘̖̯̰͇͓̜͈̗̝̟͍̼̮̘̗̩͓͓̯̲̠̪͔͖̠͙̅̆̑̄͒̍̅̊͐̓̚̚]̦̭̿̐
| 
| 
|
*/
const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		
	}
});
