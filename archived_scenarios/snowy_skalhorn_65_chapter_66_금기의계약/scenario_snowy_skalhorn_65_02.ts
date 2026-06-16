export const scenario_snowy_skalhorn_65_02 = {
	"scenario_id": "snowy_skalhorn_65_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"에이라는 고대 룬을 읽어내려갔다.",
			"얼어붙은 제단에 새겨진 잊힌 계약.",
			"구원을 위한 기도였을까, 아니면 더 큰 재앙의 서막일까.",
			"침착한 기록자의 눈빛이 흔들리기 시작했다."
		],
		"english": [
			"Aira read the ancient runes.",
			"A forgotten pact carved on the frozen altar.",
			"Was it a prayer for salvation, or the prelude to a greater catastrophe?",
			"The calm chronicler's gaze began to waver."
		],
		"japanese": [
			"エイラは古代のルーンを読み解いていった。",
			"凍てついた祭壇に刻まれた忘れられた契約。",
			"それは救済への祈りだったのか、それともより大きな災厄の序幕なのか。",
			"冷静な記録者の眼差しが揺らぎ始めた。"
		],
		"chinese": [
			"艾拉解读着古老的符文。",
			"刻在冰冷祭坛上的遗忘契约。",
			"是为救赎的祈祷，还是更大灾难的序幕？",
			"沉着记录者的目光开始动摇。"
		],
		"french": [
			"Aira déchiffrait les runes antiques.",
			"Un pacte oublié gravé sur l'autel gelé.",
			"Était-ce une prière de salut, ou le prélude d'une catastrophe plus grande ?",
			"Le regard du chroniqueur serein commença à vaciller."
		],
		"spanish": [
			"Aira leyó las antiguas runas.",
			"Un pacto olvidado grabado en el altar congelado.",
			"¿Fue una oración por la salvación, o el preludio de una catástrofe mayor?",
			"La mirada del cronista tranquilo comenzó a flaquear."
		],
		"vietnamese": [
			"Aira đọc từng dòng chữ rune cổ đại.",
			"Một khế ước bị lãng quên được khắc trên bàn thờ đóng băng.",
			"Liệu đây là lời cầu nguyện cho sự cứu rỗi, hay khúc dạo đầu của một thảm họa lớn hơn?",
			"Ánh mắt của người ghi chép điềm tĩnh bắt đầu lay động."
		],
		"thai": [
			"ไอราอ่านรูนโบราณลงไป",
			"สัญญาที่ถูกลืมสลักอยู่บนแท่นบูชาที่เยือกแข็ง",
			"มันคือคำอธิษฐานเพื่อความรอด หรืออารัมภบทของหายนะที่ใหญ่กว่ากันแน่",
			"สายตาของผู้บันทึกที่ใจเย็นเริ่มสั่นคลอน"
		],
		"hindi": [
			"ऐरा ने प्राचीन रुन्स पढ़े।",
			"जमी हुई वेदी पर खुदा हुआ एक भूला हुआ समझौता।",
			"क्या यह मोक्ष के लिए प्रार्थना थी, या एक बड़ी आपदा की प्रस्तावना?",
			"शांत इतिहासकार की नज़र डगमगाने लगी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "제단의 룬이 희미한 빛을 냈다. 에이라의 손끝에서 과거가 풀려났다.",
						"english": "The altar's runes glowed faintly. The past unraveled at Aira's fingertips.",
						"japanese": "祭壇のルーンが微かに光った。エイラの指先から過去が解き放たれた。",
						"chinese": "祭坛的符文发出微弱的光芒。艾拉指尖轻触，过去随之揭示。",
						"french": "Les runes de l'autel brillèrent faiblement. Le passé se dévoila au bout des doigts d'Aira.",
						"spanish": "Las runas del altar brillaron débilmente. El pasado se desveló al alcance de los dedos de Aira.",
						"vietnamese": "Các chữ rune trên bàn thờ phát ra ánh sáng mờ nhạt. Quá khứ được hé lộ qua đầu ngón tay của Aira.",
						"thai": "รูนของแท่นบูชาเปล่งแสงจางๆ อดีตคลี่คลายที่ปลายนิ้วของไอรา",
						"hindi": "वेदी के रुन्स हल्के से चमक उठे। ऐरा की उंगलियों से अतीत सामने आया।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "...찾았습니다. 첫 번째 문장.",
						"english": "...I found it. The first sentence.",
						"japanese": "「...見つけました。最初の文です。」",
						"chinese": "“……找到了。第一句话。”",
						"french": "...Je l'ai trouvé. La première phrase.",
						"spanish": "...Lo encontré. La primera frase.",
						"vietnamese": "...Tìm thấy rồi. Câu đầu tiên.",
						"thai": "...เจอแล้ว ประโยคแรก",
						"hindi": "...मुझे मिल गया। पहला वाक्य।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "계약의 시작은 '부족을 구하라.' 간절한 기도였습니다.",
						"english": "The pact began with, 'Save the tribe.' A desperate prayer.",
						"japanese": "契約の始まりは「部族を救え」。切なる祈りでした。",
						"chinese": "契约始于“拯救部落”。这是一个恳切的祈祷。",
						"french": "Le pacte commençait par : « Sauvez la tribu. » Une prière désespérée.",
						"spanish": "El pacto comenzó con: \"Salva a la tribu.\" Una oración desesperada.",
						"vietnamese": "Khế ước bắt đầu với lời \"Cứu lấy bộ lạc.\" Một lời cầu nguyện khẩn thiết.",
						"thai": "สัญญาเริ่มต้นด้วย 'ช่วยชนเผ่า' เป็นคำอธิษฐานที่สิ้นหวัง",
						"hindi": "समझौता 'जनजाति को बचाओ' से शुरू हुआ। एक हताश प्रार्थना।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "구원이라... 그렇다면 왜 모든 것이 얼었지?",
						"english": "Salvation... Then why did everything freeze?",
						"japanese": "救済だと... それなら、なぜ全てが凍りついたんだ？",
						"chinese": "救赎……那为何一切都冻结了？",
						"french": "Le salut... Alors pourquoi tout a-t-il gelé ?",
						"spanish": "¿Salvación...? Entonces, ¿por qué todo se congeló?",
						"vietnamese": "Cứu rỗi... Vậy thì tại sao mọi thứ lại đóng băng?",
						"thai": "ความรอด... แล้วทำไมทุกสิ่งถึงแข็งตัว?",
						"hindi": "मोक्ष... तो फिर सब कुछ क्यों जम गया?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "더 읽어야 합니다. 이것은... 시작에 불과해요.",
						"english": "I must read more. This is... just the beginning.",
						"japanese": "もっと読まなければなりません。これは... 始まりに過ぎません。",
						"chinese": "必须继续读下去。这只是……一个开始。",
						"french": "Je dois lire la suite. Ce n'est... que le début.",
						"spanish": "Debo leer más. Esto es... solo el principio.",
						"vietnamese": "Phải đọc thêm nữa. Đây chỉ là... khởi đầu thôi.",
						"thai": "ต้องอ่านเพิ่ม นี่เป็น... เพียงแค่จุดเริ่มต้น",
						"hindi": "मुझे और पढ़ना होगा। यह... बस शुरुआत है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "다음 구절... '모든 것을 얼리라.' 정령의 응답입니다.",
						"english": "The next verse... 'Freeze all.' The spirit's response.",
						"japanese": "次の節は...「全てを凍らせよ」。精霊の応答です。",
						"chinese": "下一个段落是……“冻结一切。” 这是精灵的回应。",
						"french": "Le verset suivant... « Gelez tout. » La réponse de l'esprit.",
						"spanish": "El siguiente pasaje... \"Congela todo.\" La respuesta del espíritu.",
						"vietnamese": "Câu tiếp theo... \"Đóng băng mọi thứ.\" Đó là phản ứng của tinh linh.",
						"thai": "บทต่อไป... 'จงทำให้ทุกสิ่งแข็งตัว' คำตอบของวิญญาณ",
						"hindi": "अगली आयत... 'सब कुछ जमा दो।' आत्मा का उत्तर।"
					}
				},
				{
					"content": {
						"korean": "뭐? 구원해달랬더니 얼려버렸다고?",
						"english": "What? You asked for salvation, and it froze you?",
						"japanese": "何？救いを求めたら凍らせられたって？",
						"chinese": "什么？求救却被冻住了？",
						"french": "Quoi ? Tu as demandé le salut et ça t'a gelé ?",
						"spanish": "¿Qué? ¿Pediste salvación y te congeló?",
						"vietnamese": "Gì cơ? Cầu cứu mà lại bị đóng băng?",
						"thai": "อะไรนะ? ขอให้ช่วยแต่กลับถูกแช่แข็งงั้นเหรอ?",
						"hindi": "क्या? तुमने मोक्ष मांगा और इसने तुम्हें जमा दिया?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기도에 대한 뒤틀린 응답... 그 결과가 이 모든 얼음입니다.",
						"english": "A twisted answer to a prayer... the result is all this ice.",
						"japanese": "祈りへの歪んだ応え…その結果がこの全ての氷です。",
						"chinese": "对祈祷的扭曲回应……结果就是这所有的冰。",
						"french": "Une réponse tordue à une prière... le résultat est toute cette glace.",
						"spanish": "Una respuesta retorcida a una oración... el resultado es todo este hielo.",
						"vietnamese": "Lời hồi đáp méo mó cho một lời cầu nguyện... và kết quả là tất cả băng giá này đây.",
						"thai": "การตอบสนองที่บิดเบี้ยวต่อคำอธิษฐาน... ผลลัพธ์ก็คือน้ำแข็งทั้งหมดนี้",
						"hindi": "एक प्रार्थना का विकृत जवाब... जिसका परिणाम यह सारी बर्फ है。"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						6,
						2
					]
				},
				{
					"content": {
						"korean": "크르르... 진실은 언제나 불편한 법.",
						"english": "Grrr... The truth is always uncomfortable.",
						"japanese": "グルル… 真実はいつだって不都合なものだ。",
						"chinese": "嘶……真相总是令人不适。",
						"french": "Grrr... La vérité est toujours dérangeante.",
						"spanish": "Grrr... La verdad siempre es incómoda.",
						"vietnamese": "Khừ khừ... Sự thật thì lúc nào cũng khó chịu thôi.",
						"thai": "ครืน... ความจริงมักจะไม่น่าอภิรมย์เสมอ",
						"hindi": "ग्रर्र... सत्य हमेशा असहज होता है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "구원과 파괴는 한 끗 차이.",
						"english": "Salvation and destruction are but a hair's breadth apart.",
						"japanese": "救済と破壊は紙一重だ。",
						"chinese": "救赎与毁灭，一线之隔。",
						"french": "Le salut et la destruction ne tiennent qu'à un fil.",
						"spanish": "La salvación y la destrucción están a un hilo.",
						"vietnamese": "Cứu rỗi và hủy diệt chỉ cách nhau một sợi tóc.",
						"thai": "การไถ่บาปและการทำลายล้างห่างกันเพียงเส้นยาแดงผ่าแปด",
						"hindi": "मुक्ति और विनाश में बस एक बाल भर का फर्क है।"
					}
				},
				{
					"content": {
						"korean": "방해하지 마! 네가 진실을 뭘 안다고!",
						"english": "Don't interfere! What do you know about the truth?!",
						"japanese": "邪魔するな！お前が真実を何を知ってるって言うんだ！",
						"chinese": "别碍事！你对真相又了解多少！",
						"french": "Ne t'interpose pas ! Qu'est-ce que tu connais de la vérité, toi !",
						"spanish": "¡No te interpongas! ¡¿Qué sabes tú de la verdad?!",
						"vietnamese": "Đừng cản trở! Mày biết gì về sự thật chứ!",
						"thai": "อย่าขัดขวาง! แกรู้อะไรเกี่ยวกับความจริงกันแน่!",
						"hindi": "दखल मत दो! तुम सच के बारे में क्या जानते हो?!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						4,
						1
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "계약은 구원을 가장했지만, 실상은 금기의 거래였습니다.",
						"english": "The contract feigned salvation, but in reality, it was a forbidden bargain.",
						"japanese": "契約は救済を装っていたが、実態は禁忌の取引だった。",
						"chinese": "契约伪装成救赎，实则是一场禁忌的交易。",
						"french": "Le contrat prétendait offrir le salut, mais en réalité, c'était un marché interdit.",
						"spanish": "El contrato fingía ser salvación, pero en realidad, era un trato prohibido.",
						"vietnamese": "Hợp đồng ấy đội lốt cứu rỗi, nhưng thực chất lại là một giao dịch cấm kỵ.",
						"thai": "สัญญานั้นแสร้งทำเป็นความรอด แต่แท้จริงแล้วมันคือข้อตกลงต้องห้าม",
						"hindi": "अनुबंध ने मोक्ष का दिखावा किया, लेकिन वास्तव में, यह एक वर्जित सौदा था।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "결국 부족을 지키려고 자신들을 팔아넘긴 거네.",
						"english": "So, they ended up selling themselves out to protect their tribe.",
						"japanese": "結局、部族を守るために自分たちを売り渡したわけだ。",
						"chinese": "说到底，他们是为了保护部落而出卖了自己。",
						"french": "Finalement, ils se sont vendus pour protéger leur tribu.",
						"spanish": "Al final, se vendieron para proteger a su tribu.",
						"vietnamese": "Rốt cuộc thì, họ đã bán đứng bản thân để bảo vệ bộ lạc của mình.",
						"thai": "ในที่สุด พวกเขาก็ขายตัวเองเพื่อปกป้องเผ่าของพวกเขา",
						"hindi": "तो, उन्होंने अपनी जनजाति की रक्षा के लिए खुद को बेच दिया।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "혹은… 부족을 지키는 대가로 다른 것을 내주어야 했을 수도 있죠.",
						"english": "Or... perhaps they had to give up something else in exchange for protecting their tribe.",
						"japanese": "あるいは…部族を守る代償として、別の何かを差し出さなければならなかったのかもしれません。",
						"chinese": "又或者……他们为了守护部落，不得不付出其他的代价。",
						"french": "Ou bien... peut-être ont-ils dû sacrifier autre chose en échange de la protection de leur tribu.",
						"spanish": "O... quizás tuvieron que entregar algo más a cambio de proteger a su tribu.",
						"vietnamese": "Hoặc... có lẽ họ đã phải đánh đổi thứ gì đó khác để bảo vệ bộ lạc.",
						"thai": "หรือ... บางทีพวกเขาอาจจะต้องแลกบางสิ่งบางอย่างเพื่อปกป้องเผ่าของพวกเขา",
						"hindi": "या... शायद उन्हें अपनी जनजाति की रक्षा के बदले कुछ और देना पड़ा होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그 대가가… 이 얼음 감옥이라고?",
						"english": "And that price... is this ice prison?",
						"japanese": "その代償が…この氷の牢獄だと？",
						"chinese": "那代价……就是这座冰之牢狱吗？",
						"french": "Et ce prix... est cette prison de glace ?",
						"spanish": "¿Y ese precio... es esta prisión de hielo?",
						"vietnamese": "Cái giá đó... là nhà tù băng này ư?",
						"thai": "และค่าตอบแทนนั้น... คือคุกน้ำแข็งนี้หรือ?",
						"hindi": "और वह कीमत... यह बर्फ की जेल है?"
					},
					"emotion": "angry",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 모든 것이 해독된 건 아닙니다. 더 깊은 곳에... 잊힌 역사가 있습니다.",
						"english": "Not everything has been deciphered yet. Deeper within... lies a forgotten history.",
						"japanese": "まだ全てが解読されたわけではありません。もっと奥深くには…忘れ去られた歴史があります。",
						"chinese": "并非所有一切都已解读。更深之处……隐藏着一段被遗忘的历史。",
						"french": "Tout n'a pas encore été déchiffré. Plus profondément... se trouve une histoire oubliée.",
						"spanish": "No todo ha sido descifrado aún. Más profundo... yace una historia olvidada.",
						"vietnamese": "Chưa phải mọi thứ đều đã được giải mã. Sâu thẳm hơn nữa... là một lịch sử đã bị lãng quên.",
						"thai": "ยังไม่ได้ถอดรหัสทุกอย่างหมด ยังมีประวัติศาสตร์ที่ถูกลืม... อยู่ลึกไปกว่านั้น",
						"hindi": "अभी सब कुछ नहीं सुलझा है। और गहराई में... एक भूला हुआ इतिहास है。"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "제단의 문장은 더욱 기괴하게 뒤틀렸다. 구원의 흔적은 사라지고, 오직 거래의 잔혹함만이 남았다.",
						"english": "The altar's emblem twisted even more grotesquely. Traces of salvation vanished, leaving only the cruelty of the bargain.",
						"japanese": "祭壇の紋章はさらに奇怪に歪んだ。救済の痕跡は消え去り、ただ取引の残酷さだけが残った。",
						"chinese": "祭坛的纹章扭曲得更加怪异。救赎的痕迹消失了，只剩下交易的残酷。",
						"french": "L'emblème de l'autel se tordit encore plus horriblement. Toute trace de salut disparut, ne laissant que la cruauté du marché.",
						"spanish": "El emblema del altar se retorció de forma aún más grotesca. Todo rastro de salvación desapareció, dejando solo la crueldad del trato.",
						"vietnamese": "Biểu tượng trên bàn thờ càng vặn vẹo kỳ dị hơn. Dấu vết của sự cứu rỗi biến mất, chỉ còn lại sự tàn khốc của giao dịch.",
						"thai": "ตราสัญลักษณ์บนแท่นบูชาบิดเบี้ยวผิดรูปยิ่งขึ้น ร่องรอยแห่งการไถ่ถอนมลายหายไป เหลือไว้เพียงความโหดร้ายของการแลกเปลี่ยน",
						"hindi": "वेदी का प्रतीक और भी विकृत रूप से मुड़ गया। मोक्ष के निशान गायब हो गए, केवल सौदे की क्रूरता शेष रही।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						1,
						3
					]
				},
				{
					"content": {
						"korean": "이 문장... '부족을 구하라' 옆에, '모든 것을 얼리라'가 나란히 새겨져 있습니다.",
						"english": "This inscription... next to 'Save the tribe', 'Freeze everything' is etched.",
						"japanese": "この紋章…「部族を救え」の隣に、「全てを凍らせよ」が並んで刻まれている。",
						"chinese": "这段铭文……在“拯救部落”旁边，刻着“冰封一切”。",
						"french": "Cette inscription... à côté de « Sauvez la tribu », « Geler tout » est gravé.",
						"spanish": "Esta inscripción... junto a 'Salva a la tribu', 'Congela todo' está grabado.",
						"vietnamese": "Dòng chữ này... cạnh 'Cứu lấy bộ tộc', có khắc 'Đóng băng mọi thứ'.",
						"thai": "จารึกนี้... ข้าง 'จงช่วยเผ่า' มี 'จงแช่แข็งทุกสิ่ง' สลักอยู่คู่กัน",
						"hindi": "यह शिलालेख... 'जनजाति को बचाओ' के बगल में, 'सब कुछ जमा दो' खुदा हुआ है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "두 문장이 동시에? 어떻게 그런 계약이...",
						"english": "Two inscriptions at once? How could such a contract...",
						"japanese": "二つの文が同時に？どうしてそんな契約が…",
						"chinese": "两段铭文同时出现？怎么会有这种契约…",
						"french": "Deux inscriptions à la fois ? Comment un tel contrat...",
						"spanish": "¿Dos inscripciones a la vez? ¿Cómo pudo un contrato así...?",
						"vietnamese": "Hai dòng chữ cùng lúc? Làm sao có được một giao ước như vậy...",
						"thai": "สองจารึกพร้อมกัน? สัญญาแบบนั้น... เป็นไปได้อย่างไร...",
						"hindi": "एक साथ दो शिलालेख? ऐसा अनुबंध कैसे हो सकता है..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "정령은 기도에 응답했습니다. 부족을 구하되, 그 방식은 '얼리는 것'이었던 거죠.",
						"english": "The spirit answered the prayer. To save the tribe, but the method was 'to freeze everything'.",
						"japanese": "精霊は祈りに応えました。部族を救う、ただしその方法は「凍らせること」だったのです。",
						"chinese": "精灵回应了祈祷。拯救部落，但方式却是“冰封一切”。",
						"french": "L'esprit a répondu à la prière. Sauver la tribu, mais la méthode était de 'tout geler'.",
						"spanish": "El espíritu respondió a la oración. Salvar a la tribu, pero el método era 'congelar todo'.",
						"vietnamese": "Tinh linh đã đáp lại lời cầu nguyện. Cứu lấy bộ tộc, nhưng cách thức lại là 'đóng băng mọi thứ'.",
						"thai": "วิญญาณตอบรับคำอธิษฐานแล้ว ช่วยเผ่า แต่ด้วยวิธีการ 'แช่แข็งทุกสิ่ง'",
						"hindi": "आत्मा ने प्रार्थना का उत्तर दिया। जनजाति को बचाना, लेकिन तरीका था 'सब कुछ जमा देना'।"
					}
				},
				{
					"content": {
						"korean": "이건 구원이 아니잖아! 저주지!",
						"english": "This isn't salvation! It's a curse!",
						"japanese": "これは救済じゃない！呪いだ！",
						"chinese": "这根本不是救赎！是诅咒！",
						"french": "Ce n'est pas le salut ! C'est une malédiction !",
						"spanish": "¡Esto no es salvación! ¡Es una maldición!",
						"vietnamese": "Đây không phải là sự cứu rỗi! Đây là lời nguyền!",
						"thai": "นี่ไม่ใช่การไถ่ถอน! นี่มันคำสาปชัดๆ!",
						"hindi": "यह मोक्ष नहीं है! यह एक अभिशाप है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "맞습니다. 이것은… 구원을 가장한 금기의 거래였습니다.",
						"english": "That's right. This was... a forbidden bargain disguised as salvation.",
						"japanese": "その通りです。これは…救済を装った禁忌の取引でした。",
						"chinese": "没错。这曾是…伪装成救赎的禁忌交易。",
						"french": "C'est exact. C'était... un pacte interdit déguisé en salut.",
						"spanish": "Así es. Esto fue... un trato prohibido disfrazado de salvación.",
						"vietnamese": "Đúng vậy. Đây là... một giao dịch cấm kỵ được ngụy trang dưới danh nghĩa cứu rỗi.",
						"thai": "ถูกต้อง นี่คือ... ข้อตกลงต้องห้ามที่แฝงมาในคราบของความรอด",
						"hindi": "सही है। यह था... मोक्ष के भेष में एक वर्जित सौदा।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"spot": [
						5,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 필멸자들. 이제야 진실을 아는가?",
						"english": "Foolish mortals. Do you know the truth now?",
						"japanese": "愚かなる定命の者たちよ。今になって真実を知るか？",
						"chinese": "愚蠢的凡人。现在才明白真相吗？",
						"french": "Mortels insensés. Connaissez-vous enfin la vérité ?",
						"spanish": "Mortales necios. ¿Ahora conocéis la verdad?",
						"vietnamese": "Những kẻ phàm trần ngu ngốc. Giờ các ngươi mới biết sự thật sao?",
						"thai": "มนุษย์ผู้โง่เขลา ตอนนี้เจ้าถึงรู้ความจริงแล้วหรือ?",
						"hindi": "मूर्ख नश्वर प्राणी। क्या अब तुम्हें सच्चाई का पता चला?"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "당신은... 이 계약의 증인인가요?",
						"english": "Are you... a witness to this contract?",
						"japanese": "あなたは…この契約の証人ですか？",
						"chinese": "你是……这份契约的见证人吗？",
						"french": "Êtes-vous... un témoin de ce contrat ?",
						"spanish": "¿Eres... un testigo de este contrato?",
						"vietnamese": "Ngươi là... nhân chứng của giao ước này sao?",
						"thai": "ท่านคือ... พยานของสัญญานี้หรือ?",
						"hindi": "क्या आप... इस अनुबंध के गवाह हैं?"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "증인? 나는 그 결과물. 뒤틀린 구원의 산물이다.",
						"english": "A witness? I am its outcome. The product of twisted salvation.",
						"japanese": "証人？私はその結果だ。歪んだ救済の産物だ。",
						"chinese": "见证人？我就是它的结果。扭曲救赎的产物。",
						"french": "Un témoin ? Je suis son résultat. Le fruit d'un salut tordu.",
						"spanish": "¿Un testigo? Yo soy su resultado. El producto de una salvación retorcida.",
						"vietnamese": "Nhân chứng? Ta là kết quả của nó. Sản phẩm của sự cứu rỗi méo mó.",
						"thai": "พยาน? ข้าคือผลลัพธ์ของมัน ผลผลิตแห่งการไถ่ถอนที่บิดเบี้ยว",
						"hindi": "गवाह? मैं इसका परिणाम हूँ। विकृत मोक्ष का उत्पाद।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시끄러워! 네가 뭔데 함부로 떠들어!",
						"english": "Shut up! Who are you to speak so carelessly!",
						"japanese": "うるさい！お前が何様だと思って好き勝手言うんだ！",
						"chinese": "闭嘴！你算什么东西，竟敢胡言乱语！",
						"french": "Tais-toi ! Qui es-tu pour parler si imprudemment !",
						"spanish": "¡Cállate! ¿Quién eres tú para hablar así a la ligera?",
						"vietnamese": "Im đi! Ngươi là ai mà dám ăn nói xằng bậy!",
						"thai": "หุบปาก! แกเป็นใครถึงได้พูดจาเหลวไหลเช่นนี้!",
						"hindi": "चुप रहो! तुम कौन होते हो जो बेपरवाही से बात करते हो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무지한 자여, 너희가 발버둥 쳐도 이 계약은 영원하리라.",
						"english": "Ignorant fools, though you struggle, this pact shall be eternal.",
						"japanese": "無知なる者よ、足掻こうとこの契約は永遠だ。",
						"chinese": "无知者啊，即便你挣扎，这份契约也将永恒不灭。",
						"french": "Créatures ignorantes, même si vous vous débattez, ce pacte sera éternel.",
						"spanish": "Ignorantes, aunque forcejeéis, este pacto será eterno.",
						"vietnamese": "Hỡi kẻ vô tri, dù ngươi giãy giụa, khế ước này vẫn vĩnh hằng.",
						"thai": "โอ้ เจ้าผู้โง่เขลาเอ๋ย ต่อให้ดิ้นรนแค่ไหน สัญญานี้ก็จะเป็นนิรันดร์",
						"hindi": "अज्ञानी प्राणियों, चाहे तुम कितना भी संघर्ष करो, यह अनुबंध शाश्वत रहेगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아닙니다! 잊힌 계약이라도, 해독되면 무의미해질 뿐!",
						"english": "No! Even a forgotten pact becomes meaningless once deciphered!",
						"japanese": "違います！忘れ去られた契約でも、解読されれば無意味になるだけです！",
						"chinese": "不！即便是被遗忘的契约，一旦被解读，便会毫无意义！",
						"french": "Non ! Même un pacte oublié, une fois déchiffré, ne sera plus qu'insignifiant !",
						"spanish": "¡No! ¡Incluso un pacto olvidado, una vez descifrado, será insignificante!",
						"vietnamese": "Không phải! Dù là khế ước bị lãng quên, một khi đã giải mã, nó sẽ trở nên vô nghĩa!",
						"thai": "ไม่จริง! แม้จะเป็นสัญญาที่ถูกลืม แต่เมื่อถูกคลี่คลาย มันก็จะไร้ความหมาย!",
						"hindi": "नहीं! भुलाया गया अनुबंध भी, एक बार सुलझ जाने पर, अर्थहीन हो जाएगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 자들... 이 얼음은 너희를 집어삼키리라.",
						"english": "Insignificant beings... This ice shall consume you.",
						"japanese": "取るに足らぬ者たちよ... この氷がお前たちを飲み込むだろう。",
						"chinese": "卑微的凡人... 这冰将吞噬你们。",
						"french": "Créatures insignifiantes... Cette glace vous engloutira.",
						"spanish": "Seres insignificantes... Este hielo os consumirá.",
						"vietnamese": "Những kẻ tầm thường... Tảng băng này sẽ nuốt chửng các ngươi.",
						"thai": "พวกเจ้าผู้ไร้ค่า... น้ำแข็งนี้จะกลืนกินพวกเจ้า",
						"hindi": "तुच्छ प्राणियों... यह बर्फ तुम्हें निगल जाएगी।"
					}
				},
				{
					"content": {
						"korean": "크윽... 이게 끝이 아니야... 반드시...!",
						"english": "Urgh... This isn't the end... I will...!",
						"japanese": "くっ... これが終わりじゃない... 必ず...！",
						"chinese": "呃... 这不是结束... 我一定会...！",
						"french": "Urgh... Ce n'est pas la fin... Je vais... !",
						"spanish": "Ugh... Este no es el final... ¡Lo haré...!",
						"vietnamese": "Khụ... Đây không phải là kết thúc... Nhất định là phải...!",
						"thai": "อึ่ก... นี่ไม่ใช่จุดจบ... ข้าจะต้อง...!",
						"hindi": "उफ़... यह अंत नहीं है... मैं निश्चित रूप से...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저항해야 합니다... 이대로 잊힐 순 없어요.",
						"english": "We must resist... we cannot be forgotten like this.",
						"japanese": "抵抗しなければなりません… このまま忘れられるわけにはいきません。",
						"chinese": "我们必须抵抗… 不能就这样被遗忘。",
						"french": "Nous devons résister... nous ne pouvons pas être oubliés ainsi.",
						"spanish": "Debemos resistir... no podemos ser olvidados así.",
						"vietnamese": "Chúng ta phải kháng cự... không thể bị lãng quên như thế này.",
						"thai": "เราต้องต่อต้าน... เราจะถูกลืมไปแบบนี้ไม่ได้",
						"hindi": "हमें विरोध करना होगा... हमें ऐसे भुलाया नहीं जा सकता।"
					}
				},
				{
					"content": {
						"korean": "구원을 가장한 거래는... 모든 것을 얼릴 것이다.",
						"english": "A bargain disguised as salvation... will freeze everything.",
						"japanese": "救済を装った取引は… 全てを凍らせるだろう。",
						"chinese": "以救赎为名的交易… 将会冻结一切。",
						"french": "Un marché déguisé en salut... gèlera tout.",
						"spanish": "Un trato disfrazado de salvación... lo congelará todo.",
						"vietnamese": "Giao dịch đội lốt cứu rỗi... sẽ đóng băng mọi thứ.",
						"thai": "ข้อตกลงที่ปลอมตัวเป็นการไถ่บาป... จะทำให้ทุกอย่างแข็งตัว",
						"hindi": "मुक्ति का भेस बदला हुआ सौदा... सब कुछ जमा देगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악... 겨우... 이딴... 필멸자들에게...",
						"english": "Aargh... To be... defeated... by mere mortals...",
						"japanese": "くあああ... まさか... こんな... 穢れた定命の者に...",
						"chinese": "啊啊啊... 竟被... 这种... 渺小的凡人...",
						"french": "Aaaargh... Être... vaincu... par de simples mortels...",
						"spanish": "¡Argh! ¿Derrotado... por... simples mortales...?",
						"vietnamese": "Khụ... làm sao... có thể... thua những phàm nhân thấp kém này...",
						"thai": "อ๊ากกก... แค่... มนุษย์... ฟานี่...",
						"hindi": "आआह... बस... इन... नश्वर प्राणियों से..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만... 계약은 이미... 시작되었다... 되돌릴 수 없다...",
						"english": "But... the pact has already... begun... it cannot be undone...",
						"japanese": "だが... 契約は既に... 始まっている... もう戻れない...",
						"chinese": "但是... 契约已经... 开始了... 无法挽回...",
						"french": "Mais... le pacte a déjà... commencé... il est irréversible...",
						"spanish": "Pero... el pacto ya ha... comenzado... no se puede deshacer...",
						"vietnamese": "Nhưng... khế ước đã... bắt đầu rồi... không thể quay lại...",
						"thai": "แต่... สัญญา... ได้เริ่มขึ้นแล้ว... ไม่อาจย้อนคืน...",
						"hindi": "परंतु... अनुबंध तो... पहले ही... शुरू हो चुका है... इसे बदला नहीं जा सकता..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스는 얼음 조각이 되어 스러졌다. 그러나 그 말은 메아리가 되어 맴돌았다.",
						"english": "The unknown boss shattered into ice fragments and vanished. But its words echoed on.",
						"japanese": "正体不明のボスは氷の破片となって消え去った。しかし、その言葉はこだまとなり響き渡った。",
						"chinese": "身份不明的boss化作冰屑消散。然而，它的话语却回荡不绝。",
						"french": "Le boss inconnu se brisa en fragments de glace et disparut. Mais ses mots résonnèrent en écho.",
						"spanish": "El jefe desconocido se hizo pedazos de hielo y desapareció. Pero sus palabras resonaron.",
						"vietnamese": "Con boss không rõ danh tính đã tan thành mảnh băng và biến mất. Nhưng những lời của nó vẫn vang vọng.",
						"thai": "บอสปริศนาสลายกลายเป็นเศษน้ำแข็งและหายไป แต่คำพูดของมันยังคงก้องกังวาน",
						"hindi": "अज्ञात बॉस बर्फ के टुकड़ों में बिखर कर नष्ट हो गया। परंतु उसके शब्द गूँजते रहे।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "계약은... 아직 끝나지 않았습니다. 이 얼음은... 더 큰 시작을 위한...",
						"english": "The pact... is not yet over. This ice... is for a greater beginning...",
						"japanese": "契約は... まだ終わっていない。この氷は... さらなる始まりのために...",
						"chinese": "契约... 尚未结束。这冰... 只是为了一个更大的开始...",
						"french": "Le pacte... n'est pas encore terminé. Cette glace... est pour un commencement plus grand...",
						"spanish": "El pacto... aún no ha terminado. Este hielo... es para un comienzo mayor...",
						"vietnamese": "Khế ước... vẫn chưa kết thúc. Tảng băng này... là để mở ra một khởi đầu lớn hơn...",
						"thai": "สัญญา... ยังไม่จบลง... น้ำแข็งนี้... คือจุดเริ่มต้นที่ยิ่งใหญ่กว่า...",
						"hindi": "अनुबंध... अभी समाप्त नहीं हुआ है। यह बर्फ... एक बड़ी शुरुआत के लिए है..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 끝까지 해독할 거야. 너의 계약을, 너의 저주를.",
						"english": "We will decipher it to the end. Your pact, your curse.",
						"japanese": "我々は最後まで解読する。お前の契約を、お前の呪いを。",
						"chinese": "我们会将其彻底解读。你的契约，你的诅咒。",
						"french": "Nous le déchiffrerons jusqu'au bout. Ton pacte, ta malédiction.",
						"spanish": "Lo descifraremos hasta el final. Tu pacto, tu maldición.",
						"vietnamese": "Chúng ta sẽ giải mã đến cùng. Khế ước của ngươi, lời nguyền của ngươi.",
						"thai": "เราจะคลี่คลายมันให้ถึงที่สุด สัญญาของเจ้า คำสาปของเจ้า",
						"hindi": "हम इसे अंत तक सुलझाएँगे। तुम्हारे अनुबंध को, तुम्हारे शाप को।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잊힌 계약의 진실은, 이 거대한 얼음 아래 깊이 잠들어 있었다.",
						"english": "The truth of the forgotten pact lay deep, slumbering beneath this colossal ice.",
						"japanese": "忘れ去られた契約の真実は、この巨大な氷の下深く眠っていた。",
						"chinese": "被遗忘契约的真相，深埋在这巨大的冰层之下沉睡着。",
						"french": "La vérité du pacte oublié dormait profondément sous cette glace colossale.",
						"spanish": "La verdad del pacto olvidado yacía profundamente dormida bajo este hielo colosal.",
						"vietnamese": "Sự thật về khế ước bị lãng quên đã ngủ sâu dưới tảng băng khổng lồ này.",
						"thai": "ความจริงของสัญญาที่ถูกลืมได้หลับใหลอยู่ลึกใต้ธารน้ำแข็งมหึมานี้",
						"hindi": "भूले हुए अनुबंध का सत्य, इस विशाल बर्फ के नीचे गहराई में सोया हुआ था।"
					}
				}
			]
		}
	]
} as const;
