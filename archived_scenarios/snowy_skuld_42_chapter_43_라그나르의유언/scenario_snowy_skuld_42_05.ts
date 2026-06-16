export const scenario_snowy_skuld_42_05 = {
	"scenario_id": "snowy_skuld_42_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "pool_107"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 심장부. 수천 년 된 얼음이 거대한 배를 집어삼켰다.",
						"english": "The heart of the glacier. Millennia-old ice swallowed a colossal ship.",
						"japanese": "氷河の心臓部。数千年もの氷が巨大な船を飲み込んだ。",
						"chinese": "冰川之心。千年寒冰吞噬了巨轮。",
						"french": "Au cœur du glacier. Des milliers d'années de glace ont englouti un navire colossal.",
						"spanish": "El corazón del glaciar. Hielo milenario engulló un barco colosal.",
						"vietnamese": "Trái tim của băng hà. Lớp băng nghìn năm tuổi đã nuốt chửng một con tàu khổng lồ.",
						"thai": "ใจกลางธารน้ำแข็ง น้ำแข็งอายุนับพันปีกลืนกินเรือขนาดมหึมา",
						"hindi": "ग्लेशियर का हृदय। हज़ारों साल पुरानी बर्फ ने एक विशाल जहाज को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 갑판 위, 족장의 자리가 텅 비어 있었다. 그 옆 룬 비석은 침묵했다.",
						"english": "On the frozen deck, the chieftain's seat lay empty. The runic monument beside it was silent.",
						"japanese": "凍てつく甲板の上、族長の席は空っぽだった。その横のルーン碑石は沈黙していた。",
						"chinese": "在冰冷的甲板上，酋长的宝座空无一人。旁边的符文石碑也寂静无声。",
						"french": "Sur le pont gelé, le siège du chef était vide. Le monument runique à ses côtés était silencieux.",
						"spanish": "Sobre la cubierta helada, el asiento del jefe estaba vacío. El monumento rúnico a su lado guardaba silencio.",
						"vietnamese": "Trên boong tàu đóng băng, chiếc ghế của tộc trưởng trống rỗng. Tấm bia đá rune bên cạnh im lìm.",
						"thai": "บนดาดฟ้าที่เย็นเยือก ที่นั่งของหัวหน้าเผ่าว่างเปล่า ศิลาจารึกรูนข้างๆ ก็เงียบงัน",
						"hindi": "जमी हुई छत पर, मुखिया की सीट खाली थी। उसके बगल में मौजूद रूणिक स्मारक खामोश था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가… 척후선 스쿌드의 심장부?",
						"english": "Is this... the heart of the scout ship Skjold?",
						"japanese": "ここが…偵察船スキュルドの心臓部なのか？",
						"chinese": "这里是……侦察舰斯库尔德的中心吗？",
						"french": "C'est ici... le cœur du navire éclaireur Skjold ?",
						"spanish": "¿Es este... el corazón de la nave exploradora Skjold?",
						"vietnamese": "Đây là… trung tâm của tàu trinh sát Skjold sao?",
						"thai": "นี่คือ...ใจกลางของเรือลาดตระเวน Skjold งั้นหรือ?",
						"hindi": "क्या यह... टोही जहाज स्कोल्ड का हृदय है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "그렇다. 이곳에 망자의 맹세가 봉인되어 있지.",
						"english": "Indeed. Here lies sealed the oath of the departed.",
						"japanese": "そうだ。ここに亡者の誓いが封印されている。",
						"chinese": "是的。亡者的誓言就封印于此。",
						"french": "Oui. Ici est scellé le serment des défunts.",
						"spanish": "Así es. Aquí está sellado el juramento de los muertos.",
						"vietnamese": "Đúng vậy. Lời thề của người đã khuất được phong ấn ở đây.",
						"thai": "ใช่แล้ว ที่นี่ผนึกคำสาบานของผู้ล่วงลับไว้",
						"hindi": "हाँ। यहाँ मृतकों की शपथ मुहरबंद है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "텅 빈 족장의 자리는… 그 주인이 다시 돌아오지 못했음을 알린다.",
						"english": "The empty chieftain's seat... it signals its owner never returned.",
						"japanese": "空っぽの族長の席は…その主が二度と戻らなかったことを告げている。",
						"chinese": "空荡荡的酋长宝座……预示着它的主人再也无法归来。",
						"french": "Le siège vide du chef... signale que son propriétaire n'est jamais revenu.",
						"spanish": "El asiento vacío del jefe... indica que su dueño nunca regresó.",
						"vietnamese": "Chiếc ghế trống của tộc trưởng… báo hiệu chủ nhân của nó đã không thể trở về.",
						"thai": "ที่นั่งว่างเปล่าของหัวหน้าเผ่า...บ่งบอกว่าเจ้าของไม่กลับมาอีกเลย",
						"hindi": "मुखिया की खाली सीट... यह बताती है कि उसका मालिक कभी वापस नहीं आया।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "비석에 새겨진 룬 문자가… 심상치 않다.",
						"english": "The runic script carved on the monument... it's unsettling.",
						"japanese": "碑石に刻まれたルーン文字が…尋常ではない。",
						"chinese": "石碑上刻着的符文……非同寻常。",
						"french": "Les runes gravées sur le monument... sont inquiétantes.",
						"spanish": "Las runas grabadas en el monumento... son inquietantes.",
						"vietnamese": "Chữ rune khắc trên bia đá… không hề bình thường.",
						"thai": "อักษรรูนที่สลักบนศิลาจารึก...ไม่ธรรมดาเลย",
						"hindi": "स्मारक पर खुदे हुए रूणिक अक्षर... बेचैन करने वाले हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 내용인데? 읽어봐, 힐드.",
						"english": "What does it say? Read it, Hild.",
						"japanese": "何が書かれている？読んでみて、ヒルデ。",
						"chinese": "写了什么？读一下，希尔德。",
						"french": "Qu'est-ce que ça dit ? Lis-le, Hild.",
						"spanish": "¿Qué dice? Léelo, Hild.",
						"vietnamese": "Nội dung là gì? Đọc đi, Hild.",
						"thai": "มันว่ายังไง? อ่านสิ ฮิลด์",
						"hindi": "इसमें क्या लिखा है? पढ़ो, हिल्ड।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "…'미드가르드에 드리운 어둠을 멸하고…'",
						"english": "...To eradicate the darkness cast upon Midgard...",
						"japanese": "「…ミッドガルドに垂れ込める闇を滅ぼし…」",
						"chinese": "“……消灭笼罩米德加德的黑暗……”",
						"french": "...Éradiquer les ténèbres qui planent sur Midgard...",
						"spanish": "...Erradicar la oscuridad que se cierne sobre Midgard...",
						"vietnamese": "...Để tiêu diệt bóng tối bao trùm Midgard...",
						"thai": "...เพื่อกำจัดความมืดมิดที่ปกคลุมมิดการ์ด...",
						"hindi": "...मिडगार्ड पर छाए अंधकार का विनाश करने के लिए..."
					},
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "이것은 족장 라그나르가 스쿌드에게 내린 첫 번째 맹세였군.",
						"english": "This was Chieftain Ragnar's first oath to Skjold, then.",
						"japanese": "これは族長ラグナルがスキュルドに下した最初の誓いだったのか。",
						"chinese": "这就是酋长拉格纳尔对斯库尔德的第一个誓言啊。",
						"french": "C'était donc le premier serment du chef Ragnar à Skjold.",
						"spanish": "Así que este fue el primer juramento del jefe Ragnar a Skjold.",
						"vietnamese": "Vậy đây là lời thề đầu tiên của tộc trưởng Ragnar dành cho Skjold.",
						"thai": "นี่คือคำสาบานแรกที่หัวหน้าเผ่ารักนาร์มอบให้สกยอลด์สินะ",
						"hindi": "तो यह मुखिया रैग्नार की स्कोल्ड के प्रति पहली शपथ थी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠을 멸하라… 명령 하나로 수천 년을 버텼다고?",
						"english": "Eradicate the darkness... it endured for millennia on a single command?",
						"japanese": "闇を滅ぼせ…一つの命令で数千年を耐え抜いたと？",
						"chinese": "消灭黑暗……仅仅一道命令，就坚持了数千年？",
						"french": "Éradiquer les ténèbres... a-t-il tenu des millénaires sur un seul ordre ?",
						"spanish": "Erradicar la oscuridad... ¿aguantó miles de años con una sola orden?",
						"vietnamese": "Tiêu diệt bóng tối… chỉ một mệnh lệnh mà đã tồn tại hàng nghìn năm sao?",
						"thai": "กำจัดความมืดมิด...ยืนหยัดมานับพันปีด้วยคำสั่งเดียวงั้นหรือ?",
						"hindi": "अंधकार का विनाश करो... क्या यह एक ही आज्ञा पर हज़ारों साल तक टिका रहा?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그리고 유언은 이렇게 이어진다.",
						"english": "And the last testament continues thus.",
						"japanese": "そして遺言はこう続く。",
						"chinese": "遗言如此继续着。",
						"french": "Et le testament se poursuit ainsi.",
						"spanish": "Y el testamento continúa así.",
						"vietnamese": "Và di ngôn tiếp nối như thế này.",
						"thai": "และพินัยกรรมก็ดำเนินต่อไปเช่นนี้",
						"hindi": "और वसीयत इस प्रकार जारी रहती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…'나의 검은 반드시 아스가르드로 돌아가리라.'",
						"english": "...'My sword shall surely return to Asgard.'",
						"japanese": "...「我が剣は必ずアスガルドへ帰還するだろう。」",
						"chinese": "...“吾之剑，必将重返阿斯加德。”",
						"french": "...'Mon épée retournera sûrement à Asgard.'",
						"spanish": "...'Mi espada sin duda regresará a Asgard.'",
						"vietnamese": "...'Thanh kiếm của ta chắc chắn sẽ trở về Asgard.'",
						"thai": "...'ดาบของข้าจักต้องกลับคืนสู่อัสการ์ดแน่นอน'",
						"hindi": "...'मेरी तलवार निश्चित रूप से असगार्ड लौटेगी।'"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "족장의 검…? 그게 왜 스쿌드를 묶어둔다는 거야?",
						"english": "The chieftain's sword...? Why would that bind Skjold?",
						"japanese": "族長の剣…？それがなぜスクヨルドを縛り付けているの？",
						"chinese": "族长的剑……？它为何会束缚住斯库尔德？",
						"french": "L'épée du chef...? Pourquoi cela lierait-il Skjold ?",
						"spanish": "¿La espada del jefe...? ¿Por qué ataría eso a Skjold?",
						"vietnamese": "Thanh kiếm của tộc trưởng...? Tại sao nó lại trói buộc Skjold?",
						"thai": "ดาบของหัวหน้าเผ่า...? ทำไมมันถึงผูกมัดสกยอลด์ไว้ได้?",
						"hindi": "सरदार की तलवार...? वह स्कजोलड को क्यों बांधेगी?"
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "약속이기 때문이지. 망자와의 맹세는 죽음보다 강한 속박이다.",
						"english": "Because it's a promise. An oath with the dead is a bond stronger than death.",
						"japanese": "約束だからだ。死者との誓いは、死よりも強い束縛なのだ。",
						"chinese": "因为这是一个承诺。与逝者的誓言，是比死亡更强大的束缚。",
						"french": "Parce que c'est une promesse. Un serment fait aux morts est un lien plus fort que la mort.",
						"spanish": "Porque es una promesa. Un juramento con los muertos es un lazo más fuerte que la muerte.",
						"vietnamese": "Vì đó là một lời hứa. Lời thề với người chết là một ràng buộc mạnh hơn cái chết.",
						"thai": "เพราะมันคือคำสัญญา คำปฏิญาณกับผู้ตายนั้นคือพันธนาการที่แข็งแกร่งยิ่งกว่าความตาย",
						"hindi": "क्योंकि यह एक वादा है। मृतकों के साथ की गई शपथ मृत्यु से भी मजबूत बंधन है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "스쿌드는 이 약속을 지키기 위해… 여기에 얼어붙은 채 기다려온 거야.",
						"english": "To uphold this promise... Skjold has waited here, frozen.",
						"japanese": "スクヨルドはこの約束を守るため…ここに凍てついたまま待ち続けてきたのだ。",
						"chinese": "为了遵守这个承诺……斯库尔德一直被冰封在此，等待着。",
						"french": "Pour tenir cette promesse... Skjold a attendu ici, gelé.",
						"spanish": "Para cumplir esta promesa... Skjold ha esperado aquí, congelado.",
						"vietnamese": "Để giữ lời hứa này... Skjold đã chờ đợi ở đây, bị đóng băng.",
						"thai": "สกยอลด์รอคอยอยู่ที่นี่อย่างแข็งตัว... เพื่อรักษาคำสัญญานี้",
						"hindi": "इस वादे को निभाने के लिए... स्कजोलड यहाँ जम कर इंतजार कर रहा है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이 비석에 새겨진 유언 전문이… 이 모든 진실을 담고 있어.",
						"english": "The full testament carved into this stele... holds all this truth.",
						"japanese": "この石碑に刻まれた遺言の全文が…このすべての真実を物語っている。",
						"chinese": "刻在这块石碑上的遗言全文……承载着所有的真相。",
						"french": "Le testament complet gravé dans cette stèle... contient toute cette vérité.",
						"spanish": "El testamento completo grabado en esta estela... contiene toda esta verdad.",
						"vietnamese": "Toàn bộ di chúc được khắc trên bia đá này... chứa đựng tất cả sự thật này.",
						"thai": "พินัยกรรมทั้งหมดที่แกะสลักบนศิลาจารึกนี้... บรรจุความจริงทั้งหมดนี้ไว้",
						"hindi": "इस पत्थर पर खुदा हुआ पूरा वसीयतनामा... यह सारी सच्चाई रखता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "순간, 거대한 빙하 전체가 깊이 신음했다. 메아리치는 비명 같았다.",
						"english": "Suddenly, the entire massive glacier groaned deeply. It was like an echoing scream.",
						"japanese": "その瞬間、巨大な氷河全体が深くうめき声を上げた。それはこだまする悲鳴のようだった。",
						"chinese": "突然间，整座巨大的冰川发出了深深的呻吟。那仿佛是回荡的尖叫。",
						"french": "Soudain, l'énorme glacier entier gémit profondément. C'était comme un cri qui résonnait.",
						"spanish": "De repente, todo el enorme glaciar gimió profundamente. Fue como un grito que resonaba.",
						"vietnamese": "Đột nhiên, toàn bộ sông băng khổng lồ rên rỉ sâu sắc. Nó giống như một tiếng hét vang vọng.",
						"thai": "ทันใดนั้น ธารน้ำแข็งขนาดมหึมาทั้งก้อนก็ครางออกมาอย่างลึกซึ้ง มันเหมือนเสียงกรีดร้องที่สะท้อนกลับมา",
						"hindi": "अचानक, पूरा विशाल ग्लेशियर गहरा कराह उठा। यह एक गूंजती हुई चीख जैसा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 소리… 빙하가 우는 건가?",
						"english": "This sound... is the glacier crying?",
						"japanese": "この音…氷河が泣いているのか？",
						"chinese": "这声音……是冰川在哭泣吗？",
						"french": "Ce son... le glacier pleure-t-il ?",
						"spanish": "Este sonido... ¿está llorando el glaciar?",
						"vietnamese": "Âm thanh này... sông băng đang khóc sao?",
						"thai": "เสียงนี้... ธารน้ำแข็งกำลังร้องไห้เหรอ?",
						"hindi": "यह आवाज... क्या ग्लेशियर रो रहा है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니. 저것은 맹세에 짓눌린 자의 비탄이야.",
						"english": "No. That is the lament of one crushed by an oath.",
						"japanese": "違う。あれは誓いに押し潰された者の悲嘆だ。",
						"chinese": "不。那是被誓言压垮之人的悲叹。",
						"french": "Non. C'est la lamentation de celui écrasé par un serment.",
						"spanish": "No. Eso es el lamento de alguien aplastado por un juramento.",
						"vietnamese": "Không. Đó là tiếng than khóc của người bị lời thề đè nặng.",
						"thai": "ไม่ นั่นคือความโศกเศร้าของผู้ที่ถูกสาบานบดขยี้",
						"hindi": "नहीं। वह एक शपथ से कुचले हुए व्यक्ति का विलाप है।"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "지키지 못한 약속의 무게가… 저 거대한 존재를 억누르고 있는 거지.",
						"english": "The weight of a broken promise... is oppressing that colossal being.",
						"japanese": "果たせなかった約束の重みが…あの巨大な存在を抑えつけているのだ。",
						"chinese": "未能遵守的承诺的重量……正在压抑着那个巨大的存在。",
						"french": "Le poids d'une promesse non tenue... opprime cet être colossal.",
						"spanish": "El peso de una promesa incumplida... está oprimiendo a esa entidad colosal.",
						"vietnamese": "Gánh nặng của một lời hứa không thể giữ... đang đè nặng lên thực thể khổng lồ đó.",
						"thai": "น้ำหนักของคำสัญญาที่ไม่อาจรักษา... กำลังกดทับสิ่งมีชีวิตมหึมานั้น",
						"hindi": "टूटे हुए वादे का बोझ... उस विशालकाय प्राणी को दबा रहा है।"
					},
					"speaker": "hild"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…감히 망자의 맹세를 거스르려 하다니.",
						"english": "...How dare you defy a dead man's oath.",
						"japanese": "…よくも亡者の誓いに逆らおうとしたな。",
						"chinese": "……竟敢违抗亡者的誓言。",
						"french": "...Comment osez-vous défier le serment d'un mort.",
						"spanish": "…Cómo osas desafiar el juramento de un muerto.",
						"vietnamese": "...Dám cả gan chống lại lời thề của người chết.",
						"thai": "...บังอาจท้าทายคำสาบานของคนตาย",
						"hindi": "…तुमने एक मृत व्यक्ति की प्रतिज्ञा का उल्लंघन करने की हिम्मत कैसे की।"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "너희는 이 얼음 속에 영원히 갇힐 것이다.",
						"english": "You will be trapped forever within this ice.",
						"japanese": "お前たちはこの氷の中に永遠に閉じ込められるだろう。",
						"chinese": "你们将永远被困在这冰中。",
						"french": "Vous serez piégés à jamais dans cette glace.",
						"spanish": "Seréis atrapados para siempre en este hielo.",
						"vietnamese": "Ngươi sẽ bị giam cầm vĩnh viễn trong lớp băng này.",
						"thai": "พวกเจ้าจะต้องถูกขังอยู่ในน้ำแข็งนี้ตลอดไป",
						"hindi": "तुम इस बर्फ़ में हमेशा के लिए क़ैद रहोगे।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 우리는 반드시 맹세를 풀 거야.",
						"english": "It's not over yet... We will surely break the oath.",
						"japanese": "まだ…終わってない。私たちは必ず誓いを解く。",
						"chinese": "还没……结束。我们一定会解除誓约。",
						"french": "Ce n'est pas encore fini... Nous briserons sûrement le serment.",
						"spanish": "Todavía no ha terminado... Romperemos el juramento.",
						"vietnamese": "Vẫn chưa... kết thúc. Chúng ta nhất định sẽ phá vỡ lời thề.",
						"thai": "ยัง... ไม่จบ เราจะต้องคลายคำสาบานให้ได้",
						"hindi": "अभी... ख़त्म नहीं हुआ है। हम यह प्रतिज्ञा ज़रूर तोड़ेंगे।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 유언 전문을 읽겠다. 이 맹세가 스쿌드를 자유롭게 하거나…",
						"english": "Now I will read the full testament. This oath will either free Skjold or...",
						"japanese": "さあ、遺言の全文を読み上げよう。この誓いがスクヨルドを解放するか、あるいは…",
						"chinese": "现在，我将宣读遗言全文。这个誓言将会让斯库尔德获得自由，或者……",
						"french": "Maintenant, je vais lire le testament complet. Ce serment libérera Skjold ou...",
						"spanish": "Ahora leeré el testamento completo. Este juramento liberará a Skjold o...",
						"vietnamese": "Bây giờ tôi sẽ đọc toàn bộ di chúc. Lời thề này sẽ giải phóng Skjold hoặc...",
						"thai": "ตอนนี้ข้าจะอ่านพินัยกรรมทั้งหมด คำสาบานนี้จะปลดปล่อยสกยอลด์เป็นอิสระหรือไม่ก็...",
						"hindi": "अब मैं पूरा वसीयतनामा पढूंगा। यह शपथ स्कजोलड को या तो मुक्त करेगी या..."
					},
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "…아니면 영원히 묶어두겠지.",
						"english": "...or bound forever.",
						"japanese": "…さもなくば、永遠に縛り付けるだろう。",
						"chinese": "…不然就会永远被束缚。",
						"french": "...ou elle sera liée pour toujours.",
						"spanish": "...o me atarán para siempre.",
						"vietnamese": "...hoặc bị trói buộc vĩnh viễn.",
						"thai": "...มิฉะนั้นก็จะถูกผูกมัดไว้ชั่วนิรันดร์",
						"hindi": "...या हमेशा के लिए बंधे रहेंगे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "“미드가르드에 드리운 어둠을 멸하고, 나의 검은 반드시 아스가르드로 돌아가리라.”",
						"english": "\"I shall vanquish the darkness that shrouds Midgard, and my sword shall surely return to Asgard.\"",
						"japanese": "「ミッドガルドを覆う闇を滅し、我が剣は必ずアスガルドへ帰還するだろう。」",
						"chinese": "“我将消灭笼罩米德加德的黑暗，我的剑必将返回阿斯加德。”",
						"french": "« Je vaincrai les ténèbres qui enveloppent Midgard, et mon épée retournera sûrement à Asgard. »",
						"spanish": "«Derrotaré la oscuridad que envuelve Midgard, y mi espada regresará sin falta a Asgard.»",
						"vietnamese": "\"Ta sẽ tiêu diệt bóng tối bao trùm Midgard, và thanh kiếm của ta chắc chắn sẽ trở về Asgard.\"",
						"thai": "\"ข้าจะทำลายความมืดที่ปกคลุมมิดการ์ด และดาบของข้าจะต้องกลับคืนสู่อัสการ์ดอย่างแน่นอน\"",
						"hindi": "“मैं मिडगार्ड को घेरे हुए अंधेरे का नाश करूँगा, और मेरी तलवार निश्चित रूप से असगार्ड वापस लौटेगी।”"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "룬 비석이 빛나며 거대한 빙하가 깨졌다. 그 안에 척후선 스쿌드가 모습을 드러냈다.",
						"english": "The rune monolith glowed, and a colossal glacier shattered. Within, the scout ship Skjoldr emerged.",
						"japanese": "ルーンの石碑が輝き、巨大な氷河が砕けた。その中から斥候船スキュルドが姿を現した。",
						"chinese": "符文石碑闪耀，巨大的冰川破碎。侦察船斯库尔德从中显现。",
						"french": "Le monolithe runique s'illumina, et un glacier colossal se brisa. À l'intérieur, le vaisseau éclaireur Skjoldr apparut.",
						"spanish": "El monolito rúnico brilló, y un glaciar colosal se hizo añicos. Dentro, el barco explorador Skjoldr emergió.",
						"vietnamese": "Tấm bia đá rune phát sáng, một sông băng khổng lồ vỡ tan. Bên trong, chiến thuyền trinh sát Skjoldr hiện ra.",
						"thai": "เสาหินรูนส่องแสง และธารน้ำแข็งขนาดยักษ์ก็แตกสลาย ภายในนั้น เรือลาดตระเวน Skjoldr ก็ปรากฏตัวขึ้น",
						"hindi": "रूण की वेदी चमक उठी, और एक विशाल ग्लेशियर टूट गया। उसके भीतर, स्काउट जहाज स्कोल्ड्र प्रकट हुआ।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…나는 그 맹세를 지켜야 한다.",
						"english": "...I must uphold that vow.",
						"japanese": "…私はその誓いを守らねばならない。",
						"chinese": "…我必须遵守那个誓言。",
						"french": "...Je dois tenir ce vœu.",
						"spanish": "...Debo cumplir ese juramento.",
						"vietnamese": "...Ta phải giữ lời thề đó.",
						"thai": "...ข้าต้องรักษาสาบานนั้น",
						"hindi": "...मुझे उस प्रतिज्ञा का पालन करना होगा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그것이 내게 남은 전부이니.",
						"english": "It is all that remains of me.",
						"japanese": "それが、私に残された全てだ。",
						"chinese": "那是我仅存的一切。",
						"french": "C'est tout ce qui me reste.",
						"spanish": "Es todo lo que me queda.",
						"vietnamese": "Đó là tất cả những gì còn lại của ta.",
						"thai": "มันคือทั้งหมดที่เหลืออยู่ของข้า",
						"hindi": "यह मेरा बचा हुआ सब कुछ है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "명령 때문에? 그 오랜 세월을…",
						"english": "Because of an order? All those long years...",
						"japanese": "命令のためだと？あの長い歳月を…",
						"chinese": "因为命令？那么多年…",
						"french": "À cause d'un ordre ? Toutes ces longues années...",
						"spanish": "¿Por una orden? Todos esos largos años...",
						"vietnamese": "Vì một mệnh lệnh ư? Suốt ngần ấy năm...",
						"thai": "เพราะคำสั่งรึ? ตลอดหลายปีที่ผ่านมา...",
						"hindi": "एक आदेश की वजह से? इतने लंबे साल..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…오랜 시간 동안 홀로 지켜온 맹세. 너희는 알지 못할 것이다.",
						"english": "...A vow kept alone for so long. You would not understand.",
						"japanese": "…長い間、ただ一人で守り続けた誓い。お前たちにはわかるまい。",
						"chinese": "…独自坚守了那么久的誓言。你们不会懂的。",
						"french": "...Un vœu gardé seul si longtemps. Vous ne comprendriez pas.",
						"spanish": "...Un juramento cumplido solo durante tanto tiempo. Vosotros no lo entenderíais.",
						"vietnamese": "...Một lời thề ta đã giữ một mình suốt ngần ấy năm. Các ngươi sẽ không hiểu đâu.",
						"thai": "...คำสาบานที่รักษาไว้คนเดียวนานขนาดนั้น พวกเจ้าคงไม่เข้าใจหรอก",
						"hindi": "...इतने लंबे समय तक अकेले निभाई गई प्रतिज्ञा। तुम नहीं समझोगे।"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래도… 우리는 너를 멈춰 세워야 해.",
						"english": "Even so... we must stop you.",
						"japanese": "それでも…私たちはあなたを止めなければならない。",
						"chinese": "即便如此…我们也要阻止你。",
						"french": "Malgré tout... nous devons vous arrêter.",
						"spanish": "Aun así... debemos detenerte.",
						"vietnamese": "Dù vậy... chúng ta phải ngăn ngươi lại.",
						"thai": "ถึงกระนั้น...เราก็ต้องหยุดเจ้าให้ได้",
						"hindi": "फिर भी... हमें तुम्हें रोकना होगा।"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "…맹세는 지켜지지 않았다. 나는… 자유로운가?",
						"english": "...The vow was broken. Am I... free?",
						"japanese": "…誓いは破られた。私は…自由なのか？",
						"chinese": "…誓言被打破了。我…自由了吗？",
						"french": "...Le vœu a été rompu. Suis-je... libre ?",
						"spanish": "...El juramento se rompió. ¿Soy... libre?",
						"vietnamese": "...Lời thề đã bị phá vỡ. Ta... tự do rồi sao?",
						"thai": "...คำสาบานถูกหักแล้ว ข้า...เป็นอิสระแล้วหรือ?",
						"hindi": "...प्रतिज्ञा टूट गई। क्या मैं... आज़ाद हूँ?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이제 끝났어…",
						"english": "It's over now...",
						"japanese": "これで終わりだ…",
						"chinese": "现在结束了…",
						"french": "C'est fini maintenant...",
						"spanish": "Se acabó...",
						"vietnamese": "Kết thúc rồi...",
						"thai": "มันจบลงแล้ว...",
						"hindi": "अब यह खत्म हो गया है..."
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "명령은 사라졌지만… 그의 약속은 영원히 지워지지 않을 것이다.",
						"english": "The command is gone... but his promise will never be erased.",
						"japanese": "命令は消え去ったが…彼の約束は永遠に消えないだろう。",
						"chinese": "命令消失了……但他的誓约将永远不会被抹去。",
						"french": "L'ordre a disparu... mais sa promesse ne sera jamais effacée.",
						"spanish": "La orden ha desaparecido... pero su promesa nunca será borrada.",
						"vietnamese": "Mệnh lệnh đã biến mất... nhưng lời hứa của anh ta sẽ không bao giờ bị xóa bỏ.",
						"thai": "คำสั่งได้หายไปแล้ว... แต่คำสัญญาของเขาจะไม่มีวันถูกลบเลือน",
						"hindi": "आदेश भले ही मिट गया हो... पर उसका वादा कभी नहीं मिटेगा।"
					}
				},
				{
					"content": {
						"korean": "망자의 맹세는, 그 무게만큼이나 깊은 자국을 남기거든.",
						"english": "A dead man's oath leaves a mark as deep as its weight.",
						"japanese": "亡者の誓いは、その重さと同じくらい深い痕跡を残すからな。",
						"chinese": "亡者的誓言，会留下与其分量同样深刻的印记。",
						"french": "Le serment d'un mort laisse une trace aussi profonde que son poids.",
						"spanish": "El juramento de un muerto deja una marca tan profunda como su peso.",
						"vietnamese": "Lời thề của người chết để lại một vết hằn sâu nặng như chính nó.",
						"thai": "คำสาบานของคนตายทิ้งร่องรอยไว้ลึกซึ้งสมกับน้ำหนักของมัน",
						"hindi": "एक मृत व्यक्ति की प्रतिज्ञा, अपने भार जितनी गहरी छाप छोड़ जाती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그럼… 우리는 무엇을 한 걸까?",
						"english": "So... what have we done?",
						"japanese": "では…私たちは何をしたのだろう？",
						"chinese": "那么……我们到底做了什么？",
						"french": "Alors... qu'avons-nous fait ?",
						"spanish": "Entonces... ¿qué hemos hecho?",
						"vietnamese": "Vậy... chúng ta đã làm gì?",
						"thai": "แล้ว... เราทำอะไรลงไปกันแน่?",
						"hindi": "तो... हमने क्या किया?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음의 감옥은 부서졌으나, 고대 맹세의 그림자는 여전히 남아 있었다.",
						"english": "The prison of ice was shattered, but the shadow of the ancient oath still lingered.",
						"japanese": "氷の監獄は打ち破られたが、古の誓いの影はまだ残っていた。",
						"chinese": "寒冰的牢狱被打破了，但古老誓言的阴影依然残留。",
						"french": "La prison de glace fut brisée, mais l'ombre de l'ancien serment persistait.",
						"spanish": "La prisión de hielo se rompió, pero la sombra del antiguo juramento aún permanecía.",
						"vietnamese": "Nhà tù băng đã vỡ, nhưng bóng ma của lời thề cổ xưa vẫn còn vương vấn.",
						"thai": "คุกน้ำแข็งถูกทำลายลงแล้ว แต่เงาของคำสาบานโบราณยังคงอยู่",
						"hindi": "बर्फ़ की जेल टूट गई, पर प्राचीन प्रतिज्ञा की परछाई अब भी थी।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"빙하가 깨지고, 스쿌드는 자유로워졌다.",
			"그러나 그의 눈에는 여전히 지키지 못한 맹세의 그림자가 서려 있었다.",
			"이것은 해방이었을까, 아니면 또 다른 속박의 시작이었을까.",
			"고대의 약속은, 얼음처럼 차가운 침묵 속에 가라앉았다.",
			"우리에게 남은 것은, 그저 이 막막한 여운뿐."
		],
		"english": [
			"The glacier shattered, and Skjoldr was freed.",
			"Yet, in his eyes, the shadow of an unkept oath still lingered.",
			"Was this liberation, or the beginning of another confinement?",
			"The ancient promise sank into a silence as cold as ice.",
			"All that remained for us was this vast, lingering echo."
		],
		"japanese": [
			"氷河が砕け、スコルドルは解放された。",
			"しかし、彼の目には、守られなかった誓いの影がなおも残っていた。",
			"これは解放だったのか、それとも新たな束縛の始まりだったのか。",
			"古の約束は、氷のように冷たい沈黙の中に沈んだ。",
			"私たちに残されたのは、ただこの広大な余韻だけだった。"
		],
		"chinese": [
			"冰川破碎，斯考尔德获得自由。",
			"然而，他眼中仍留有未竟誓言的阴影。",
			"这是解脱，抑或是另一段束缚的开始？",
			"古老的约定，沉入冰冷的沉默之中。",
			"我们所剩的，只剩下这漫长而空虚的余韵。"
		],
		"french": [
			"Le glacier se brisa, et Skjoldr fut libéré.",
			"Pourtant, dans ses yeux, l'ombre d'un serment non tenu persistait.",
			"Était-ce une libération, ou le début d'un nouvel asservissement ?",
			"L'ancienne promesse sombra dans un silence froid comme la glace.",
			"Tout ce qui nous restait, c'était ce vaste et persistant écho."
		],
		"spanish": [
			"El glaciar se rompió, y Skjoldr fue liberado.",
			"Sin embargo, en sus ojos, la sombra de un juramento incumplido aún permanecía.",
			"¿Fue esto liberación, o el comienzo de otro confinamiento?",
			"La antigua promesa se hundió en un silencio tan frío como el hielo.",
			"Todo lo que nos quedaba era este vasto y persistente eco."
		],
		"vietnamese": [
			"Băng hà tan vỡ, Skjoldr được giải thoát.",
			"Tuy nhiên, trong mắt anh ta, bóng dáng của lời thề chưa được giữ vẫn còn vương vấn.",
			"Đây là sự giải phóng, hay khởi đầu của một sự ràng buộc khác?",
			"Lời hứa cổ xưa chìm vào sự im lặng lạnh lẽo như băng.",
			"Tất cả những gì còn lại cho chúng ta chỉ là dư âm mênh mông này."
		],
		"thai": [
			"ธารน้ำแข็งแตกสลาย สกยอลเดอร์เป็นอิสระ",
			"กระนั้น ในดวงตาของเขายังคงมีเงาของคำสาบานที่ยังไม่ถูกรักษา",
			"นี่คืออิสรภาพ หรือจุดเริ่มต้นของการจองจำครั้งใหม่?",
			"คำสัญญาโบราณจมดิ่งลงสู่ความเงียบงันที่เย็นเยียบเหมือนน้ำแข็ง",
			"สิ่งที่เหลืออยู่สำหรับเราคือเพียงความรู้สึกค้างคาอันกว้างใหญ่นี้เท่านั้น"
		],
		"hindi": [
			"ग्लेशियर टूट गया, और स्कजोल्ड्र आज़ाद हो गया।",
			"फिर भी, उसकी आँखों में एक अधूरी शपथ की परछाई अब भी थी।",
			"क्या यह मुक्ति थी, या एक और बंधन की शुरुआत?",
			"प्राचीन वादा बर्फ जैसी ठंडी चुप्पी में डूब गया।",
			"हमारे लिए बस यह विशाल, चिरस्थायी प्रतिध्वनि ही बची थी।"
		]
	},
	"prologue": {
		"korean": [
			"얼음의 심장부. 수천 년의 맹세가 잠든 곳.",
			"족장의 유언은 스쿌드를 영원히 묶어두었다.",
			"마침내 드러나는 진실. 그 무게는 빙하보다 무거웠다.",
			"그에게 남은 것은, 오직 맹세뿐이었다."
		],
		"english": [
			"The heart of ice. Where a thousand-year oath slumbers.",
			"The chieftain's last will bound Skjoldr forever.",
			"The truth finally revealed. Its weight heavier than a glacier.",
			"All that remained for him was the oath."
		],
		"japanese": [
			"氷の心臓部。数千年の誓いが眠る場所。",
			"族長の遺言は、スコルドルを永遠に縛りつけた。",
			"ついに明かされる真実。その重さは氷河よりも重かった。",
			"彼に残されたのは、ただ誓いだけだった。"
		],
		"chinese": [
			"冰之心。千年誓言沉睡之地。",
			"酋长的遗言，将斯考尔德永远束缚。",
			"真相终将揭露。其重逾冰川。",
			"他所剩的，唯有誓言。"
		],
		"french": [
			"Au cœur de la glace. Là où un serment millénaire sommeille.",
			"Le testament du chef lia Skjoldr pour toujours.",
			"La vérité enfin révélée. Son poids était plus lourd qu'un glacier.",
			"Il ne lui restait que le serment."
		],
		"spanish": [
			"El corazón de hielo. Donde un juramento milenario yace dormido.",
			"El último deseo del jefe ató a Skjoldr para siempre.",
			"La verdad finalmente revelada. Su peso era más pesado que un glaciar.",
			"Todo lo que le quedaba era el juramento."
		],
		"vietnamese": [
			"Trái tim băng giá. Nơi lời thề nghìn năm ngủ vùi.",
			"Di chúc của tộc trưởng đã trói buộc Skjoldr vĩnh viễn.",
			"Sự thật cuối cùng được hé lộ. Trọng lượng của nó nặng hơn cả băng hà.",
			"Những gì còn lại cho anh ta chỉ là lời thề."
		],
		"thai": [
			"ใจกลางน้ำแข็ง ที่ซึ่งพันธะสัญญาพันปีหลับใหล",
			"พินัยกรรมของหัวหน้าเผ่าผูกมัดสกยอลเดอร์ไว้ตลอดกาล",
			"ความจริงถูกเปิดเผยในที่สุด น้ำหนักของมันหนักกว่าธารน้ำแข็ง",
			"สิ่งที่เหลืออยู่สำหรับเขาคือคำสาบานเท่านั้น"
		],
		"hindi": [
			"बर्फ का हृदय। जहाँ हज़ार साल पुरानी शपथ सोई है।",
			"सरदार की वसीयत ने स्कजोल्ड्र को हमेशा के लिए बांध दिया।",
			"सच्चाई अंततः सामने आई। उसका वज़न एक ग्लेशियर से भी भारी था।",
			"उसके लिए बस शपथ ही बची थी।"
		]
	}
} as const;
