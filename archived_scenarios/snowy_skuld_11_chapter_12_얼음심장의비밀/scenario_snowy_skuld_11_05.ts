export const scenario_snowy_skuld_11_05 = {
	"scenario_id": "snowy_skuld_11_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "pool_107"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 빙하 미궁의 입구가 모습을 드러냈다. 태고의 한기가 뼈 속까지 스며들었다.",
						"english": "The entrance to the colossal glacial labyrinth appeared. An ancient chill permeated to the bone.",
						"japanese": "巨大な氷河迷宮の入り口が現れた。太古の冷気が骨の髄まで染み渡る。",
						"chinese": "巨大的冰川迷宫入口显现。远古的寒气渗入骨髓。",
						"french": "L'entrée du labyrinthe glacial colossal est apparue. Un froid ancestral a transpercé jusqu'aux os.",
						"spanish": "La entrada al colosal laberinto glacial apareció. Un frío ancestral caló hasta los huesos.",
						"vietnamese": "Lối vào mê cung băng hà khổng lồ đã xuất hiện. Cái lạnh cổ xưa thấm vào tận xương tủy.",
						"thai": "ทางเข้าเขาวงกตธารน้ำแข็งขนาดมหึมาปรากฏขึ้น ความหนาวเย็นโบราณแทรกซึมเข้าถึงกระดูก",
						"hindi": "विशाल हिमनद भूलभुलैया का प्रवेश द्वार प्रकट हुआ। एक प्राचीन शीतलता हड्डियों तक समा गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 그 빙하의 심장부인가?",
						"english": "Is this... the heart of that glacier?",
						"japanese": "ここが…あの氷河の心臓部なのか？",
						"chinese": "这里是…那冰川的中心吗？",
						"french": "Est-ce ici... le cœur de ce glacier ?",
						"spanish": "¿Es este... el corazón de ese glaciar?",
						"vietnamese": "Đây có phải… trung tâm của sông băng đó không?",
						"thai": "ที่นี่คือ...ใจกลางของธารน้ำแข็งนั้นหรือ?",
						"hindi": "क्या यह... उस ग्लेशियर का दिल है?"
					}
				},
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳의 룬 문자들이 심상치 않아요. 고대 문명과 관련이 있을 겁니다.",
						"english": "The runes here are unusual. They must be related to an ancient civilization.",
						"japanese": "ここのルーン文字、ただならぬ雰囲気だわ。古代文明と関係があるはずよ。",
						"chinese": "这里的符文很不寻常。它们一定与古代文明有关。",
						"french": "Les runes ici sont inhabituelles. Elles doivent être liées à une civilisation ancienne.",
						"spanish": "Las runas aquí son inusuales. Deben estar relacionadas con una civilización antigua.",
						"vietnamese": "Các chữ rune ở đây không bình thường. Chúng chắc chắn có liên quan đến một nền văn minh cổ đại.",
						"thai": "อักษรรูนที่นี่ไม่ธรรมดาเลยค่ะ ต้องเกี่ยวข้องกับอารยธรรมโบราณแน่ๆ",
						"hindi": "यहाँ के रूण अक्षर असामान्य हैं। वे एक प्राचीन सभ्यता से संबंधित होने चाहिए।"
					}
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "저기 보세요… 저건 용머리 조각 아닌가요?",
						"english": "Look over there... isn't that a dragon head carving?",
						"japanese": "あれ見て…あれって竜の頭の彫刻じゃない？",
						"chinese": "看那边…那不是一个龙头雕塑吗？",
						"french": "Regardez là-bas… n'est-ce pas une sculpture de tête de dragon ?",
						"spanish": "Mira allí… ¿no es eso una talla de cabeza de dragón?",
						"vietnamese": "Nhìn kìa… đó không phải là một tác phẩm điêu khắc đầu rồng sao?",
						"thai": "ดูนั่นสิ...นั่นไม่ใช่รูปปั้นหัวมังกรเหรอ?",
						"hindi": "उधर देखो… क्या वह एक ड्रैगन सिर की नक्काशी नहीं है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "얼음에 박힌 배 조각이라니… 대체 뭐지?",
						"english": "A ship fragment embedded in the ice... What on earth is it?",
						"japanese": "氷に埋もれた船の破片だなんて…一体何なの？",
						"chinese": "冰中嵌入的船只碎片…到底是什么？",
						"french": "Un fragment de bateau encastré dans la glace… Qu'est-ce que c'est que ça ?",
						"spanish": "Un fragmento de barco incrustado en el hielo... ¿Qué diablos es?",
						"vietnamese": "Một mảnh thuyền bị kẹt trong băng… Rốt cuộc là gì vậy?",
						"thai": "ชิ้นส่วนเรือที่ฝังอยู่ในน้ำแข็ง...มันคืออะไรกันแน่?",
						"hindi": "बर्फ में धँसा हुआ एक जहाज़ का टुकड़ा... यह आखिर क्या है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "빙하 벽에 새겨진 문양들이 더 선명해졌어요. 단순한 낙서가 아닙니다.",
						"english": "The patterns carved into the glacier wall have become clearer. These are not mere scribbles.",
						"japanese": "氷河の壁に刻まれた模様が、もっとはっきりしてきたわ。ただの落書きじゃない。",
						"chinese": "冰川墙壁上雕刻的图案变得更清晰了。这不是简单的涂鸦。",
						"french": "Les motifs gravés dans la paroi glaciaire sont devenus plus clairs. Ce ne sont pas de simples gribouillis.",
						"spanish": "Los patrones tallados en la pared del glaciar se han vuelto más claros. No son meros garabatos.",
						"vietnamese": "Các hoa văn được khắc trên bức tường băng đã trở nên rõ ràng hơn. Đây không phải là những nét vẽ nguệch ngoạc đơn thuần.",
						"thai": "ลวดลายที่แกะสลักบนกำแพงธารน้ำแข็งชัดเจนขึ้น ไม่ใช่แค่การขีดเขียนธรรมดา",
						"hindi": "ग्लेशियर की दीवार पर खुदे हुए पैटर्न और स्पष्ट हो गए हैं। ये केवल साधारण रेखाचित्र नहीं हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "부분적으로 해독해봤는데… '함선', '맹세' 같은 단어들이 반복돼요.",
						"english": "I've partially deciphered it... words like 'ship' and 'oath' are repeated.",
						"japanese": "部分的に解読してみたんだけど…「艦船」とか「誓い」みたいな単語が繰り返されてる。",
						"chinese": "我部分解密了…“船”和“誓言”之类的词语重复出现。",
						"french": "J'ai partiellement déchiffré… des mots comme « navire » et « serment » sont répétés.",
						"spanish": "Lo he descifrado parcialmente... palabras como 'barco' y 'juramento' se repiten.",
						"vietnamese": "Tôi đã giải mã được một phần… các từ như 'tàu' và 'lời thề' được lặp lại.",
						"thai": "ฉันถอดรหัสได้บางส่วนแล้ว...คำว่า 'เรือ' และ 'คำสาบาน' ซ้ำๆ กัน",
						"hindi": "मैंने इसे आंशिक रूप से समझा है... 'जहाज' और 'शपथ' जैसे शब्द दोहराए जा रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "배? 여기서?",
						"english": "A ship? Here?",
						"japanese": "船？ここで？",
						"chinese": "船？在这里？",
						"french": "Un bateau ? Ici ?",
						"spanish": "¿Un barco? ¿Aquí?",
						"vietnamese": "Một con tàu? Ở đây sao?",
						"thai": "เรือเหรอ? ที่นี่น่ะเหรอ?",
						"hindi": "एक जहाज़? यहाँ?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마치 무언가… 잊혀진 이야기를 하려는 것 같습니다.",
						"english": "It's as if something... is trying to tell a forgotten story.",
						"japanese": "まるで何か…忘れ去られた物語を語ろうとしているみたい。",
						"chinese": "仿佛有什么…想讲述一个被遗忘的故事。",
						"french": "C'est comme si quelque chose… essayait de raconter une histoire oubliée.",
						"spanish": "Es como si algo… intentara contar una historia olvidada.",
						"vietnamese": "Cứ như thể có điều gì đó… đang cố kể một câu chuyện đã lãng quên.",
						"thai": "ราวกับว่าบางสิ่ง...กำลังพยายามบอกเล่าเรื่องราวที่ถูกลืม",
						"hindi": "ऐसा लगता है कि कुछ... एक भूली हुई कहानी कहने की कोशिश कर रहा है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "완전히 해독했어요! 이 용머리 조각은… 고대 바이킹 선박 '스쿌드'의 것이 분명합니다!",
						"english": "I've fully deciphered it! This dragon head carving is definitely from the ancient Viking ship 'Skjold'!",
						"japanese": "完全に解読できたわ！この竜頭の彫刻は…古代バイキング船「スキュルド」のものに違いありません！",
						"chinese": "我完全解密了！这个龙头雕塑…无疑是来自古代维京船“斯基奥尔德”！",
						"french": "J'ai entièrement déchiffré ! Cette sculpture de tête de dragon est sans aucun doute celle de l'ancien navire viking 'Skjold' !",
						"spanish": "¡Lo he descifrado por completo! ¡Esta talla de cabeza de dragón es sin duda del antiguo barco vikingo 'Skjold'!",
						"vietnamese": "Tôi đã giải mã hoàn toàn rồi! Tác phẩm điêu khắc đầu rồng này… chắc chắn là của con tàu Viking cổ đại 'Skjold'!",
						"thai": "ฉันถอดรหัสได้ทั้งหมดแล้ว! รูปปั้นหัวมังกรนี้...เป็นของเรือไวกิ้งโบราณ 'Skjold' อย่างแน่นอน!",
						"hindi": "मैंने इसे पूरी तरह से समझा है! यह ड्रैगन सिर की नक्काशी… निश्चित रूप से प्राचीन वाइकिंग जहाज 'स्कजोल्ड' की है!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "스쿌드? 그게 이 빙하 정령의 이름이라고?",
						"english": "Skuld? That's the name of this glacier spirit?",
						"japanese": "スクルド？それがこの氷河の精霊の名前だと？",
						"chinese": "斯库尔德？那是这个冰川精灵的名字？",
						"french": "Skuld ? C'est le nom de cet esprit des glaciers ?",
						"spanish": "¿Skuld? ¿Ese es el nombre de este espíritu glaciar?",
						"vietnamese": "Skuld? Đó là tên của tinh linh sông băng này ư?",
						"thai": "สกุลด์? นั่นคือชื่อของวิญญาณธารน้ำแข็งตนนี้เหรอ?",
						"hindi": "स्कुल्ड? क्या यही इस हिमनद आत्मा का नाम है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그렇습니다. 그리고 이 룬 문자들은… 이 배의 비극적인 좌초를 기록하고 있어요.",
						"english": "That's right. And these runes... they record this ship's tragic wreck.",
						"japanese": "はい、そうです。そして、このルーン文字は… この船の悲劇的な座礁を記録しています。",
						"chinese": "是的。而这些符文… 记录着这艘船的悲惨失事。",
						"french": "C'est exact. Et ces runes... elles racontent le tragique naufrage de ce navire.",
						"spanish": "Así es. Y estas runas... registran el trágico naufragio de este barco.",
						"vietnamese": "Đúng vậy. Và những ký tự rune này... ghi lại vụ đắm tàu bi thảm này.",
						"thai": "ถูกต้องครับ และอักษรรูนเหล่านี้... พวกมันบันทึกโศกนาฏกรรมเรืออับปางลำนี้ไว้",
						"hindi": "हाँ, बिल्कुल। और ये रूण अक्षर... इस जहाज के दुखद मलबे को रिकॉर्ड कर रहे हैं।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "정령이 아니라… 배였다고? 그럼 지금까지 우린…",
						"english": "Not a spirit... but a ship? Then all this time we've been...",
						"japanese": "精霊じゃなくて… 船だったと？じゃあ今まで私たちは…",
						"chinese": "不是精灵… 而是船？那我们到现在为止一直…",
						"french": "Pas un esprit... mais un navire ? Alors depuis tout ce temps, nous...",
						"spanish": "¿No un espíritu... sino un barco? Entonces, todo este tiempo hemos estado...",
						"vietnamese": "Không phải tinh linh... mà là một con tàu? Vậy thì bấy lâu nay chúng ta...",
						"thai": "ไม่ใช่วิญญาณ... แต่เป็นเรือเหรอ? งั้นที่ผ่านมาเราก็...",
						"hindi": "आत्मा नहीं... बल्कि एक जहाज था? तो अब तक हम..."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "빙하 깊숙한 곳에서 거대한 선박의 잔해가 얼음 속에 잠긴 채 모습을 드러냈다.",
						"english": "Deep within the glacier, the colossal remains of a ship emerged, entombed in ice.",
						"japanese": "氷河の奥深くから、巨大な船の残骸が氷に閉じ込められたまま姿を現した。",
						"chinese": "在冰川深处，一艘巨型船只的残骸在冰中显露出来。",
						"french": "Au plus profond du glacier, les vestiges colossaux d'un navire sont apparus, ensevelis dans la glace.",
						"spanish": "En lo profundo del glaciar, los colosales restos de un barco emergieron, sepultados en el hielo.",
						"vietnamese": "Sâu trong sông băng, phần còn lại khổng lồ của một con tàu hiện ra, bị chôn vùi trong băng.",
						"thai": "ลึกลงไปในธารน้ำแข็ง ซากเรือขนาดมหึมาได้ปรากฏขึ้นมา ถูกฝังอยู่ในน้ำแข็ง",
						"hindi": "हिमनद की गहराई में, एक विशाल जहाज का अवशेष बर्फ में दफन होकर सामने आया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "룬 문자 전체를 해독하진 못했지만, 핵심은 알겠어요.",
						"english": "I haven't deciphered all the runes, but I understand the core message.",
						"japanese": "ルーン文字の全体を解読できたわけではありませんが、核心は分かりました。",
						"chinese": "我还没有完全解读所有符文，但核心内容我明白了。",
						"french": "Je n'ai pas pu déchiffrer toutes les runes, mais j'ai saisi l'essentiel.",
						"spanish": "No he podido descifrar todas las runas, pero entiendo el mensaje central.",
						"vietnamese": "Tôi chưa giải mã được toàn bộ ký tự rune, nhưng tôi hiểu được mấu chốt.",
						"thai": "ฉันยังไม่ได้ถอดรหัสอักษรรูนทั้งหมด แต่ฉันเข้าใจสาระสำคัญแล้ว",
						"hindi": "मैं सभी रूण अक्षरों को तो नहीं समझ पाया, लेकिन मुख्य बात पता चल गई है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "스쿌드는 한때 피오르드의 심장이라 불린 선단의 척후선이었습니다.",
						"english": "Skuld was once the scout ship of a fleet known as the Heart of the Fjord.",
						"japanese": "スクルドはかつて、「フィヨルドの心臓」と呼ばれた船団の斥候船でした。",
						"chinese": "斯库尔德曾是被称为“峡湾之心”的舰队的侦察船。",
						"french": "Skuld était autrefois le navire éclaireur d'une flotte connue sous le nom de Cœur du Fjord.",
						"spanish": "Skuld fue una vez la nave exploradora de una flota conocida como el Corazón del Fiordo.",
						"vietnamese": "Skuld từng là con tàu trinh sát của hạm đội mang tên Trái tim Vịnh hẹp.",
						"thai": "สกุลด์ครั้งหนึ่งเคยเป็นเรือลาดตระเวนของกองเรือที่รู้จักกันในชื่อ หัวใจแห่งฟยอร์ด",
						"hindi": "स्कुल्ड एक समय में \"फ़्योर्ड का हृदय\" नामक बेड़े का एक टोही जहाज था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "척후선이… 정령이 됐다는 말이야?",
						"english": "The scout ship... became a spirit?",
						"japanese": "斥候船が… 精霊になったと？",
						"chinese": "侦察船… 变成了精灵？",
						"french": "Le navire éclaireur... est devenu un esprit ?",
						"spanish": "¿La nave exploradora... se convirtió en un espíritu?",
						"vietnamese": "Con tàu trinh sát... đã trở thành một tinh linh?",
						"thai": "เรือลาดตระเวน... กลายเป็นวิญญาณเหรอ?",
						"hindi": "टोही जहाज... आत्मा बन गया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 비극적인 맹세가… 이 모든 얼음의 분노가 된 것 같습니다.",
						"english": "That tragic vow... seems to have become all this icy wrath.",
						"japanese": "その悲劇的な誓いが… この全ての氷の怒りとなったようです。",
						"chinese": "那个悲剧性的誓言… 似乎变成了这所有冰雪的愤怒。",
						"french": "Ce vœu tragique... semble être devenu toute cette fureur glacée.",
						"spanish": "Ese trágico juramento... parece haberse convertido en toda esta ira helada.",
						"vietnamese": "Lời thề bi thảm đó... dường như đã biến thành tất cả cơn thịnh nộ băng giá này.",
						"thai": "คำสาบานอันน่าเศร้าโศกนั้น... ดูเหมือนจะกลายเป็นความโกรธเกรี้ยวของน้ำแข็งทั้งหมดนี้",
						"hindi": "वह दुखद प्रतिज्ञा... इस सारी बर्फीली क्रोध का कारण बन गई है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "브란의 해독이 이어지자, 빙하 전체가 미세하게 '멈칫'했다.",
						"english": "As Bran's deciphering continued, the entire glacier subtly 'paused'.",
						"japanese": "ブランの解読が続くと、氷河全体が微かに「ひるんだ」。",
						"chinese": "随着布兰的解读，整个冰川都微妙地“停顿”了一下。",
						"french": "Alors que le déchiffrement de Bran se poursuivait, le glacier tout entier marqua une subtile « pause ».",
						"spanish": "A medida que la decodificación de Bran continuaba, todo el glaciar \"se detuvo\" sutilmente.",
						"vietnamese": "Khi Bran tiếp tục giải mã, toàn bộ sông băng hơi \"khựng lại\".",
						"thai": "ขณะที่การถอดรหัสของแบรนดำเนินไป ธารน้ำแข็งทั้งหมดก็ 'ชะงัก' ลงเล็กน้อย",
						"hindi": "जैसे ही ब्रैन का डिकोडिंग जारी रहा, पूरा हिमनद सूक्ष्म रूप से 'थमा'।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "거대한 얼음 선박이 무너져 내리며, 갇혔던 영혼의 비명이 울려 퍼졌다.",
						"english": "The colossal ice ship crumbled, and the screams of the trapped souls echoed.",
						"japanese": "巨大な氷の船が崩れ落ち、囚われた魂の悲鳴が響き渡った。",
						"chinese": "巨大的冰船崩塌，被困灵魂的尖叫声回荡不绝。",
						"french": "Le gigantesque navire de glace s'effondra, et les cris des âmes emprisonnées résonnèrent.",
						"spanish": "El colosal barco de hielo se desmoronó, y los gritos de las almas atrapadas resonaron.",
						"vietnamese": "Con tàu băng khổng lồ sụp đổ, tiếng thét của những linh hồn bị giam cầm vang vọng.",
						"thai": "เรือน้ำแข็งมหึมาพังทลายลง และเสียงกรีดร้องของวิญญาณที่ถูกจองจำก็ดังก้อง",
						"hindi": "विशाल बर्फ का जहाज ढह गया, और फंसी हुई आत्माओं की चीखें गूंज उठीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…나의… 맹세는… 아직…",
						"english": "...My... vow... still...",
						"japanese": "…私の…誓いは…まだ…",
						"chinese": "……我的……誓言……仍然……",
						"french": "...Mon... serment... toujours...",
						"spanish": "...Mi... juramento... aún...",
						"vietnamese": "...Lời thề... của ta... vẫn còn...",
						"thai": "...คำสาบาน... ของข้า... ยังคง...",
						"hindi": "मेरी... प्रतिज्ञा... अभी भी..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "스쿌드… 당신은 이제 자유로워진 거야?",
						"english": "Skuld... Are you free now?",
						"japanese": "スクルド…あなたはもう自由になったの？",
						"chinese": "斯库尔德……你现在自由了吗？",
						"french": "Skuld… Es-tu libre maintenant ?",
						"spanish": "Skuld… ¿Eres libre ahora?",
						"vietnamese": "Skuld... Ngươi đã tự do rồi sao?",
						"thai": "Skuld... เจ้าเป็นอิสระแล้วหรือ?",
						"hindi": "स्कुल्ड... क्या तुम अब आज़ाद हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "스쿌드의 잔해가 녹아내리며, 잊혀졌던 슬픈 멜로디가 빙하 깊숙한 곳에서 울려 퍼졌다.",
						"english": "As Skuld's remains melted away, a forgotten sad melody echoed from deep within the glacier.",
						"japanese": "スクルドの残骸が溶け落ち、忘れ去られた悲しいメロディーが氷河の奥深くから響き渡った。",
						"chinese": "斯库尔德的残骸融化，被遗忘的悲伤旋律从冰川深处回荡开来。",
						"french": "Alors que les restes de Skuld fondaient, une triste mélodie oubliée résonna du plus profond du glacier.",
						"spanish": "Mientras los restos de Skuld se derretían, una triste melodía olvidada resonó desde lo profundo del glaciar.",
						"vietnamese": "Khi tàn dư của Skuld tan chảy, một giai điệu buồn bị lãng quên vang vọng từ sâu thẳm trong sông băng.",
						"thai": "เมื่อซากของ Skuld ละลายหายไป ท่วงทำนองเศร้าที่ถูกลืมเลือนก็ดังก้องจากส่วนลึกของธารน้ำแข็ง",
						"hindi": "जैसे ही स्कुल्ड के अवशेष पिघल गए, ग्लेशियर की गहराई से एक भूली हुई उदास धुन गूंज उठी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 진실의 조각은 아직 온전히 맞춰지지 않았다. 다음 이야기는, 더 깊은 얼음 속에서 시작될 것이다.",
						"english": "However, the pieces of truth have not yet fully aligned. The next story will begin deeper within the ice.",
						"japanese": "しかし、真実の断片はまだ完全には揃っていない。次の物語は、より深い氷の中で始まるだろう。",
						"chinese": "然而，真相的碎片尚未完全拼凑。下一个故事，将在更深的冰层中开始。",
						"french": "Cependant, les fragments de vérité ne sont pas encore entièrement assemblés. La prochaine histoire commencera plus profondément dans la glace.",
						"spanish": "Sin embargo, los fragmentos de la verdad aún no se han unido por completo. La próxima historia comenzará en las profundidades del hielo.",
						"vietnamese": "Tuy nhiên, những mảnh ghép sự thật vẫn chưa hoàn toàn ăn khớp. Câu chuyện tiếp theo sẽ bắt đầu sâu hơn trong băng.",
						"thai": "อย่างไรก็ตาม ชิ้นส่วนของความจริงยังไม่ได้รับการประกอบให้สมบูรณ์ เรื่องราวถัดไปจะเริ่มต้นขึ้นในส่วนลึกของน้ำแข็ง",
						"hindi": "हालांकि, सच्चाई के टुकड़े अभी तक पूरी तरह से मेल नहीं खाए हैं। अगली कहानी, बर्फ की और गहराई में शुरू होगी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 빙하의 심장부, 얼어붙은 배의 형상이 완전히 모습을 드러냈다.",
						"english": "In the heart of the colossal glacier, the frozen form of a ship fully revealed itself.",
						"japanese": "巨大な氷河の心臓部で、凍りついた船の形が完全に姿を現した。",
						"chinese": "巨大的冰川深处，一艘冻结的船只的形状完全显露出来。",
						"french": "Au cœur du glacier colossal, la forme gelée d'un navire s'est entièrement révélée.",
						"spanish": "En el corazón del colosal glaciar, la forma congelada de un barco se reveló por completo.",
						"vietnamese": "Sâu trong lòng sông băng khổng lồ, hình dáng con tàu đóng băng đã hoàn toàn lộ diện.",
						"thai": "ในใจกลางของธารน้ำแข็งขนาดมหึมา รูปร่างของเรือที่ถูกแช่แข็งได้ปรากฏออกมาอย่างสมบูรณ์",
						"hindi": "विशाल हिमनद के हृदय में, एक जमे हुए जहाज का आकार पूरी तरह से प्रकट हो गया।"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "침입자들… 감히… 나의 잠을 방해하는가.",
						"english": "Intruders... How dare you... disturb my slumber.",
						"japanese": "侵入者たち…よくも…私の眠りを妨げるか。",
						"chinese": "入侵者们……竟敢……打扰我的沉睡。",
						"french": "Intrus… Comment osez-vous… déranger mon sommeil.",
						"spanish": "Intrusos… ¿Cómo os atrevéis… a perturbar mi sueño?",
						"vietnamese": "Những kẻ xâm nhập… Dám… quấy rầy giấc ngủ của ta sao.",
						"thai": "ผู้บุกรุก… กล้าดียังไง… มาขัดขวางการหลับใหลของข้า",
						"hindi": "घुसपैठियों… हिम्मत कैसे हुई… मेरी नींद में खलल डालने की।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "아니, 당신의 이름은 스쿌드! 얼음의 정령이 아닌, 비극에 갇힌 배!",
						"english": "No, your name is Skuld! Not a spirit of ice, but a ship trapped in tragedy!",
						"japanese": "違う、あなたの名はスクルド！氷の精霊ではなく、悲劇に囚われた船！",
						"chinese": "不，你的名字是斯库尔德！不是冰之精灵，而是被悲剧困住的船！",
						"french": "Non, votre nom est Skuld ! Pas un esprit de glace, mais un navire pris au piège de la tragédie !",
						"spanish": "¡No, tu nombre es Skuld! ¡No un espíritu de hielo, sino un barco atrapado en la tragedia!",
						"vietnamese": "Không, tên của ngươi là Skuld! Không phải linh hồn băng giá, mà là con tàu bị giam cầm trong bi kịch!",
						"thai": "ไม่, เจ้าชื่อ Skuld! ไม่ใช่ภูตน้ำแข็ง แต่เป็นเรือที่ติดอยู่ในโศกนาฏกรรม!",
						"hindi": "नहीं, तुम्हारा नाम स्कुल्ड है! बर्फ की आत्मा नहीं, बल्कि त्रासदी में फंसा एक जहाज!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "…닥쳐라. 감히 나의 과거를 들추려 하는가!",
						"english": "...Silence. How dare you dig up my past!",
						"japanese": "…黙れ。よくも私の過去を暴こうとするか！",
						"chinese": "……闭嘴。竟敢揭露我的过去！",
						"french": "...Silence. Comment osez-vous déterrer mon passé !",
						"spanish": "...Cállate. ¡Cómo te atreves a desenterrar mi pasado!",
						"vietnamese": "...Câm miệng. Ngươi dám vạch trần quá khứ của ta sao!",
						"thai": "...เงียบไปซะ. กล้าดียังไงมาขุดคุ้ยอดีตของข้า!",
						"hindi": "चुप रहो। हिम्मत कैसे हुई मेरी अतीत को कुरेदने की!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저건… 진짜 배잖아?",
						"english": "That's... a real ship, isn't it?",
						"japanese": "あれは…本物の船じゃないか？",
						"chinese": "那……是艘真船吧？",
						"french": "C'est… un vrai navire, n'est-ce pas ?",
						"spanish": "Eso es… ¿un barco de verdad?",
						"vietnamese": "Kia... là một con tàu thật sao?",
						"thai": "นั่นมัน... เรือจริง ๆ นี่นา?",
						"hindi": "वह... एक असली जहाज है, है ना?"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "모두… 얼어붙어라!",
						"english": "Everyone… freeze!",
						"japanese": "皆…凍りつけ！",
						"chinese": "所有人……都给我冻结！",
						"french": "Tous… Gelez !",
						"spanish": "¡Todos… congeláos!",
						"vietnamese": "Tất cả… đóng băng!",
						"thai": "ทุกคน… จงแข็งตัว!",
						"hindi": "सब लोग… जम जाओ!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들… 나의 고통을… 알 리 없지.",
						"english": "Fools... You couldn't possibly know my pain.",
						"japanese": "愚かな者たち… 私の苦痛など… 知る由もないだろう。",
						"chinese": "愚蠢的东西……你们根本不知道我的痛苦。",
						"french": "Imbéciles… Vous ne pouvez pas connaître ma souffrance.",
						"spanish": "Necios… No podéis conocer mi dolor.",
						"vietnamese": "Lũ ngu ngốc… Các ngươi không thể nào hiểu được nỗi đau của ta.",
						"thai": "พวกโง่เง่า… พวกเจ้าไม่มีทางรู้ถึงความเจ็บปวดของข้าหรอก",
						"hindi": "मूर्खों… तुम मेरे दर्द को… जान ही नहीं सकते।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ… まだ… 終わってない！",
						"chinese": "呃……还没……结束！",
						"french": "Urgh… Ce n'est pas… encore fini !",
						"spanish": "Ugh… ¡Aún… no ha terminado!",
						"vietnamese": "Khốn kiếp… Vẫn chưa… kết thúc đâu!",
						"thai": "อึก… ยัง… ไม่จบหรอก!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "다시 와라. 그때는… 더 깊은 절망을 선사하겠다.",
						"english": "Come again. Next time... I'll grant you deeper despair.",
						"japanese": "また来るがいい。その時は… さらなる絶望を与えよう。",
						"chinese": "再来吧。到那时……我会赐予你们更深的绝望。",
						"french": "Revenez. La prochaine fois… je vous offrirai un désespoir plus profond.",
						"spanish": "Volved. Entonces… os otorgaré una desesperación más profunda.",
						"vietnamese": "Hãy trở lại đi. Khi đó… ta sẽ ban cho các ngươi nỗi tuyệt vọng sâu sắc hơn.",
						"thai": "กลับมาอีกครั้งสิ คราวหน้า… ข้าจะมอบความสิ้นหวังที่ลึกซึ้งยิ่งกว่าให้",
						"hindi": "फिर आओ। उस समय… मैं तुम्हें और गहरी निराशा दूँगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"태고의 빙하 깊은 곳, 숨겨진 진실이 얼음장처럼 차갑게 다가왔다.",
			"브란의 손끝에서 고대 룬 문자가 비극의 서막을 열었다.",
			"스쿌드. 얼어붙은 배의 이름이, 차가운 정령의 이름이 될 줄은.",
			"모든 것이 밝혀질 때, 우리는 무엇을 마주하게 될까.",
			"충격과 비탄, 그리고 비장함만이 우리를 감쌌다."
		],
		"english": [
			"Deep within the primeval glacier, a hidden truth emerged, cold as ice.",
			"From Bran's fingertips, ancient runes unveiled the prelude to tragedy.",
			"Skjold. Who knew the name of a frozen ship would become that of a cold spirit?",
			"When all is revealed, what will we face?",
			"Only shock, sorrow, and a sense of solemnity enveloped us."
		],
		"japanese": [
			"太古の氷河の深奥で、隠された真実が氷のように冷たく迫り来た。",
			"ブランの指先から、古のルーン文字が悲劇の序幕を開いた。",
			"スキョルド。凍てついた船の名が、冷たい精霊の名となるとは。",
			"全てが明らかになる時、我々は何に直面するのだろうか。",
			"衝撃と悲嘆、そして悲壮感だけが私たちを包み込んだ。"
		],
		"chinese": [
			"太古冰川深处，隐藏的真相如冰般寒冷袭来。",
			"在布兰的指尖，古老的符文揭开了悲剧的序幕。",
			"斯克约德。谁曾想，冰封之船的名字会成为寒冷精灵的名字。",
			"当一切揭晓之时，我们将面对什么？",
			"只有冲击、悲痛和悲壮感将我们包围。"
		],
		"french": [
			"Au plus profond du glacier primordial, une vérité cachée émergea, froide comme la glace.",
			"Du bout des doigts de Bran, d'anciennes runes dévoilèrent le prélude à la tragédie.",
			"Skjold. Qui aurait cru que le nom d'un navire gelé deviendrait celui d'un esprit froid ?",
			"Quand tout sera révélé, qu'affronterons-nous ?",
			"Seuls le choc, le chagrin et une solennité poignante nous enveloppaient."
		],
		"spanish": [
			"En lo profundo del glaciar primordial, una verdad oculta emergió, fría como el hielo.",
			"De las yemas de los dedos de Bran, antiguas runas desvelaron el preludio de la tragedia.",
			"¿Quién iba a saber que el nombre de una nave congelada se convertiría en el de un espíritu frío?",
			"Cuando todo se revele, ¿qué enfrentaremos?",
			"Solo el shock, el pesar y una solemnidad desgarradora nos envolvieron."
		],
		"vietnamese": [
			"Sâu thẳm trong sông băng cổ xưa, một sự thật ẩn giấu hiện ra, lạnh giá như băng.",
			"Từ đầu ngón tay của Bran, những ký tự rune cổ đại đã mở ra màn dạo đầu của bi kịch.",
			"Skjold. Ai ngờ tên của một con tàu đóng băng lại trở thành tên của một linh hồn lạnh giá.",
			"Khi mọi thứ được tiết lộ, chúng ta sẽ đối mặt với điều gì?",
			"Chỉ có sự sốc, nỗi đau và cảm giác bi tráng bao trùm chúng ta."
		],
		"thai": [
			"ลึกเข้าไปในธารน้ำแข็งยุคดึกดำบรรพ์ ความจริงที่ซ่อนอยู่ปรากฏขึ้น เยือกเย็นราวกับน้ำแข็ง",
			"จากปลายนิ้วของแบรน รูนโบราณได้เปิดฉากโหมโรงแห่งโศกนาฏกรรม",
			"สกยอลด์ ใครจะรู้ว่าชื่อของเรือที่ถูกแช่แข็งจะกลายเป็นชื่อของวิญญาณเยือกเย็น",
			"เมื่อทุกสิ่งถูกเปิดเผย เราจะต้องเผชิญหน้ากับอะไร?",
			"มีเพียงความตกใจ ความโศกเศร้า และความห้าวหาญที่ห่อหุ้มเราไว้"
		],
		"hindi": [
			"प्राचीन ग्लेशियर की गहराई में, एक छिपा हुआ सच बर्फ की तरह ठंडा होकर सामने आया।",
			"ब्रान की उंगलियों से, प्राचीन runes ने त्रासदी का पूर्वाभ्यास खोला।",
			"स्कायोल्ड। कौन जानता था कि जमे हुए जहाज का नाम एक ठंडी आत्मा का नाम बन जाएगा।",
			"जब सब कुछ प्रकट हो जाएगा, तो हम क्या सामना करेंगे?",
			"केवल सदमा, दुख और एक गंभीरता ने हमें घेर लिया।"
		]
	},
	"epilogue": {
		"korean": [
			"스쿌드의 비명이 멈추자, 태고의 빙하는 다시 침묵에 잠겼다.",
			"길 잃었던 영혼은 자유를 찾았을까, 아니면 더 깊은 고통에 빠졌을까.",
			"브란의 손에 들린 룬 문자는 여전히 미완의 비극을 속삭였다.",
			"끝났다고 말하기엔, 너무 많은 질문이 남았다.",
			"차가운 바람만이, 그날의 진실을 품고 빙하를 맴돌았다."
		],
		"english": [
			"As Skjold's scream ceased, the primeval glacier fell silent once more.",
			"Did the lost soul find freedom, or fall into deeper torment?",
			"The runes in Bran's hand still whispered of an unfinished tragedy.",
			"Too many questions remained to call it an end.",
			"Only the cold wind, carrying the truth of that day, lingered around the glacier."
		],
		"japanese": [
			"スキョルドの悲鳴が止むと、太古の氷河は再び沈黙に包まれた。",
			"迷いし魂は自由を見つけたのか、それともより深い苦痛に陥ったのか。",
			"ブランの手に握られたルーン文字は、未完の悲劇を今も囁いていた。",
			"終わったと言うには、あまりにも多くの疑問が残っていた。",
			"冷たい風だけが、あの日の真実を抱え、氷河をさまよっていた。"
		],
		"chinese": [
			"随着斯克约德的尖叫停止，太古冰川再次陷入沉寂。",
			"迷失的灵魂是找到了自由，还是陷入了更深的痛苦？",
			"布兰手中的符文，仍在低语着未完的悲剧。",
			"要说结束，还有太多问题悬而未决。",
			"只有寒风，带着那天的真相，在冰川周围徘徊。"
		],
		"french": [
			"Quand le cri de Skjold cessa, le glacier primordial retomba dans le silence.",
			"L'âme perdue a-t-elle trouvé la liberté, ou est-elle tombée dans un tourment plus profond ?",
			"Les runes dans la main de Bran chuchotaient encore une tragédie inachevée.",
			"Trop de questions restaient pour y voir une fin.",
			"Seul le vent froid, porteur de la vérité de ce jour, errait autour du glacier."
		],
		"spanish": [
			"Cuando el grito de Skjold cesó, el glaciar primordial volvió a sumirse en el silencio.",
			"¿Encontró la libertad el alma perdida, o cayó en un tormento más profundo?",
			"Las runas en la mano de Bran aún susurraban una tragedia inconclusa.",
			"Demasiadas preguntas quedaron para llamarlo un final.",
			"Solo el viento frío, portador de la verdad de aquel día, rondaba el glaciar."
		],
		"vietnamese": [
			"Khi tiếng hét của Skjold dừng lại, sông băng cổ xưa lại chìm vào im lặng.",
			"Linh hồn lạc lối đã tìm thấy tự do, hay rơi vào nỗi đau sâu thẳm hơn?",
			"Những ký tự rune trong tay Bran vẫn thì thầm về một bi kịch chưa hoàn thành.",
			"Để nói rằng đã kết thúc, còn quá nhiều câu hỏi chưa có lời giải.",
			"Chỉ có làn gió lạnh mang theo sự thật ngày hôm đó, vương vấn quanh sông băng."
		],
		"thai": [
			"เมื่อเสียงกรีดร้องของสกยอลด์หยุดลง ธารน้ำแข็งยุคดึกดำบรรพ์ก็กลับสู่ความเงียบงันอีกครั้ง",
			"วิญญาณที่หลงทางได้พบอิสรภาพ หรือตกอยู่ในความทรมานที่ลึกซึ้งยิ่งกว่ากัน?",
			"รูนในมือของแบรนยังคงกระซิบถึงโศกนาฏกรรมที่ยังไม่จบสิ้น",
			"ยังมีคำถามอีกมากมายเกินกว่าจะบอกว่ามันจบลงแล้ว",
			"มีเพียงลมหนาวที่พัดพาวันนั้นไป และวนเวียนอยู่รอบธารน้ำแข็ง"
		],
		"hindi": [
			"जैसे ही स्कायोल्ड की चीख बंद हुई, प्राचीन ग्लेशियर फिर से खामोश हो गया।",
			"क्या भटकी हुई आत्मा को मुक्ति मिली, या वह गहरे दुख में गिर गई?",
			"ब्रान के हाथ में runes अभी भी एक अधूरी त्रासदी की फुसफुसाहट कर रहे थे।",
			"इसे अंत कहने के लिए बहुत सारे प्रश्न अनुत्तरित रह गए थे।",
			"केवल ठंडी हवा, उस दिन की सच्चाई लिए हुए, ग्लेशियर के चारों ओर मंडरा रही थी।"
		]
	}
} as const;
