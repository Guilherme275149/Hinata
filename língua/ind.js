exports.wait = () => {
	return`*「 WAIT 」 EM PROCESSO AGUARDE... *`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUB NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nome|idade* \n*EXEMPLO ${prefix}daftar Isabella|18*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*sim falhou tente repetir mais alguns momentos*`
}

exports.linkga = () => {
	return`*LINK INVALIDO*`
}

exports.groupo = () => {
	return`*「PODE SER USADO SOMENTE EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「PROPRIETÁRIO DO BOT APENAS」*`
}

exports.ownerg = () => {
	return`*「SOMENTE GRUPO DE PROPRIETÁRIOS」*`
}

exports.admin = () => {
	return`*「ESSE COMANDO SÓ PODE SER USADO EM GRUPO」*`
}

exports.badmin = () => {
	return`*「SÓ FUNCIONA SE O BOT FOR ADMIN PARECE BURRO」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*O problema foi relatado ao proprietário do BOT, um relatório falso/main2 não será considerado*`
}

exports.wrongf = () => {
	return`*formato incorreto/Cadê O Texto Hum🤬*`
}

exports.clears = () => {
	return`*Limpado Com Sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\n para saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : não se esqueça deste número porque é importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *SOBRE USUARIO* ❱ ⊰─══
╠☞ *NOME* : ${FX LOLIZINHA}
╠☞ *Numero* :wa.me/5511934488829${sender.split("@")[0]}
╠☞ *Uang mu* : Rp${uangku}
╠☞ *XP* : ${getLevelingXp(sender)}/${reqXp}
╠☞ *Level* : ${getLevelingLevel(sender)}
╠☞ *Registro do usuário* : ${_registered.length}
╰════─⊱  ⸨ *LOLI* ⸩  ⊰─════╯

            𝐑𝐮𝐥𝐞𝐬 - 𝐒𝐢𝐦𝐩𝐥𝐞
▬▭▬▭▬▭▬▭▬▭▬▭▬
●⧐ *Spam : Auto Block!*
●⧐ *ri Pausa 5 segundos ao usá-lo!!*
●⧐ *Proprietário de Bug / Erro Harap Cht!*
●⧐ *Para manter o barco desligado ou ligado*
●⧐ *Tipo ${prefix}bot*
●⧐ *Por favor, seja paciente com os bugs!*
●⧐ *Melhor uso de botas!*
▬▭▬▭▬▭▬▭▬▭▬▭▬

╭══─⊱ ❰ *CRIADOR* ❱ ⊰─══➤
╠☞ *${prefix}sticker*
╠☞ *${prefix}vinta*
╠☞ *${prefix}avengers*
╠☞ *${prefix}summer*
╠☞ *${prefix}sandwrite*
╠☞ *${prefix}metaldark*
╠☞ *${prefix}dropwater*
╠☞ *${prefix}greenneon*
╠☞ *${prefix}neontext*
╠☞ *${prefix}sumery*
╠☞ *${prefix}blood*
╠☞ *${prefix}firework*
╠☞ *${prefix}lava*
║
╠══─⊱ ❰ *DIVERSÃO* ❱ ⊰─════➤
╠☞ *${prefix}mining*
╠☞ *${prefix}bisakah*
╠☞ *${prefix}kapankah*
╠☞ *${prefix}apakah*
╠☞ *${prefix}rate*
╠☞ *${prefix}slap*
╠☞ *${prefix}tampar*
╠☞ *${prefix}speed*
║
╠══─⊱ ❰ *MEDIA* ❱ ⊰─═══➤
╠☞ *${prefix}toxic*
╠☞ *${prefix}quotes*
╠☞ *${prefix}beritahoax*
╠☞ *${prefix}brainly*
╠☞ *${prefix}pinterest*
╠☞ *${prefix}resepmasakan*
╠☞ *${prefix}igstalk*
║
╠══─⊱ ❰ *LIMITE* ❱ ⊰─═══➤
╠☞ *${prefix}limit*
╠☞ *${prefix}buylimit*
╠☞ *${prefix}dompet*
║
╠══─⊱ ❰ *NSFW* ❱ ⊰─═══➤
╠☞ *${prefix}pokemon*
╠☞ *${prefix}anjing*
╠☞ *${prefix}1cak*
║
╠══─⊱ ❰ *GRUPO* ❱ ⊰─══➤
╠☞ *${prefix}hidetag*
╠☞ *${prefix}grouplist*
╠☞ *${prefix}limit*
╠☞ *${prefix}level*
╠☞ *${prefix}linkgc*
╠☞ *${prefix}tagall*
╠☞ *${prefix}setpp*
╠☞ *${prefix}add* Add Membro No Grupo 
╠☞ *${prefix}kick* Remove Membro Do Grupo 
╠☞ *${prefix}setname* Muda Nome Do Grupo
╠☞ *${prefix}setdesc* Muda Descrição Do Grupo
╠☞ *${prefix}demote*Rebaixa Admin
╠☞ *${prefix}promote*Promove Admin
╠☞ *${prefix}listadmin*
╠☞ *${prefix}group* [buka/tutup]
╠☞ *${prefix}leveling* [enable/disable]
╠☞ *${prefix}nsfw* [1/0]
╠☞ *${prefix}simih* [1/0]
╠☞ *${prefix}welcome* [1/0]
║
╠══─⊱ ❰ *PROPRIETÁRIO* ❱ ⊰─══➤
╠☞ *${prefix}bc*
╠☞ *${prefix}bcgc*
╠☞ *${prefix}kickall*
╠☞ *${prefix}setreply*
╠☞ *${prefix}setprefix*
╠☞ *${prefix}clearall*
╠☞ *${prefix}block*
╠☞ *${prefix}unblock*
╠☞ *${prefix}leave*
╠☞ *${prefix}event* [1/0]
╠☞ *${prefix}clone*
╠☞ *${prefix}setppbot*
║
╠══─⊱ ❰ *GRAÇAS A👇* ❱ ⊰─══➤
║
╠☞ *FX GUILHERME*

║
╰════─⊱  ⸨ *HINATA* ⸩  ⊰─════╯
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nome* : ${FX TODU}
┣⊱ *Número* :wa.me/5511934488829${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
