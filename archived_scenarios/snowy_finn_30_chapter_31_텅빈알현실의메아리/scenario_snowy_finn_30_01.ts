export const scenario_snowy_finn_30_01 = {
	"scenario_id": "snowy_finn_30_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 알현실. 옥좌 하나만이 덩그러니 놓였다.",
						"english": "A grand ice audience chamber. Only a single throne stood isolated.",
						"japanese": "壮大な氷の謁見室。玉座が一つ、ぽつんと置かれていた。",
						"chinese": "宏伟的冰之觐见厅。只有一张王座孤零零地立着。",
						"french": "Une grande salle d'audience de glace. Un seul trône se dressait, isolé.",
						"spanish": "Una gran cámara de audiencia de hielo. Solo un trono se alzaba solitario.",
						"vietnamese": "Một đại sảnh băng giá. Chỉ có một ngai vàng đứng trơ trọi.",
						"thai": "ท้องพระโรงน้ำแข็งอันโอ่อ่า มีเพียงบัลลังก์เดียวตั้งอยู่โดดเดี่ยว",
						"hindi": "एक विशाल बर्फीला दरबार। केवल एक सिंहासन अकेला खड़ा था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 그 왕의 알현실?",
						"english": "Is this… the king's audience chamber?",
						"japanese": "ここが… あの王の謁見室？",
						"chinese": "这里是……那个国王的觐见厅？",
						"french": "C'est ici… la salle d'audience du roi ?",
						"spanish": "¿Es esta… la cámara de audiencia del rey?",
						"vietnamese": "Đây là… đại sảnh của vị vua đó sao?",
						"thai": "ที่นี่… คือท้องพระโรงของกษัตริย์องค์นั้นหรือ?",
						"hindi": "क्या यह… उस राजा का दरबार है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "조용하라! 나의 백성들이여, 호령에 응하라!",
						"english": "Silence! My people, answer my command!",
						"japanese": "静まれ！我が民よ、号令に応えよ！",
						"chinese": "安静！我的子民们，回应我的号令！",
						"french": "Silence ! Mes sujets, répondez à mon ordre !",
						"spanish": "¡Silencio! ¡Pueblo mío, responded a mi mandato!",
						"vietnamese": "Im lặng! Dân của ta, hãy đáp lại mệnh lệnh của ta!",
						"thai": "เงียบ! ประชากรของข้า จงตอบรับคำสั่งของข้า!",
						"hindi": "खामोश! मेरे लोगों, मेरे आदेश का जवाब दो!"
					}
				},
				{
					"content": {
						"korean": "…아무도 없는데?",
						"english": "...But there's no one here?",
						"japanese": "…誰もいないけど？",
						"chinese": "……可这里没人啊？",
						"french": "...Mais il n'y a personne ici ?",
						"spanish": "...¿Pero no hay nadie aquí?",
						"vietnamese": "…Nhưng không có ai ở đây cả?",
						"thai": "…แต่ไม่มีใครอยู่ที่นี่เลยเหรอ?",
						"hindi": "…लेकिन यहाँ कोई नहीं है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "메아리가 모든 것을 기록합니다. 텅 빈 공간의 크기를.",
						"english": "The echo records everything. The magnitude of the empty space.",
						"japanese": "木霊がすべてを記録します。空虚な空間の大きさを。",
						"chinese": "回音记录一切。这空荡空间之巨。",
						"french": "L'écho enregistre tout. L'ampleur de l'espace vide.",
						"spanish": "El eco lo registra todo. La magnitud del espacio vacío.",
						"vietnamese": "Tiếng vọng ghi lại mọi thứ. Sự rộng lớn của không gian trống rỗng.",
						"thai": "เสียงสะท้อนบันทึกทุกสิ่ง ขนาดของพื้นที่ว่างเปล่า",
						"hindi": "प्रतिध्वनि सब कुछ रिकॉर्ड करती है। खाली जगह की विशालता।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 알현실에 울리는 호령은 늘 같습니다.",
						"english": "The command echoing in this audience chamber is always the same.",
						"japanese": "この謁見室に響く号令は、いつも同じです。",
						"chinese": "在这觐见厅中回荡的号令，总是一成不变。",
						"french": "L'ordre qui résonne dans cette salle d'audience est toujours le même.",
						"spanish": "La orden que resuena en esta cámara de audiencia es siempre la misma.",
						"vietnamese": "Mệnh lệnh vang vọng trong đại sảnh này luôn luôn như vậy.",
						"thai": "พระบัญชาที่ดังก้องในท้องพระโรงนี้มักจะเหมือนเดิมเสมอ",
						"hindi": "इस दरबार में गूँजने वाला आदेश हमेशा एक जैसा होता है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 백성들도 항상 같아?",
						"english": "Are the common folk always the same, then?",
						"japanese": "では、民もいつも同じなのか？",
						"chinese": "那么，百姓们也总是一样吗？",
						"french": "Alors, les sujets sont-ils toujours les mêmes ?",
						"spanish": "¿Entonces la gente común siempre es la misma?",
						"vietnamese": "Vậy thì dân chúng cũng luôn như vậy sao?",
						"thai": "แล้วประชาชนก็เหมือนเดิมเสมอไปหรือ?",
						"hindi": "तो क्या लोग भी हमेशा वैसे ही रहते हैं?"
					}
				},
				{
					"content": {
						"korean": "네. 숫자에 변함이 없습니다.",
						"english": "Yes. Their numbers remain unchanged.",
						"japanese": "はい。数に変化はありません。",
						"chinese": "是的。数量没有变化。",
						"french": "Oui. Leur nombre ne change pas.",
						"spanish": "Sí. Sus números no han cambiado.",
						"vietnamese": "Vâng. Số lượng không thay đổi.",
						"thai": "ครับ/ค่ะ จำนวนไม่มีการเปลี่ยนแปลง",
						"hindi": "हाँ। उनकी संख्या में कोई बदलाव नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "경청하라! 나의 위엄을!",
						"english": "Listen! To my majesty!",
						"japanese": "聞け！我が威厳を！",
						"chinese": "听着！我的威严！",
						"french": "Écoutez ! Ma majesté !",
						"spanish": "¡Escuchad! ¡Mi majestad!",
						"vietnamese": "Nghe đây! Uy nghiêm của ta!",
						"thai": "จงฟัง! ความสง่างามของข้า!",
						"hindi": "सुनो! मेरी महिमा को!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 룬 문양은 왕의 혈통을 나타냅니다. 고대 왕국의 기록이죠.",
						"english": "This runic pattern signifies the royal lineage. A record of the ancient kingdom.",
						"japanese": "このルーン模様は王の血統を表しています。古代王国の記録ですね。",
						"chinese": "这个符文图案代表着王室血统。是古代王国的记录。",
						"french": "Ce motif runique représente la lignée royale. Un registre de l'ancien royaume.",
						"spanish": "Este patrón rúnico significa el linaje real. Un registro del antiguo reino.",
						"vietnamese": "Hoa văn rune này tượng trưng cho huyết thống hoàng gia. Một ghi chép của vương quốc cổ đại.",
						"thai": "ลายรูนนี้บ่งบอกถึงสายเลือดของกษัตริย์ บันทึกของอาณาจักรโบราณ",
						"hindi": "यह रुनिक पैटर्न शाही वंश को दर्शाता है। प्राचीन साम्राज्य का एक अभिलेख है यह।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "근데 왜 이렇게 텅 비어 있는 거야?",
						"english": "But why is it so empty?",
						"japanese": "でも、なぜこんなにも空っぽなんだ？",
						"chinese": "但为什么会如此空虚呢？",
						"french": "Mais pourquoi est-ce si vide ?",
						"spanish": "¿Pero por qué está tan vacío?",
						"vietnamese": "Nhưng tại sao nó lại trống rỗng thế này?",
						"thai": "แต่ทำไมมันถึงว่างเปล่าขนาดนี้?",
						"hindi": "लेकिन यह इतना खाली क्यों है?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "역사는 침묵합니다. 하지만 적막의 크기는… 거짓말하지 않습니다.",
						"english": "History is silent. But the magnitude of this silence... does not lie.",
						"japanese": "歴史は沈黙する。だが、この静寂の大きさは…嘘をつかない。",
						"chinese": "历史保持沉默。但这份寂静的规模…从不说谎。",
						"french": "L'histoire est muette. Mais l'ampleur de ce silence… ne ment pas.",
						"spanish": "La historia guarda silencio. Pero la magnitud de este vacío... no miente.",
						"vietnamese": "Lịch sử im lặng. Nhưng sự vắng lặng này… không biết nói dối.",
						"thai": "ประวัติศาสตร์เงียบงัน แต่ความเงียบเหงาที่กว้างใหญ่…ไม่โกหก",
						"hindi": "इतिहास मौन है। लेकिन इस खामोशी की हद… झूठ नहीं बोलती।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "호령이 잦아들 때마다 왕의 목소리가 잠시 작아지는 것을 기록했습니다.",
						"english": "It was recorded that the king's voice briefly softened whenever his commands ceased.",
						"japanese": "号令が止むたびに、王の声が一時的に小さくなることを記録しました。",
						"chinese": "每次号令停止时，国王的声音都会短暂地变小，这一点被记录了下来。",
						"french": "Il fut enregistré que la voix du roi s'adoucissait brièvement chaque fois que ses commandements cessaient.",
						"spanish": "Se registró que la voz del rey se suavizaba brevemente cada vez que cesaban sus órdenes.",
						"vietnamese": "Có ghi chép rằng giọng nói của nhà vua nhỏ lại trong chốc lát mỗi khi lệnh truyền dừng lại.",
						"thai": "มีบันทึกว่าเสียงของกษัตริย์จะอ่อนลงชั่วครู่เมื่อคำสั่งของพระองค์หยุดลง",
						"hindi": "यह दर्ज किया गया कि जब भी राजा के आदेश रुकते थे, तो उनकी आवाज़ क्षण भर के लिए धीमी हो जाती थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…그냥 외로운 건가.",
						"english": "...Is he just lonely?",
						"japanese": "…ただ、寂しいだけなのか。",
						"chinese": "……他只是寂寞吗？",
						"french": "...Est-il simplement seul ?",
						"spanish": "...¿Está simplemente solo?",
						"vietnamese": "...Chỉ là cô đơn thôi sao?",
						"thai": "...แค่เหงาหรือเปล่า?",
						"hindi": "...क्या वह बस अकेला है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "고독은 왕의 숙명! 그대들, 나의 위엄을 거역하려 하는가!",
						"english": "Solitude is a king's destiny! Do you defy my majesty?!",
						"japanese": "孤独は王の宿命！貴様ら、我が威厳に逆らうというのか！",
						"chinese": "孤独是王的宿命！你们，竟敢违抗我的威严？！",
						"french": "La solitude est le destin du roi ! Osez-vous défier ma majesté ?!",
						"spanish": "¡La soledad es el destino del rey! ¡¿Osáis desafiar mi majestad?!",
						"vietnamese": "Cô đơn là số phận của vương giả! Các ngươi, dám chống lại uy nghiêm của ta sao?!",
						"thai": "ความโดดเดี่ยวคือโชคชะตาของกษัตริย์! พวกเจ้าบังอาจท้าทายความสง่างามของข้าหรือ?!",
						"hindi": "अकेलापन राजा का भाग्य है! क्या तुम मेरी महिमा का अनादर करने की कोशिश कर रहे हो?!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "위엄 뒤에 가려진 외로움의 무게를 기록합니다.",
						"english": "Recording the weight of loneliness hidden behind majesty.",
						"japanese": "威厳の裏に隠された孤独の重さを記録する。",
						"chinese": "记录下隐藏在威严背后孤独的重量。",
						"french": "Enregistrement du poids de la solitude cachée derrière la majesté.",
						"spanish": "Registrando el peso de la soledad oculta tras la majestad.",
						"vietnamese": "Ghi lại sức nặng của nỗi cô đơn ẩn sau sự uy nghiêm.",
						"thai": "บันทึกน้ำหนักของความเหงาที่ซ่อนอยู่เบื้องหลังความสง่างาม",
						"hindi": "महिमा के पीछे छिपी अकेलेपन के बोझ को दर्ज करते हैं।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "알현실 가장 깊은 곳, 왕의 옥좌만이 홀로 빛났다.",
						"english": "In the deepest part of the audience chamber, only the king's throne shone alone.",
						"japanese": "玉座の間最奥、王の玉座だけが孤高に輝いていた。",
						"chinese": "接见室最深处，只有国王的宝座独自闪耀。",
						"french": "Au plus profond de la salle d'audience, seul le trône du roi brillait solitairement.",
						"spanish": "En lo más profundo de la sala de audiencias, solo el trono del rey brillaba solitario.",
						"vietnamese": "Sâu nhất trong đại sảnh, chỉ ngai vàng của nhà vua tỏa sáng cô độc.",
						"thai": "ลึกที่สุดในท้องพระโรง มีเพียงบัลลังก์ของราชาที่ส่องประกายโดดเดี่ยว",
						"hindi": "सभागार के सबसे गहरे स्थान पर, केवल राजा का सिंहासन अकेला चमक रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 나의 성역을 침범하려 하다니! 분노를 느껴라!",
						"english": "How dare you trespass upon my sanctuary! Feel my wrath!",
						"japanese": "よくも我が聖域を侵さんと！ 我が怒りを知れ！",
						"chinese": "竟敢侵犯我的圣域！感受我的愤怒吧！",
						"french": "Comment osez-vous profaner mon sanctuaire ! Ressentez ma fureur !",
						"spanish": "¡Cómo osas invadir mi santuario! ¡Siente mi ira!",
						"vietnamese": "Ngươi dám xâm phạm thánh địa của ta sao! Hãy cảm nhận cơn thịnh nộ của ta!",
						"thai": "บังอาจนักที่บุกรุกแดนศักดิ์สิทธิ์ของข้า! จงรับรู้ถึงความพิโรธของข้า!",
						"hindi": "तुमने मेरे पवित्र स्थान का उल्लंघन करने की हिम्मत कैसे की! मेरा क्रोध महसूस करो!"
					}
				},
				{
					"content": {
						"korean": "당신의 적막은… 우리가 멈출 거야.",
						"english": "Your silence... we will end it.",
						"japanese": "あなたの静寂は… 我々が止める。",
						"chinese": "你的寂静… 我们将终结。",
						"french": "Ton silence... nous y mettrons fin.",
						"spanish": "Tu silencio... lo detendremos.",
						"vietnamese": "Sự cô tịch của ngài… chúng tôi sẽ chấm dứt.",
						"thai": "ความเงียบเหงาของเจ้า... พวกเราจะหยุดมันเอง",
						"hindi": "तुम्हारा सन्नाटा... हम इसे रोकेंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이 전투도 기록됩니다. 잊힌 역사의 한 페이지로.",
						"english": "This battle, too, will be recorded. As a page in forgotten history.",
						"japanese": "この戦いもまた記録される。忘れ去られた歴史の一頁として。",
						"chinese": "这场战斗也将被记录。作为被遗忘历史的一页。",
						"french": "Cette bataille aussi sera consignée. Comme une page d'histoire oubliée.",
						"spanish": "Esta batalla también será registrada. Como una página de la historia olvidada.",
						"vietnamese": "Trận chiến này cũng sẽ được ghi lại. Như một trang sử bị lãng quên.",
						"thai": "การต่อสู้ครั้งนี้ก็จะถูกบันทึกไว้เช่นกัน ในฐานะหน้าหนึ่งของประวัติศาสตร์ที่ถูกลืม",
						"hindi": "यह लड़ाई भी दर्ज की जाएगी। भूले हुए इतिहास के एक पृष्ठ के रूप में।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 알현실은 다시 적막에 잠겼다.",
						"english": "The ice audience chamber fell into silence once more.",
						"japanese": "氷の玉座の間は再び静寂に包まれた。",
						"chinese": "冰冷的接见室再次陷入寂静。",
						"french": "La salle d'audience de glace retomba dans le silence.",
						"spanish": "La sala de audiencias helada volvió a sumergirse en el silencio.",
						"vietnamese": "Đại sảnh băng giá lại chìm vào sự cô tịch.",
						"thai": "ท้องพระโรงน้ำแข็งกลับเข้าสู่ความเงียบสงัดอีกครั้ง",
						"hindi": "बर्फ से ढका सभागार एक बार फिर सन्नाटे में डूब गया।"
					}
				},
				{
					"content": {
						"korean": "나의 위엄은… 영원하다. 감히 거역하려 하는가?",
						"english": "My majesty... is eternal. Do you dare defy me?",
						"japanese": "我が威厳は… 永遠なり。よくも逆らおうと？",
						"chinese": "我的威严… 永恒不朽。竟敢反抗我？",
						"french": "Ma majesté... est éternelle. Osez-vous me défier ?",
						"spanish": "Mi majestad... es eterna. ¿Osas desafiarme?",
						"vietnamese": "Uy nghiêm của ta… là vĩnh cửu. Ngươi dám chống đối ta sao?",
						"thai": "ความยิ่งใหญ่ของข้า... เป็นนิรันดร์ เจ้ากล้าที่จะขัดขืนหรือ?",
						"hindi": "मेरी महिमा... शाश्वत है। क्या तुम मुझे चुनौती देने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ… 終わってない。",
						"chinese": "还没… 结束。",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง… ไม่จบ",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나의 호령은… 영원히 메아리칠 것이다….",
						"english": "My command... shall echo forever...",
						"japanese": "我が号令は… 永遠に響き渡るだろう…。",
						"chinese": "我的号令… 将永远回响…。",
						"french": "Mon commandement... résonnera à jamais...",
						"spanish": "Mi voz de mando... resonará por siempre...",
						"vietnamese": "Mệnh lệnh của ta… sẽ vang vọng mãi mãi…",
						"thai": "คำบัญชาของข้า... จะก้องกังวานไปชั่วนิรันดร์...",
						"hindi": "मेरा आदेश... हमेशा के लिए गूंजेगा..."
					}
				},
				{
					"content": {
						"korean": "이제, 이 적막은 끝났어.",
						"english": "Now, this silence is over.",
						"japanese": "さあ、この静寂は終わった。",
						"chinese": "现在，这份寂静结束了。",
						"french": "Maintenant, ce silence est terminé.",
						"spanish": "Ahora, este silencio ha terminado.",
						"vietnamese": "Giờ đây, sự cô tịch này đã chấm dứt.",
						"thai": "บัดนี้ ความเงียบสงัดนี้ได้สิ้นสุดลงแล้ว",
						"hindi": "अब, यह सन्नाटा खत्म हो गया है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "기록되었습니다. 왕의 외로움과 그 끝이.",
						"english": "It is recorded. The king's loneliness, and its end.",
						"japanese": "記録された。王の孤独とその終わりが。",
						"chinese": "已被记录。国王的孤独及其终结。",
						"french": "C'est enregistré. La solitude du roi et sa fin.",
						"spanish": "Ha sido registrado. La soledad del rey y su fin.",
						"vietnamese": "Đã được ghi lại. Sự cô độc của nhà vua và điểm kết của nó.",
						"thai": "ถูกบันทึกไว้แล้ว ความโดดเดี่ยวของราชาและจุดจบของมัน",
						"hindi": "यह दर्ज हो चुका है। राजा का अकेलापन और उसका अंत।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왕의 호령은 멎었지만, 또 다른 목소리가 탐험대를 부르고 있었다.",
						"english": "The king's command ceased, but another voice was calling the expedition team.",
						"japanese": "王の号令は止んだが、別の声が探検隊を呼んでいた。",
						"chinese": "国王的号令停止了，但另一个声音正在呼唤探险队。",
						"french": "Le commandement du roi cessa, mais une autre voix appelait l'équipe d'expédition.",
						"spanish": "La voz de mando del rey cesó, pero otra voz llamaba al equipo de expedición.",
						"vietnamese": "Mệnh lệnh của nhà vua đã ngừng lại, nhưng một giọng nói khác đang gọi đoàn thám hiểm.",
						"thai": "พระบัญชาของราชาสิ้นสุดลงแล้ว แต่ยังมีอีกเสียงหนึ่งที่เรียกหน่วยสำรวจ",
						"hindi": "राजा का आदेश थम गया, लेकिन एक और आवाज़ अभियान दल को बुला रही थी।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"거대한 얼음 알현실, 옥좌는 텅 비어 있었다.",
			"왕의 호령이 울려 퍼졌지만, 돌아오는 건 차가운 메아리뿐.",
			"작은 펭귄 몇 마리만이 구석에서 종종거렸다.",
			"위엄 뒤에 숨겨진 적막의 크기. 에이라는 그걸 기록하려 했다."
		],
		"english": [
			"The grand ice audience chamber, the throne stood empty.",
			"The king's command echoed, but only a cold reverberation returned.",
			"Only a few small penguins scurried in the corner.",
			"The magnitude of silence hidden behind majesty. Aira tried to record it."
		],
		"japanese": [
			"壮大な氷の謁見室、玉座は空だった。",
			"王の号令が響き渡ったが、返ってくるのは冷たい木霊だけ。",
			"隅では数匹の小さなペンギンがちょこまかと動いていた。",
			"威厳の裏に隠された静寂の大きさ。アイラはそれを記録しようとした。"
		],
		"chinese": [
			"宏伟的冰之觐见厅，王座空无一人。",
			"国王的号令响彻，回应的却只有冰冷的回音。",
			"只有几只小企鹅在角落里踱步。",
			"威严背后隐藏的寂静之巨。艾拉试图记录下这一切。"
		],
		"french": [
			"La grande salle d'audience de glace, le trône était vide.",
			"L'ordre du roi résonna, mais seul un écho froid revint.",
			"Seuls quelques petits pingouins se bousculaient dans un coin.",
			"L'ampleur du silence caché derrière la majesté. Aira tenta de l'enregistrer."
		],
		"spanish": [
			"La gran cámara de audiencia de hielo, el trono estaba vacío.",
			"La orden del rey resonó, pero solo un frío eco regresó.",
			"Solo unos pocos pequeños pingüinos correteaban por la esquina.",
			"La magnitud del silencio oculto tras la majestad. Aira intentó registrarlo."
		],
		"vietnamese": [
			"Đại sảnh băng giá, ngai vàng trống rỗng.",
			"Mệnh lệnh của vua vang vọng, nhưng chỉ có tiếng vọng lạnh lẽo trở lại.",
			"Chỉ vài chú chim cánh cụt nhỏ chạy loăng quăng trong góc.",
			"Sự vĩ đại của tĩnh lặng ẩn sau vẻ uy nghiêm. Aira đã cố gắng ghi lại điều đó."
		],
		"thai": [
			"ท้องพระโรงน้ำแข็งอันโอ่อ่า บัลลังก์ว่างเปล่า",
			"พระบัญชาของกษัตริย์ดังก้อง แต่มีเพียงเสียงสะท้อนอันเยือกเย็นกลับมา",
			"มีเพียงนกเพนกวินตัวเล็กๆ ไม่กี่ตัววิ่งวุ่นอยู่ที่มุมห้อง",
			"ความเงียบงันอันยิ่งใหญ่ที่ซ่อนอยู่เบื้องหลังความสง่างาม ไอระพยายามจะบันทึกมันไว้"
		],
		"hindi": [
			"विशाल बर्फीला दरबार, सिंहासन खाली था।",
			"राजा का आदेश गूँजा, लेकिन केवल एक ठंडी प्रतिध्वनि लौटी।",
			"कुछ छोटे पेंग्विन ही कोने में दौड़ रहे थे।",
			"गरिमा के पीछे छिपी खामोशी का विस्तार। ऐरा ने उसे रिकॉर्ड करने की कोशिश की।"
		]
	}
} as const;
