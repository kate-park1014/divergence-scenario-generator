export const scenario_snowy_fellstar_82_05 = {
	"scenario_id": "snowy_fellstar_82_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "pool_Fellstar_Dirge_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "끝없는 눈보라 속, 거대한 빛의 기둥이 솟아 있었다. 별자리의 심장부였다.",
						"english": "Amidst the endless blizzard, a colossal pillar of light stood. It was the heart of the constellation.",
						"japanese": "終わりのない吹雪の中、巨大な光の柱がそびえ立っていた。それが星座の心臓部だった。",
						"chinese": "在无尽的暴风雪中，一根巨大的光柱拔地而起。那是星座的核心。",
						"french": "Au milieu du blizzard sans fin, une colonne de lumière colossale s'élevait. C'était le cœur de la constellation.",
						"spanish": "En medio de la ventisca interminable, una columna de luz colosal se alzaba. Era el corazón de la constelación.",
						"vietnamese": "Trong trận bão tuyết bất tận, một cột sáng khổng lồ vươn lên. Đó là trái tim của chòm sao.",
						"thai": "ท่ามกลางพายุหิมะที่ไม่มีที่สิ้นสุด เสาแห่งแสงขนาดมหึมาได้ผุดขึ้น นั่นคือใจกลางของกลุ่มดาว",
						"hindi": "अनंत बर्फीले तूफान के बीच, प्रकाश का एक विशाल स्तंभ खड़ा था। यह नक्षत्र का हृदय था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기까지 왔는가. 약속대로, 별자리의 마지막 빛이 우리를 기다린다.",
						"english": "You've made it this far. As promised, the last light of the constellation awaits us.",
						"japanese": "ここまで来たか。約束通り、星座の最後の光が我々を待っている。",
						"chinese": "你走到这里了。按照约定，星座的最后一束光在等着我们。",
						"french": "Tu es arrivé jusqu'ici. Comme promis, la dernière lumière de la constellation nous attend.",
						"spanish": "Has llegado hasta aquí. Como prometido, la última luz de la constelación nos espera.",
						"vietnamese": "Ngươi đã đến được đây rồi. Đúng như lời hứa, tia sáng cuối cùng của chòm sao đang chờ đợi chúng ta.",
						"thai": "เจ้ามาถึงที่นี่แล้วหรือ. ตามสัญญา แสงสุดท้ายของหมู่ดาวกำลังรอเราอยู่.",
						"hindi": "तुम यहाँ तक आ गए। वादे के मुताबिक, नक्षत्र का आखिरी प्रकाश हमारा इंतजार कर रहा है।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "빛? 이 모든 어둠 속에서… 난 공허함밖에 느껴지지 않아.",
						"english": "Light? In all this darkness... I feel nothing but emptiness.",
						"japanese": "光？この全ての暗闇の中で…私は虚無しか感じない。",
						"chinese": "光？在这无尽的黑暗中……我只感到一片虚无。",
						"french": "La lumière ? Dans toute cette obscurité... je ne ressens que le vide.",
						"spanish": "¿Luz? En toda esta oscuridad... no siento más que vacío.",
						"vietnamese": "Ánh sáng ư? Giữa tất cả bóng tối này… ta chỉ cảm thấy sự trống rỗng.",
						"thai": "แสงสว่างรึ? ในความมืดมิดทั้งหมดนี้... ข้าไม่รู้สึกอะไรนอกจากความว่างเปล่า.",
						"hindi": "प्रकाश? इस सारे अँधेरे में... मुझे खालीपन के सिवा कुछ महसूस नहीं होता।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아닐세. 이 길 끝에는, 분명 구원이 있을 거야. 우리를 인도하는….",
						"english": "No. At the end of this path, there will surely be salvation. Guiding us...",
						"japanese": "違う。この道の先には、きっと救いがあるだろう。我々を導く…",
						"chinese": "不。这条路的尽头，肯定会有救赎。指引着我们……",
						"french": "Non. Au bout de ce chemin, il y aura sûrement le salut. Nous guidant...",
						"spanish": "No. Al final de este camino, seguramente habrá salvación. Guiándonos...",
						"vietnamese": "Không. Cuối con đường này, chắc chắn sẽ có sự cứu rỗi. Dẫn lối chúng ta…",
						"thai": "ไม่หรอก. ที่ปลายทางนี้ ย่อมมีความรอดเป็นแน่. นำทางพวกเรา...",
						"hindi": "नहीं। इस रास्ते के अंत में, निश्चित रूप से मुक्ति होगी। हमें मार्ग दिखाते हुए..."
					},
					"emotion": "base",
					"speaker": "anuk"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "멀리서 들려오는 나지막한 노랫소리. 잃어버린 자들을 위한 자장가 같았다.",
						"english": "A low song drifted from afar. It sounded like a lullaby for the lost.",
						"japanese": "遠くから聞こえる低い歌声。それは失われた者たちのための子守歌のようだった。",
						"chinese": "远处传来低沉的歌声。听起来像是为迷失者而唱的摇篮曲。",
						"french": "Un chant bas s'éleva de loin. Cela ressemblait à une berceuse pour les perdus.",
						"spanish": "Una canción tenue flotaba desde lejos. Sonaba como una nana para los perdidos.",
						"vietnamese": "Một tiếng hát khe khẽ vọng lại từ xa. Nghe như một bài hát ru dành cho những linh hồn lạc lối.",
						"thai": "เสียงเพลงแผ่วเบาแว่วมาจากที่ไกลๆ. เหมือนเป็นเพลงกล่อมเด็กสำหรับผู้ที่หลงทาง.",
						"hindi": "दूर से एक धीमी आवाज़ में गाना सुनाई दिया। यह खोए हुए लोगों के लिए लोरी जैसा लग रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 노랫소리는… 전설 속의 그 자장가인가? 잃어버린 영혼들을 위로하는….",
						"english": "This song... is it the lullaby from the legends? Comforting lost souls...",
						"japanese": "この歌声は…伝説の中のあの歌か？失われた魂を慰める…",
						"chinese": "这歌声……是传说中的那首摇篮曲吗？抚慰着迷失的灵魂……",
						"french": "Ce chant... est-ce la berceuse des légendes ? Réconfortant les âmes perdues...",
						"spanish": "¿Esta canción... es la nana de las leyendas? Consolando almas perdidas...",
						"vietnamese": "Tiếng hát này… có phải là bài hát ru trong truyền thuyết không? An ủi những linh hồn lạc lối…",
						"thai": "เสียงเพลงนี้... มันคือเพลงกล่อมเด็กในตำนานหรือ? ปลอบประโลมวิญญาณที่หลงหาย...",
						"hindi": "यह गाना... क्या यह किंवदंतियों की वह लोरी है? खोई हुई आत्माओं को सांत्वना देने वाली..."
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "위로? 어딘가 스산하고, 슬프게 들려. 마치… 울부짖음처럼.",
						"english": "Comfort? It sounds eerie and sad. Like... a wail.",
						"japanese": "慰め？どこか不気味で、悲しく聞こえる。まるで…泣き叫びのように。",
						"chinese": "安慰？听起来有些阴森和悲伤。就像……一声哭嚎。",
						"french": "Du réconfort ? Ça sonne lugubre et triste. Comme... un gémissement.",
						"spanish": "¿Consuelo? Suena espeluznante y triste. Como... un lamento.",
						"vietnamese": "An ủi ư? Nghe thật u ám và buồn bã. Như thể… một tiếng gào thét.",
						"thai": "ปลอบประโลมหรือ? มันฟังดูน่าขนลุกและเศร้าสร้อย. ราวกับ... เสียงคร่ำครวญ.",
						"hindi": "सांत्वना? यह कहीं डरावना और दुखद लगता है। जैसे... एक चीख।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아닐세… 별자리는 우리를 저버리지 않아. 우리를 인도하는….",
						"english": "No... the constellation won't abandon us. Guiding us...",
						"japanese": "違う…星座は我々を見捨てない。我々を導く…",
						"chinese": "不……星座不会抛弃我们。它指引着我们……",
						"french": "Non... la constellation ne nous abandonnera pas. Nous guidant...",
						"spanish": "No... la constelación no nos abandonará. Guiándonos...",
						"vietnamese": "Không… chòm sao sẽ không bỏ rơi chúng ta đâu. Dẫn lối chúng ta…",
						"thai": "ไม่หรอก... หมู่ดาวจะไม่ทอดทิ้งเรา. นำทางเรา...",
						"hindi": "नहीं... नक्षत्र हमें नहीं छोड़ेगा। हमें मार्ग दिखाते हुए..."
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 바이킹의 유물이 눈보라 속에 희미하게 빛났다. 룬 문자가 새겨져 있었다.",
						"english": "An ancient Viking relic glowed faintly in the blizzard. Runes were carved into it.",
						"japanese": "古いヴァイキングの遺物が吹雪の中でかすかに光っていた。ルーン文字が刻まれていた。",
						"chinese": "古老的维京遗物在暴风雪中微弱地闪烁着。上面刻着符文。",
						"french": "Une ancienne relique viking brillait faiblement dans le blizzard. Des runes y étaient gravées.",
						"spanish": "Una antigua reliquia vikinga brillaba débilmente en la ventisca. Había runas grabadas en ella.",
						"vietnamese": "Một di vật Viking cổ xưa lờ mờ phát sáng trong bão tuyết. Các chữ rune được khắc trên đó.",
						"thai": "วัตถุโบราณของชาวไวกิ้งชิ้นหนึ่งส่องแสงเรืองรองจางๆ ในพายุหิมะ. มีอักษรรูนสลักอยู่.",
						"hindi": "एक प्राचीन वाइकिंग अवशेष बर्फीले तूफान में मंद-मंद चमक रहा था। उस पर रनिक अक्षर खुदे हुए थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "이 룬 문자는 희망을 뜻하는데… 왜 이렇게 깊은 절망이 느껴지는 거지?",
						"english": "These runes signify hope... why do I feel such deep despair?",
						"japanese": "このルーン文字は希望を意味するのに…なぜこんなにも深い絶望を感じるのだろう？",
						"chinese": "这些符文象征着希望……为什么我却感到如此深切的绝望？",
						"french": "Ces runes symbolisent l'espoir... pourquoi est-ce que je ressens un désespoir si profond ?",
						"spanish": "Estas runas significan esperanza... ¿por qué siento una desesperación tan profunda?",
						"vietnamese": "Những chữ rune này có nghĩa là hy vọng… tại sao ta lại cảm thấy sự tuyệt vọng sâu sắc đến vậy?",
						"thai": "อักษรรูนเหล่านี้หมายถึงความหวัง... ทำไมข้าถึงรู้สึกสิ้นหวังลึกซึ้งเช่นนี้?",
						"hindi": "ये रनिक अक्षर आशा का प्रतीक हैं... मुझे इतनी गहरी निराशा क्यों महसूस हो रही है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "희망을 빙자한 파멸… 이바르의 경고가 떠올라. 이 모든 것이 미끼였나?",
						"english": "Destruction masquerading as hope... Ivar's warning comes to mind. Was all this a trap?",
						"japanese": "希望を装った破滅…イーヴァルの警告が頭をよぎる。これは全て罠だったのか？",
						"chinese": "假借希望之名的毁灭……伊瓦尔的警告浮现在脑海。这一切都是诱饵吗？",
						"french": "La destruction déguisée en espoir... l'avertissement d'Ivar me revient à l'esprit. Tout cela n'était-il qu'un piège ?",
						"spanish": "Destrucción disfrazada de esperanza... el aviso de Ivar me viene a la mente. ¿Todo esto fue un engaño?",
						"vietnamese": "Sự hủy diệt đội lốt hy vọng… Lời cảnh báo của Ivar lại hiện về. Tất cả những điều này có phải là một cái bẫy không?",
						"thai": "ความพินาศที่แฝงมาในคราบความหวัง... คำเตือนของอิวาร์ผุดขึ้นมาในใจ. ทั้งหมดนี้เป็นเพียงเหยื่อล่อหรือ?",
						"hindi": "आशा के भेष में विनाश... इवार की चेतावनी याद आती है। क्या यह सब एक जाल था?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "내 믿음이… 이 모든 여정이… 대체 무엇을 위한 것이었단 말인가….",
						"english": "My faith... this entire journey... what was it all for...?",
						"japanese": "私の信仰が… この全ての旅が… 一体何のためだったというのだ…。",
						"chinese": "我的信仰… 这一切的旅程… 究竟是为了什么…？",
						"french": "Ma foi... tout ce voyage... à quoi bon tout cela...?",
						"spanish": "Mi fe... todo este viaje... ¿para qué fue todo esto...?",
						"vietnamese": "Niềm tin của ta… cuộc hành trình này… rốt cuộc là vì điều gì…?",
						"thai": "ศรัทธาของข้า... การเดินทางทั้งหมดนี้... เพื่ออะไรกันแน่...?",
						"hindi": "मेरा विश्वास... यह सारी यात्रा... आखिर किस लिए थी...?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "노랫소리가 더욱 크게 울려 퍼졌다. 망자를 위한 자장가가 아닌, 죽음으로 이끈 기만의 노래였다.",
						"english": "The singing grew louder. Not a lullaby for the dead, but a song of deceit that led to death.",
						"japanese": "歌声はさらに大きく響き渡った。死者のための子守唄ではなく、死へと誘う欺瞞の歌だった。",
						"chinese": "歌声越发响亮。那不是为亡者而唱的摇篮曲，而是引向死亡的欺骗之歌。",
						"french": "Le chant résonnait plus fort. Non pas une berceuse pour les morts, mais un chant de tromperie menant à la mort.",
						"spanish": "El canto se hizo más fuerte. No era una nana para los muertos, sino una canción de engaño que conducía a la muerte.",
						"vietnamese": "Tiếng hát vang vọng hơn. Đó không phải khúc ru ngủ cho người chết, mà là bài ca lừa dối dẫn đến cái chết.",
						"thai": "เสียงเพลงดังขึ้น ไม่ใช่เพลงกล่อมคนตาย แต่เป็นเพลงหลอกลวงที่นำไปสู่ความตาย",
						"hindi": "गाने की आवाज़ और तेज़ हो गई। यह मृतकों के लिए लोरी नहीं, बल्कि धोखे का गीत था जो मौत की ओर ले गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "들리는가! 저 노랫소리! 망자를 위로하는 것이 아니었어! 우리를 죽음으로 이끈 기만이었어!",
						"english": "Do you hear it! That song! It wasn't to comfort the dead! It was deceit that led us to death!",
						"japanese": "聞こえるか！あの歌声が！死者を慰めるものではなかった！我々を死へと導いた欺瞞だったのだ！",
						"chinese": "听见了吗！那歌声！那不是为了慰藉亡者！那是将我们引向死亡的欺骗！",
						"french": "Entendez-vous ! Ce chant ! Ce n'était pas pour réconforter les morts ! C'était une tromperie qui nous a menés à la mort !",
						"spanish": "¡Lo oyes! ¡Ese canto! ¡No era para consolar a los muertos! ¡Era un engaño que nos llevó a la muerte!",
						"vietnamese": "Ngươi có nghe không! Tiếng hát đó! Không phải để an ủi người chết! Mà là sự lừa dối dẫn chúng ta đến cái chết!",
						"thai": "ได้ยินไหม! เสียงเพลงนั้น! ไม่ใช่ปลอบใจคนตาย! มันคือการหลอกลวงที่นำเราไปสู่ความตาย!",
						"hindi": "क्या तुम सुन रहे हो! वो गाना! वो मृतकों को सांत्वना देने के लिए नहीं था! वो धोखा था जिसने हमें मौत की ओर धकेला!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 처음부터… 속았다는 거야? 모든 약속이 거짓이었다고?",
						"english": "We were... deceived from the start? All promises were lies?",
						"japanese": "我々は最初から… 騙されていたというのか？全ての約束が嘘だったと？",
						"chinese": "我们从一开始… 就被骗了吗？所有的承诺都是谎言吗？",
						"french": "Nous avons été... trompés dès le début ? Toutes les promesses étaient des mensonges ?",
						"spanish": "¿Fuimos... engañados desde el principio? ¿Todas las promesas eran mentiras?",
						"vietnamese": "Chúng ta… đã bị lừa từ đầu ư? Mọi lời hứa đều là dối trá sao?",
						"thai": "เรา... ถูกหลอกตั้งแต่แรกเหรอ? คำสัญญาที่ให้ไว้เป็นเรื่องโกหกทั้งหมดเหรอ?",
						"hindi": "क्या हमें शुरू से ही... धोखा दिया गया था? क्या सभी वादे झूठे थे?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "내가… 내가 너희를 이 길로 이끌었어… 나는… 무엇을 믿었던 거지? 나는…!",
						"english": "I... I led you down this path... What did I... believe in? I...!",
						"japanese": "私が… 私がお前たちをこの道へ導いた… 私は… 何を信じていたのだ？私は…！",
						"chinese": "我… 我把你们引上了这条路… 我… 到底相信了什么？我…！",
						"french": "Moi... Je vous ai menés sur ce chemin... En quoi... ai-je cru ? Je...!",
						"spanish": "Yo... yo os guié por este camino... ¿En qué... creía yo? ¡Yo...!",
						"vietnamese": "Ta… ta đã dẫn các ngươi đi con đường này… Ta… đã tin vào điều gì chứ? Ta…!",
						"thai": "ฉัน... ฉันนำพวกคุณมาทางนี้... ฉัน... เชื่ออะไรอยู่กันแน่? ฉัน...!",
						"hindi": "मैंने... मैंने तुम्हें इस रास्ते पर लाया... मैंने... किस पर विश्वास किया था? मैं...!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이제 멈출 수 없어. 진실을 마주해야만 해.",
						"english": "...I can't stop now. I must face the truth.",
						"japanese": "…もう止まれない。真実と向き合わなければならない。",
						"chinese": "…现在不能停下。必须面对真相。",
						"french": "...Je ne peux plus m'arrêter. Je dois faire face à la vérité.",
						"spanish": "...No puedo parar ahora. Debo enfrentarme a la verdad.",
						"vietnamese": "…Giờ không thể dừng lại được. Phải đối mặt với sự thật.",
						"thai": "...ตอนนี้หยุดไม่ได้แล้ว ต้องเผชิญหน้ากับความจริง",
						"hindi": "...अब मैं रुक नहीं सकता। मुझे सच्चाई का सामना करना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "아… 아아… 미안하다… 내가 너희를 인도했어야 했는데….",
						"english": "Ah... I'm sorry... I should have guided you...",
						"japanese": "「あ…ああ…すまない…私が君たちを導くべきだったのに…。」",
						"chinese": "“啊……啊啊……对不起……我本应该引导你们的……”",
						"french": "« Ah... je suis désolé... J'aurais dû vous guider... »",
						"spanish": "«Ah... lo siento... Debí haberos guiado...»",
						"vietnamese": "“À... ôi... Tôi xin lỗi... Lẽ ra tôi nên dẫn lối cho các ngươi...”",
						"thai": "“อ่า... อ่าา... ขอโทษด้วย... ฉันควรจะนำทางพวกเธอแท้ๆ...”",
						"hindi": "“आह... मैं माफी चाहता हूँ... मुझे ही तुम्हें रास्ता दिखाना चाहिए था...”"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 길 끝에는… 더 이상 고통도… 희망도 없을 테니… 부디 편히… 잠들거라….",
						"english": "At the end of this path... there will be no more pain... no more hope... Please... rest peacefully...",
						"japanese": "「この道の終わりには…もう苦痛も…希望もないだろうから…どうか安らかに…眠りなさい…。」",
						"chinese": "“在这条路的尽头……将不再有痛苦……也不再有希望……请安息吧……”",
						"french": "« Au bout de ce chemin... il n'y aura plus de douleur... plus d'espoir... S'il vous plaît... reposez-vous en paix... »",
						"spanish": "«Al final de este camino... no habrá más dolor... ni más esperanza... Por favor... descansad en paz...»",
						"vietnamese": "“Ở cuối con đường này... sẽ không còn đau khổ... không còn hy vọng nữa... Xin hãy... an nghỉ...”",
						"thai": "“ที่ปลายทางนี้... จะไม่มีความเจ็บปวดอีก... ไม่มีหวังอีกแล้ว... ได้โปรด... หลับให้สบายเถิด...”",
						"hindi": "“इस मार्ग के अंत में... न कोई दर्द होगा... न कोई आशा... कृपया... शांति से सो जाओ...”"
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "별자리가 폭발하며, 차가운 빛의 파편들이 흩어졌다. 그것들은 얼어붙은 바이킹 항해사들의 형상으로 변해, 절규하며 허공으로 사라져갔다.",
						"english": "The constellation exploded, scattering fragments of cold light. They transformed into the figures of frozen Viking navigators, screaming as they vanished into the void.",
						"japanese": "「星座が爆発し、冷たい光の破片が散らばった。それらは凍てついたヴァイキングの航海士たちの姿に変わり、絶叫しながら虚空へと消え去っていった。」",
						"chinese": "“星座爆炸了，散落着冰冷的碎片。它们变成了冰冻维京航海者的形象，尖叫着消失在虚空中。”",
						"french": "« La constellation explosa, dispersant des fragments de lumière froide. Ils se transformèrent en figures de navigateurs vikings gelés, hurlant alors qu'ils disparaissaient dans le vide. »",
						"spanish": "«La constelación explotó, esparciendo fragmentos de luz fría. Se transformaron en las figuras de navegantes vikingos congelados, gritando mientras se desvanecían en el vacío.»",
						"vietnamese": "“Chòm sao phát nổ, những mảnh sáng lạnh lẽo vỡ vụn. Chúng biến thành hình hài những nhà hàng hải Viking đóng băng, gào thét rồi tan biến vào hư không.”",
						"thai": "“กลุ่มดาวระเบิด แสงเย็นยะเยือกแตกกระจาย พวกมันกลายเป็นร่างของนักเดินเรือไวกิ้งที่ถูกแช่แข็ง กรีดร้องพลางเลือนหายไปในความว่างเปล่า”",
						"hindi": "“तारामंडल फट गया, ठंडी रोशनी के टुकड़े बिखर गए। वे जमे हुए वाइकिंग नाविकों के रूप में बदल गए, चीखते हुए शून्य में गायब हो गए।”"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "별자리… 나의 신념… 모두… 거짓이었어… 나는… 무엇을 위해 살았던가….",
						"english": "The constellation... my faith... all of it... was a lie... What did I live for...?",
						"japanese": "「星座…私の信念…すべて…嘘だった…私は…何のために生きてきたのか…。」",
						"chinese": "“星座……我的信仰……一切……都是谎言……我究竟为何而活……”",
						"french": "« La constellation... ma foi... tout... n'était qu'un mensonge... Pour quoi ai-je vécu...? »",
						"spanish": "«La constelación... mi fe... todo... era una mentira... ¿Para qué he vivido...?»",
						"vietnamese": "“Chòm sao... niềm tin của ta... tất cả... đều là dối trá... Ta đã sống vì điều gì...?”",
						"thai": "“กลุ่มดาว... ความศรัทธาของฉัน... ทั้งหมด... เป็นเรื่องโกหก... ฉันมีชีวิตอยู่เพื่ออะไรกัน...?”",
						"hindi": "“तारामंडल... मेरा विश्वास... सब कुछ... झूठ था... मैं किसलिए जिया...?”"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…이게… 승리인가? 왜 아무것도 되돌릴 수 없지….",
						"english": "...Is this... victory? Why can't anything be undone...?",
						"japanese": "「…これが…勝利なのか？なぜ何も元に戻せないのだ…。」",
						"chinese": "“……这就是……胜利吗？为什么什么都无法挽回……”",
						"french": "« ...Est-ce... une victoire ? Pourquoi rien ne peut-être annulé...? »",
						"spanish": "«...¿Esto es... la victoria? ¿Por qué no se puede deshacer nada...?»",
						"vietnamese": "“...Đây có phải... là chiến thắng? Sao không thể đảo ngược bất cứ điều gì...?”",
						"thai": "“...นี่... คือชัยชนะหรือ? ทำไมถึงไม่มีอะไรย้อนกลับได้เลย...?”",
						"hindi": "“...क्या यह... जीत है? क्यों कुछ भी बदला नहीं जा सकता...?”"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무의미한 승리가 남긴 것은 깊은 상실감과, 영원히 잊히지 않을 비탄의 여운이었다.",
						"english": "What remained of a meaningless victory was a profound sense of loss and the lingering echo of an unforgettable sorrow.",
						"japanese": "「無意味な勝利が残したのは、深い喪失感と、永遠に忘れられない悲嘆の余韻だった。」",
						"chinese": "“毫无意义的胜利留下的是深深的失落感，以及永难忘怀的悲伤余韵。”",
						"french": "« Ce qu'une victoire insignifiante laissa derrière elle fut un profond sentiment de perte et l'écho persistant d'une douleur inoubliable. »",
						"spanish": "«Lo que quedó de una victoria sin sentido fue una profunda sensación de pérdida y el eco persistente de una tristeza inolvidable.»",
						"vietnamese": "“Thứ còn lại từ một chiến thắng vô nghĩa là cảm giác mất mát sâu sắc, cùng dư âm bi thương không thể nào quên.”",
						"thai": "“สิ่งที่ชัยชนะที่ไร้ความหมายทิ้งไว้คือความรู้สึกสูญเสียอย่างลึกซึ้ง และความโศกเศร้าที่มิอาจลืมเลือน”",
						"hindi": "“एक अर्थहीन जीत के बाद जो बचा, वह था गहन हानि का एहसास और एक अविस्मरणीय दुख की स्थायी गूँज।”"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…어리석은 자여… 고통받지 마라. 이젠… 영원한 평화뿐….",
						"english": "...Foolish one... suffer no more. Now... only eternal peace awaits...",
						"japanese": "「…愚かな者よ…苦しむな。もはや…永遠の平和だけが…。」",
						"chinese": "“……愚蠢的家伙……不要再受苦了。现在……只有永恒的平静……”",
						"french": "« ...Insensé... ne souffre plus. Désormais... seule la paix éternelle... »",
						"spanish": "«...Necio... no sufras más. Ahora... solo la paz eterna...»",
						"vietnamese": "“...Kẻ ngu ngốc... đừng đau khổ nữa. Giờ đây... chỉ còn bình yên vĩnh cửu...”",
						"thai": "“...เจ้าคนโง่... อย่าทนทุกข์อีกเลย ตอนนี้... มีแต่สันติสุขนิรันดร์...”",
						"hindi": "“...मूर्ख... अब और कष्ट मत उठाओ। अब... केवल शाश्वत शांति...”"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "아직… 아직 끝나지 않았어… 진실을… 진실을 밝혀야 해….",
						"english": "It's not... not over yet... I must... I must reveal the truth...",
						"japanese": "「まだ…まだ終わってない…真実を…真実を明かさなければ…。」",
						"chinese": "“还没……还没结束……真相……我必须揭示真相……”",
						"french": "« Ce n'est pas... pas encore fini... Je dois... je dois révéler la vérité... »",
						"spanish": "«Aún... aún no ha terminado... Debo... debo revelar la verdad...»",
						"vietnamese": "“Chưa... vẫn chưa kết thúc... Ta phải... ta phải phơi bày sự thật...”",
						"thai": "“ยัง... ยังไม่จบ... ฉันต้อง... ฉันต้องเปิดเผยความจริง...”",
						"hindi": "“अभी... अभी खत्म नहीं हुआ है... मुझे... मुझे सच्चाई बतानी होगी...”"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…포기할 수 없어. 반드시… 널 막을 거야.",
						"english": "...I can't give up. I will... I will stop you.",
						"japanese": "「…諦められない。必ず…お前を止める。」",
						"chinese": "“……我不能放弃。我一定会……阻止你。”",
						"french": "« ...Je ne peux pas abandonner. Je t'arrêterai... coûte que coûte. »",
						"spanish": "«...No puedo rendirme. Debo... te detendré.»",
						"vietnamese": "“...Không thể bỏ cuộc. Ta nhất định... sẽ ngăn ngươi lại.”",
						"thai": "“...ฉันยอมแพ้ไม่ได้ ฉันจะ... ต้องหยุดเธอให้ได้”",
						"hindi": "“...मैं हार नहीं मान सकता। मैं तुम्हें... ज़रूर रोकूँगा।”"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 네가 이 모든 기만의 근원인가! 거짓된 별무리여!",
						"english": "You... are you the source of all this deceit! Oh, false constellation!",
						"japanese": "お前が… お前がこの全ての欺瞞の根源なのか！偽りの星群よ！",
						"chinese": "你… 你是这一切欺骗的根源吗！虚假的星群啊！",
						"french": "Toi... es-tu la source de toute cette tromperie ! Ô fausse constellation !",
						"spanish": "Tú... ¿eres la fuente de todo este engaño? ¡Oh, falsa constelación!",
						"vietnamese": "Ngươi… ngươi là nguồn gốc của mọi sự lừa dối này ư! Hỡi chòm sao giả dối!",
						"thai": "แก... แกคือต้นตอของการหลอกลวงทั้งหมดนี้ใช่ไหม! โอ้ว กลุ่มดาวหลอกลวง!",
						"hindi": "तुम... क्या तुम इस सारे धोखे का स्रोत हो! ओ, झूठे तारामंडल!"
					},
					"emotion": "angry",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "…나는 그저… 고통을 끝내려 했을 뿐. 영원한 고독 속에서….",
						"english": "...I merely... sought to end the suffering. In eternal solitude...",
						"japanese": "…私はただ… 苦痛を終わらせたかっただけだ。永遠の孤独の中で…。",
						"chinese": "…我只是… 想结束痛苦罢了。在永恒的孤独中…。",
						"french": "...Je voulais simplement... mettre fin à la souffrance. Dans la solitude éternelle...",
						"spanish": "...Yo solo... intenté poner fin al sufrimiento. En la soledad eterna...",
						"vietnamese": "…Ta chỉ là… muốn chấm dứt nỗi đau. Trong sự cô độc vĩnh cửu…",
						"thai": "...ข้าแค่... ต้องการยุติความเจ็บปวด ในความโดดเดี่ยวชั่วนิรันดร์...",
						"hindi": "...मैंने बस... पीड़ा को समाप्त करने की कोशिश की। अनंत एकांत में..."
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "부디 편히… 잠들거라… 더 이상 고통도, 희망도 없을 테니….",
						"english": "Please, rest... peacefully... There will be no more pain, no more hope...",
						"japanese": "どうか安らかに… 眠るがいい… もう苦痛も、希望もないのだから…。",
						"chinese": "请安息吧… 入睡吧… 不再有痛苦，不再有希望…。",
						"french": "Dors paisiblement... Il n'y aura plus de douleur, plus d'espoir...",
						"spanish": "Por favor, descansa... en paz... No habrá más dolor, ni más esperanza...",
						"vietnamese": "Xin hãy yên nghỉ… an giấc… Sẽ không còn đau khổ, không còn hy vọng nữa…",
						"thai": "ได้โปรดหลับให้สบายเถิด... จะไม่มีความเจ็บปวด ไม่มีหวังอีกต่อไป...",
						"hindi": "कृपया शांति से... सो जाओ... अब कोई दर्द नहीं, कोई उम्मीद नहीं रहेगी..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그건 안식이 아니야! 우리가 찾는 건 그런 죽음이 아니라고!",
						"english": "That's not rest! That's not the death we seek!",
						"japanese": "それは安息ではない！我々が求めているのは、そんな死ではない！",
						"chinese": "那不是安息！我们所寻求的不是那样的死亡！",
						"french": "Ce n'est pas le repos ! Ce n'est pas la mort que nous cherchons !",
						"spanish": "¡Eso no es descanso! ¡Esa no es la muerte que buscamos!",
						"vietnamese": "Đó không phải là sự an nghỉ! Cái chết mà chúng ta tìm kiếm không phải là cái chết đó!",
						"thai": "นั่นไม่ใช่การพักผ่อน! นั่นไม่ใช่ความตายที่เรากำลังมองหา!",
						"hindi": "वह आराम नहीं है! वह मौत नहीं है जिसकी हमें तलाश है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"차가운 침묵이 부서진 별무리 아래 내려앉았다.",
			"영원한 고독을 짊어진 채, 별자리는 마침내 사라졌다.",
			"하지만 잃어버린 희망은 돌아오지 않았다. 구원받은 것은 아무것도 없었다.",
			"승리했으나, 나의 가슴에는 공허함만이 남았다.",
			"이제, 나는 무엇을 향해 나아가야 하는가."
		],
		"english": [
			"Cold silence settled beneath the shattered constellation.",
			"Bearing eternal solitude, the constellation finally vanished.",
			"But the lost hope never returned. Nothing was saved.",
			"Though victorious, only emptiness remained in my heart.",
			"Now, what should I strive for?"
		],
		"japanese": [
			"冷たい沈黙が砕かれた星々の下に降り立った。",
			"永遠の孤独を背負い、星座はついに消え去った。",
			"しかし、失われた希望は戻らなかった。何も救われなかった。",
			"勝利したが、私の胸には虚無感だけが残った。",
			"今、私は何を求めて進むべきなのか。"
		],
		"chinese": [
			"冰冷的沉默降临在破碎的星群之下。",
			"背负着永恒的孤独，星座终于消失了。",
			"然而，失去的希望并未回归。没有任何事物得到救赎。",
			"虽已胜利，我的心中却只剩下空虚。",
			"现在，我该何去何从？"
		],
		"french": [
			"Un silence froid s'installa sous la constellation brisée.",
			"Portant le poids de la solitude éternelle, la constellation finit par disparaître.",
			"Mais l'espoir perdu ne revint jamais. Rien ne fut sauvé.",
			"Bien que victorieux, seul le vide demeurait dans mon cœur.",
			"Maintenant, vers quoi dois-je avancer ?"
		],
		"spanish": [
			"Un silencio frío se posó bajo la constelación destrozada.",
			"Soportando la soledad eterna, la constelación finalmente desapareció.",
			"Pero la esperanza perdida nunca regresó. Nada fue salvado.",
			"Aunque victorioso, solo el vacío quedó en mi corazón.",
			"Ahora, ¿hacia dónde debo avanzar?"
		],
		"vietnamese": [
			"Sự im lặng lạnh lẽo bao trùm dưới chòm sao tan vỡ.",
			"Mang theo sự cô độc vĩnh cửu, chòm sao cuối cùng đã biến mất.",
			"Nhưng hy vọng đã mất không bao giờ trở lại. Không có gì được cứu rỗi.",
			"Dù đã chiến thắng, nhưng trong tim tôi chỉ còn lại sự trống rỗng.",
			"Giờ đây, tôi phải hướng về đâu?"
		],
		"thai": [
			"ความเงียบงันเย็นชาปกคลุมใต้กลุ่มดาวที่แตกสลาย",
			"แบกรับความโดดเดี่ยวชั่วนิรันดร์ กลุ่มดาวก็เลือนหายไปในที่สุด",
			"แต่ความหวังที่หายไปไม่เคยกลับมา ไม่มีอะไรได้รับการช่วยเหลือ",
			"แม้จะชนะ แต่ในใจฉันเหลือเพียงความว่างเปล่า",
			"ตอนนี้ ฉันควรจะมุ่งหน้าไปทางไหน?"
		],
		"hindi": [
			"खंडित नक्षत्र के नीचे ठंडी खामोशी छा गई।",
			"शाश्वत एकांत को धारण करते हुए, नक्षत्र अंततः गायब हो गया।",
			"लेकिन खोई हुई आशा कभी वापस नहीं आई। कुछ भी नहीं बचा।",
			"यद्यपि विजयी हुआ, मेरे हृदय में केवल शून्यता ही शेष रही।",
			"अब, मुझे किस ओर बढ़ना चाहिए?"
		]
	},
	"prologue": {
		"korean": [
			"별자리는 희망이었다. 길 잃은 영혼을 인도하는 유일한 빛.",
			"아눅은 맹세했다. 그 빛이 고통을 끝내리라고.",
			"하지만 가장 깊은 곳, 진실은 차가운 배신으로 돌아왔다.",
			"영원한 고독의 별무리 아래, 모든 것은 공허로 흘러갔다."
		],
		"english": [
			"The constellation was hope. The sole light guiding lost souls.",
			"Anuk swore. That light would end the suffering.",
			"But in the deepest reaches, truth returned as cold betrayal.",
			"Under the constellation of eternal solitude, all flowed into emptiness."
		],
		"japanese": [
			"星座は希望だった。道に迷った魂を導く唯一の光。",
			"アヌークは誓った。その光が苦痛を終わらせると。",
			"しかし、最も深い場所で、真実は冷たい裏切りとなって戻ってきた。",
			"永遠の孤独の星々の下、すべては虚無へと流れていった。"
		],
		"chinese": [
			"星座是希望。是指引迷失灵魂的唯一光芒。",
			"阿努克发誓。那束光将终结痛苦。",
			"然而在最深处，真相却以冰冷的背叛呈现。",
			"在永恒孤独的星群下，一切都归于虚无。"
		],
		"french": [
			"La constellation était l'espoir. La seule lumière guidant les âmes perdues.",
			"Anuk jura. Que cette lumière mettrait fin à la souffrance.",
			"Mais dans ses profondeurs, la vérité revint comme une froide trahison.",
			"Sous la constellation de l'éternelle solitude, tout s'écoula dans le vide."
		],
		"spanish": [
			"La constelación era la esperanza. La única luz que guiaba a las almas perdidas.",
			"Anuk juró. Esa luz pondría fin al sufrimiento.",
			"Pero en lo más profundo, la verdad regresó como una fría traición.",
			"Bajo la constelación de la soledad eterna, todo fluyó hacia el vacío."
		],
		"vietnamese": [
			"Chòm sao là hy vọng. Ánh sáng duy nhất dẫn lối cho những linh hồn lạc lối.",
			"Anuk đã thề. Ánh sáng đó sẽ chấm dứt mọi đau khổ.",
			"Nhưng ở nơi sâu thẳm nhất, sự thật lại trở thành sự phản bội lạnh lẽo.",
			"Dưới chòm sao cô độc vĩnh cửu, tất cả trôi vào hư vô."
		],
		"thai": [
			"กลุ่มดาวคือความหวัง แสงเดียวที่นำทางดวงวิญญาณที่หลงทาง",
			"อนุกสาบานว่า แสงนั้นจะยุติความทุกข์ทรมาน",
			"แต่ในส่วนลึกที่สุด ความจริงกลับกลายเป็นการทรยศที่เย็นชา",
			"ภายใต้กลุ่มดาวแห่งความโดดเดี่ยวชั่วนิรันดร์ ทุกสิ่งไหลไปสู่ความว่างเปล่า"
		],
		"hindi": [
			"नक्षत्र आशा थी। भटकी हुई आत्माओं को राह दिखाने वाली एकमात्र रोशनी।",
			"अनुक ने शपथ ली। वह प्रकाश पीड़ा को समाप्त कर देगा।",
			"लेकिन सबसे गहरे में, सच ठंडे धोखे के रूप में लौट आया।",
			"शाश्वत एकांत के नक्षत्र के नीचे, सब कुछ शून्य में विलीन हो गया।"
		]
	}
} as const;
