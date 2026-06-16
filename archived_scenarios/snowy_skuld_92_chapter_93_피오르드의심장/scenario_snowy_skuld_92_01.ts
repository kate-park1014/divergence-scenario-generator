export const scenario_snowy_skuld_92_01 = {
	"scenario_id": "snowy_skuld_92_01",
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
	"prologue": {
		"korean": [
			"빙하 속 척후선, 스쿌드. 그 비극의 기록.",
			"선체에 새겨진 모든 룬이, 이제 마지막 한 줄을 남겼다.",
			"고대의 맹세는, 어떤 진실을 품고 있는가?",
			"에이라가, 비극의 끝자락에서 그 이름을 기록하려 한다."
		],
		"english": [
			"Skjold, the scout ship in the glacier. A record of its tragedy.",
			"All runes etched on the hull now have but one line left.",
			"What truth does the ancient oath hold?",
			"Eira, at the precipice of tragedy, seeks to record its name."
		],
		"japanese": [
			"氷河の中の斥候船、スキョルド。その悲劇の記録。",
			"船体に刻まれたすべてのルーンが、今や最後の一行を残すのみ。",
			"古代の誓いは、どんな真実を秘めているのか？",
			"エイラは、悲劇の淵でその名を記録しようとする。"
		],
		"chinese": [
			"冰川中的侦察船，斯乔尔德。那场悲剧的记录。",
			"船体上刻的所有符文，如今只剩下了最后一行。",
			"古老的誓言，究竟隐藏着怎样的真相？",
			"艾拉，在悲剧的尽头，试图记录下它的名字。"
		],
		"french": [
			"Skjold, le vaisseau éclaireur dans le glacier. Le récit de sa tragédie.",
			"Toutes les runes gravées sur la coque, il ne reste plus qu'une ligne.",
			"Quelle vérité le serment ancestral renferme-t-il ?",
			"Eira, au bord de la tragédie, s'apprête à en graver le nom."
		],
		"spanish": [
			"Skjold, la nave exploradora en el glaciar. El registro de su tragedia.",
			"Todas las runas grabadas en el casco, ahora solo queda una línea.",
			"¿Qué verdad encierra el antiguo juramento?",
			"Eira, al borde de la tragedia, busca registrar su nombre."
		],
		"vietnamese": [
			"Skjold, tàu trinh sát trong sông băng. Ghi chép về bi kịch đó.",
			"Tất cả các rune khắc trên thân tàu, giờ chỉ còn một dòng cuối cùng.",
			"Lời thề cổ xưa nắm giữ sự thật nào?",
			"Eira, ở ranh giới của bi kịch, cố gắng ghi lại cái tên đó."
		],
		"thai": [
			"Skjold, เรือลาดตระเวนในธารน้ำแข็ง บันทึกโศกนาฏกรรมของมัน",
			"รูนทั้งหมดที่สลักบนตัวเรือ ตอนนี้เหลือเพียงบรรทัดสุดท้าย",
			"คำสาบานโบราณนี้ซ่อนความจริงใดไว้?",
			"ไอรา ณ ปลายขอบของโศกนาฏกรรม กำลังจะบันทึกชื่อนั้น"
		],
		"hindi": [
			"ग्लेशियर में टोही जहाज, स्कजोल्ड। उस त्रासदी का एक रिकॉर्ड।",
			"हल पर खुदी हुई सभी रूनों में अब केवल एक पंक्ति बची है।",
			"प्राचीन शपथ में कौन सी सच्चाई छिपी है?",
			"एरा, त्रासदी के कगार पर, उसका नाम दर्ज करने की कोशिश कर रही है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "척후선의 심장부, 모든 룬이 모이는 곳이다.",
						"english": "The scout ship's heart, where all runes converge.",
						"japanese": "斥候船の心臓部、すべてのルーンが集まる場所だ。",
						"chinese": "侦察船的心脏，所有符文汇聚之地。",
						"french": "Le cœur du vaisseau éclaireur, là où toutes les runes convergent.",
						"spanish": "El corazón de la nave exploradora, donde todas las runas convergen.",
						"vietnamese": "Trái tim của tàu trinh sát, nơi tất cả các rune hội tụ.",
						"thai": "ใจกลางของเรือลาดตระเวน ที่ที่รูนทั้งหมดมารวมกัน",
						"hindi": "टोही जहाज का दिल, जहाँ सभी रुनें मिलती हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기였어. 모든 룬이 여기로 흘러들어.",
						"english": "It was here. All runes flow into this place.",
						"japanese": "ここだった。すべてのルーンがここに流れ込む。",
						"chinese": "就是这里。所有符文都汇聚于此。",
						"french": "C'était ici. Toutes les runes affluent ici.",
						"spanish": "Fue aquí. Todas las runas fluyen hacia aquí.",
						"vietnamese": "Ở đây rồi. Tất cả các rune đều chảy vào đây.",
						"thai": "ที่นี่เอง รูนทั้งหมดไหลมารวมกันที่นี่",
						"hindi": "यह यहीं था। सभी रुनें इसी स्थान पर बहती हैं।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…드디어. 이 흐름. 마지막 한 줄이 비어 있어.",
						"english": "...Finally. This flow. The last line is empty.",
						"japanese": "…ついに。この流れ。最後の一行が空いている。",
						"chinese": "……终于。这股流。最后一行是空的。",
						"french": "...Enfin. Ce flux. La dernière ligne est vide.",
						"spanish": "...Por fin. Este flujo. La última línea está vacía.",
						"vietnamese": "...Cuối cùng thì. Dòng chảy này. Dòng cuối cùng bị trống.",
						"thai": "...ในที่สุด กระแสนี้ บรรทัดสุดท้ายว่างเปล่า",
						"hindi": "...आखिरकार। यह प्रवाह। आखिरी पंक्ति खाली है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마지막 한 줄?",
						"english": "The last line?",
						"japanese": "最後の一行？",
						"chinese": "最后一行？",
						"french": "La dernière ligne ?",
						"spanish": "¿La última línea?",
						"vietnamese": "Dòng cuối cùng?",
						"thai": "บรรทัดสุดท้าย?",
						"hindi": "आखिरी पंक्ति?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이것만 해독하면, 스쿌드의 진실이… 모두 드러나.",
						"english": "Decipher this, and Skjold's truth... will all be revealed.",
						"japanese": "これを解読すれば、スキョルドの真実が…すべて明らかになる。",
						"chinese": "只要解读这个，斯乔尔德的真相…就会全部揭露。",
						"french": "Une fois ceci déchiffré, la vérité de Skjold... sera entièrement révélée.",
						"spanish": "Si desciframos esto, la verdad de Skjold... se revelará por completo.",
						"vietnamese": "Giải mã cái này, sự thật về Skjold... sẽ được tiết lộ hoàn toàn.",
						"thai": "ถอดรหัสสิ่งนี้ แล้วความจริงของ Skjold... จะถูกเปิดเผยทั้งหมด",
						"hindi": "बस इसे समझ लो, और स्कजोल्ड की सच्चाई... सब सामने आ जाएगी।"
					}
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
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 룬은… 맹세에 대한 기록이야. 하지만 뒤가 잘려 있어.",
						"english": "This rune... is a record of an oath. But the end is cut off.",
						"japanese": "このルーンは…誓いについての記録だ。だが、後ろが途切れている。",
						"chinese": "这个符文……是关于誓言的记录。但后面被截断了。",
						"french": "Cette rune... est un enregistrement d'un serment. Mais la fin est coupée.",
						"spanish": "Esta runa... es un registro de un juramento. Pero el final está cortado.",
						"vietnamese": "Rune này... là ghi chép về một lời thề. Nhưng phần sau bị cắt mất.",
						"thai": "รูนนี้... เป็นบันทึกเกี่ยวกับคำสาบาน แต่ส่วนท้ายขาดหายไป",
						"hindi": "यह रुन... एक शपथ का रिकॉर्ड है। लेकिन अंत कटा हुआ है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가 지운 건가?",
						"english": "Did someone erase it?",
						"japanese": "誰かが消したのか？",
						"chinese": "是有人擦掉了吗？",
						"french": "Quelqu'un l'a effacé ?",
						"spanish": "¿Alguien lo borró?",
						"vietnamese": "Ai đó đã xóa nó sao?",
						"thai": "มีใครลบมันไปหรือเปล่า?",
						"hindi": "क्या किसी ने इसे मिटा दिया था?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니. 비워둔 거야. 일부러. 진실이 드러날 날을 기다린 것처럼.",
						"english": "No. It was left empty. On purpose. As if waiting for the day the truth would be revealed.",
						"japanese": "いや、わざと空けておいたんだ。真実が明かされる日を待っていたかのように。",
						"chinese": "不。是故意空着的。仿佛在等待真相大白的那一天。",
						"french": "Non. C'était laissé vide. Exprès. Comme si on attendait le jour où la vérité éclaterait.",
						"spanish": "No. Lo dejaron vacío. A propósito. Como si esperara el día en que la verdad saliera a la luz.",
						"vietnamese": "Không. Nó đã bị bỏ trống. Cố ý. Như thể đang chờ đợi ngày sự thật được tiết lộ.",
						"thai": "ไม่สิ มันถูกปล่อยว่างไว้ต่างหาก จงใจด้วย ราวกับรอคอยวันที่ความจริงจะถูกเปิดเผย",
						"hindi": "नहीं। इसे जानबूझकर खाली छोड़ दिया गया था। मानो सच के सामने आने का इंतज़ार कर रहा हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 룬의 빛을 가린다.",
						"english": "A colossal shadow obscures the rune's light.",
						"japanese": "巨大な影がルーンの光を覆う。",
						"chinese": "巨大的阴影遮蔽了符文的光芒。",
						"french": "Une ombre colossale obscurcit la lumière de la rune.",
						"spanish": "Una sombra colosal oculta la luz de la runa.",
						"vietnamese": "Một bóng tối khổng lồ che khuất ánh sáng của rune.",
						"thai": "เงาขนาดมหึมาบดบังแสงของรูน",
						"hindi": "एक विशालकाय छाया रन की रोशनी को ढक लेती है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 룬은 고통을 말하고 있어. 비극적인 끝을 암시하는데…",
						"english": "This rune speaks of pain. It hints at a tragic end...",
						"japanese": "このルーンは苦痛を語っている。悲劇的な結末を暗示しているが…",
						"chinese": "这符文在诉说痛苦。它暗示着一个悲剧性的结局……",
						"french": "Cette rune parle de douleur. Elle suggère une fin tragique…",
						"spanish": "Esta runa habla de dolor. Insina un final trágico…",
						"vietnamese": "Rune này đang nói về nỗi đau. Nó ám chỉ một kết cục bi thảm…",
						"thai": "รูนนี้กำลังพูดถึงความเจ็บปวด มันบอกใบ้ถึงจุดจบอันน่าเศร้า…",
						"hindi": "यह रन दर्द की बात कर रहा है। यह एक दुखद अंत का संकेत दे रहा है…"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누구의 고통이지?",
						"english": "Whose pain is it?",
						"japanese": "誰の苦痛だ？",
						"chinese": "是谁的痛苦？",
						"french": "La douleur de qui ?",
						"spanish": "¿De quién es el dolor?",
						"vietnamese": "Nỗi đau của ai?",
						"thai": "ความเจ็บปวดของใครกัน?",
						"hindi": "यह किसका दर्द है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아직은… 불분명해. 하지만 이 룬은 경고하고 있어. 맹세를 깨지 말라고.",
						"english": "It's still... unclear. But this rune warns. Do not break the oath.",
						"japanese": "まだ…不明だ。だが、このルーンは警告している。誓いを破るなと。",
						"chinese": "暂时…还不清楚。但这个符文在警告。不要打破誓言。",
						"french": "C'est encore… flou. Mais cette rune avertit. Ne brisez pas le serment.",
						"spanish": "Todavía… no está claro. Pero esta runa advierte. No rompas el juramento.",
						"vietnamese": "Vẫn còn… chưa rõ. Nhưng rune này đang cảnh báo. Đừng phá vỡ lời thề.",
						"thai": "ยัง…ไม่ชัดเจน แต่รูนนี้กำลังเตือน ห้ามบิดพริ้วคำสาบาน",
						"hindi": "अभी भी… अस्पष्ट है। लेकिन यह रन चेतावनी दे रहा है। शपथ मत तोड़ो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 그 진실은 너희가 감당할 수 없다.",
						"english": "Insignificant beings. You cannot bear that truth.",
						"japanese": "くだらぬ者たちめ。その真実はお前たちには耐えられぬ。",
						"chinese": "微不足道的家伙们。那个真相你们承受不起。",
						"french": "Êtres insignifiants. Vous ne pouvez pas supporter cette vérité.",
						"spanish": "Seres insignificantes. Esa verdad no podéis soportarla.",
						"vietnamese": "Những kẻ tầm thường. Các ngươi không thể chịu đựng được sự thật đó.",
						"thai": "เจ้าพวกไร้ค่า ความจริงนั้นพวกเจ้าไม่อาจทานทนได้",
						"hindi": "तुच्छ प्राणी। तुम उस सच को सहन नहीं कर सकते।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네가 뭘 안다고!",
						"english": "Shut up! What do you know!",
						"japanese": "黙れ！お前に何が分かる！",
						"chinese": "闭嘴！你懂什么！",
						"french": "Tais-toi ! Qu'est-ce que tu en sais !",
						"spanish": "¡Cállate! ¡Tú qué sabes!",
						"vietnamese": "Im đi! Ngươi biết cái gì mà nói!",
						"thai": "หุบปาก! แกจะไปรู้อะไร!",
						"hindi": "चुप रहो! तुम क्या जानते हो!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "더 깊어져. 룬의 흐름이 불안정해지고 있어.",
						"english": "It's getting deeper. The flow of the runes is becoming unstable.",
						"japanese": "もっと深まる。ルーンの流れが不安定になっている。",
						"chinese": "更深了。符文的流动变得不稳定。",
						"french": "Ça s'approfondit. Le flux des runes devient instable.",
						"spanish": "Se hace más profundo. El flujo de las runas se está volviendo inestable.",
						"vietnamese": "Nó sâu hơn rồi. Dòng chảy của các rune đang trở nên bất ổn.",
						"thai": "ลึกขึ้นไปอีก การไหลของรูนเริ่มไม่เสถียร",
						"hindi": "यह गहरा होता जा रहा है। रन का प्रवाह अस्थिर होता जा रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What does that mean?",
						"japanese": "どういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Nó có nghĩa là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "마지막 진실은… 감당하기 힘들다는 뜻일지도 몰라.",
						"english": "The final truth... might be too much to bear.",
						"japanese": "最後の真実は…耐え難いものかもしれない。",
						"chinese": "最终的真相…也许难以承受。",
						"french": "La vérité finale… pourrait être insupportable.",
						"spanish": "La verdad final… podría ser demasiado difícil de soportar.",
						"vietnamese": "Sự thật cuối cùng… có lẽ quá sức chịu đựng.",
						"thai": "ความจริงสุดท้าย… อาจจะยากเกินกว่าจะรับไหว",
						"hindi": "अंतिम सत्य… शायद सहना मुश्किल हो।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더는 못 간다. 진실은 봉인되어야 해.",
						"english": "No further. The truth must remain sealed.",
						"japanese": "もうこれ以上は行けない。真実は封印されなければならない。",
						"chinese": "止步于此。真相必须被封印。",
						"french": "Pas plus loin. La vérité doit rester scellée.",
						"spanish": "No más. La verdad debe permanecer sellada.",
						"vietnamese": "Không thể đi tiếp. Sự thật phải được phong ấn.",
						"thai": "ไปต่อไม่ได้แล้ว ความจริงต้องถูกผนึกไว้",
						"hindi": "अब और नहीं। सच को बंद रहना होगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리는 멈추지 않아!",
						"english": "We won't stop!",
						"japanese": "我々は止まらない！",
						"chinese": "我们不会停下！",
						"french": "Nous ne nous arrêterons pas !",
						"spanish": "¡No nos detendremos!",
						"vietnamese": "Chúng ta sẽ không dừng lại!",
						"thai": "เราจะไม่หยุด!",
						"hindi": "हम रुकेंगे नहीं!"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 룬은… 끝내… 너희를… 파멸로… 이끌 것이다…",
						"english": "Urgh... The runes... will ultimately... lead you... to ruin...",
						"japanese": "くっ…ルーンは…結局…貴様らを…破滅へと…導くだろう…",
						"chinese": "呃…符文…终将…引领你们…走向毁灭…",
						"french": "Ugh… Les runes… finiront par… vous mener… à la ruine…",
						"spanish": "Ugh… Las runas… finalmente… os llevarán… a la ruina…",
						"vietnamese": "Khụ… Các ấn chú… cuối cùng… sẽ dẫn các ngươi… đến diệt vong…",
						"thai": "อึก… รูน… ในที่สุด… ก็จะ… นำพาพวกเจ้า… ไปสู่… ความพินาศ…",
						"hindi": "उफ़… रुन… अंततः… तुम्हें… विनाश की ओर… ले जाएगा…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝났어….",
						"english": "It's over...",
						"japanese": "終わった…。",
						"chinese": "结束了…。",
						"french": "C'est fini…",
						"spanish": "Se acabó…",
						"vietnamese": "Xong rồi…",
						"thai": "จบแล้ว…",
						"hindi": "खत्म हो गया…"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "마지막 룬이 빛나고 있어. 이제… 정말 마지막 한 줄이야.",
						"english": "The final rune is glowing. Now… truly, the very last line.",
						"japanese": "最後のルーンが輝いている。もう…本当に最後のひとかけらだ。",
						"chinese": "最后一道符文正在发光。现在…这真的是最后一行了。",
						"french": "La dernière rune est lumineuse. Maintenant… c'est vraiment la toute dernière ligne.",
						"spanish": "La última runa está brillando. Ahora… es realmente la última línea.",
						"vietnamese": "Ấn chú cuối cùng đang phát sáng. Bây giờ… thật sự là dòng cuối cùng rồi.",
						"thai": "รูนสุดท้ายกำลังเรืองแสง ตอนนี้… มันคือบรรทัดสุดท้ายจริงๆ แล้ว",
						"hindi": "अंतिम रुन चमक रहा है। अब… सच में, यह आखिरी पंक्ति है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적의 잔해가 사라지고, 에이라가 마지막 룬 앞에 선다. 모든 진실이 드러나기 직전이다.",
						"english": "The remnants of the unknown foe vanish. Aira stands before the final rune. All truth is about to be revealed.",
						"japanese": "正体不明の敵の残骸が消え、エイラが最後のルーンの前に立つ。すべての真実が明らかになる直前だ。",
						"chinese": "未知敌人的残骸消失了，艾拉站在了最后一枚符文前。所有真相即将揭晓。",
						"french": "Les vestiges de l'ennemi inconnu disparaissent. Aira se tient devant la dernière rune. Toute la vérité est sur le point d'être révélée.",
						"spanish": "Los restos del enemigo desconocido se desvanecen. Aira se para frente a la última runa. Toda la verdad está a punto de ser revelada.",
						"vietnamese": "Tàn dư của kẻ thù vô danh biến mất, Aira đứng trước rune cuối cùng. Mọi sự thật sắp được hé lộ.",
						"thai": "ซากศพของศัตรูที่ไม่รู้จักหายไป เอย์ร่ายืนอยู่หน้าอักขระสุดท้าย ความจริงทั้งหมดกำลังจะถูกเปิดเผย",
						"hindi": "अज्ञात शत्रु के अवशेष गायब हो जाते हैं, ऐरा अंतिम रन के सामने खड़ी है। सारी सच्चाई सामने आने ही वाली है।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 자의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of an unknown entity consumed everything.",
						"japanese": "正体不明の者の影がすべてを飲み込んだ。",
						"chinese": "未知之人的阴影吞噬了一切。",
						"french": "L'ombre d'une entité inconnue a tout englouti.",
						"spanish": "La sombra de un ser desconocido lo consumió todo.",
						"vietnamese": "Bóng tối của một thực thể vô danh đã nuốt chửng mọi thứ.",
						"thai": "เงาของสิ่งลึกลับได้กลืนกินทุกสิ่ง",
						"hindi": "एक अज्ञात सत्ता की छाया ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 진실은 너무 무겁다.",
						"english": "Fools. The truth is too heavy.",
						"japanese": "愚か者め。真実はあまりにも重い。",
						"chinese": "愚蠢的东西。真相太沉重了。",
						"french": "Imbéciles. La vérité est trop lourde.",
						"spanish": "Necios. La verdad es demasiado pesada.",
						"vietnamese": "Những kẻ ngu ngốc. Sự thật quá nặng nề.",
						"thai": "เจ้าพวกโง่เขลา ความจริงนั้นหนักอึ้งเกินไป",
						"hindi": "मूर्खों। सच बहुत भारी है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 반드시 해독할 거야!",
						"english": "It's not over yet. I will surely decipher it!",
						"japanese": "まだ終わってない。必ず解読してやる！",
						"chinese": "还没结束。我一定会解开它！",
						"french": "Ce n'est pas encore fini. Je vais certainement le déchiffrer !",
						"spanish": "Aún no ha terminado. ¡Lo descifraré sin falta!",
						"vietnamese": "Vẫn chưa kết thúc. Tôi nhất định sẽ giải mã nó!",
						"thai": "ยังไม่จบ ฉันจะถอดรหัสให้ได้!",
						"hindi": "अभी खत्म नहीं हुआ है। मैं इसे ज़रूर सुलझाऊँगा!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마지막 룬이 새겨진 거대한 홀. 정체 모를 자가 길을 막아선다.",
						"english": "A massive hall where the final rune is carved. An unknown blocks the path.",
						"japanese": "最後のルーンが刻まれた巨大な広間。正体不明の者が道を塞ぐ。",
						"chinese": "刻有最后符文的巨大厅堂。一个不明身份者挡住了去路。",
						"french": "Un immense hall où la dernière rune est gravée. Un inconnu bloque le passage.",
						"spanish": "Un inmenso salón donde está grabada la última runa. Un desconocido bloquea el camino.",
						"vietnamese": "Một đại sảnh khổng lồ nơi khắc ấn chú cuối cùng. Một kẻ lạ mặt chặn đường.",
						"thai": "ห้องโถงใหญ่ที่จารึกรูนสุดท้าย ผู้ไม่ประสงค์ออกนามขวางทางไว้",
						"hindi": "अंतिम रुन खुदी हुई एक विशाल हॉल। एक अज्ञात व्यक्ति रास्ता रोकता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "무모한 자들. 여기서 끝이다. 감히 그 이름을 건드리려 하다니.",
						"english": "Reckless fools. This is the end. How dare you meddle with that name.",
						"japanese": "愚かな者たち。ここで終わりだ。よくもその名に触れようとしたな。",
						"chinese": "鲁莽之人。到此为止。竟敢触碰那个名字。",
						"french": "Imprudents. C'est la fin. Comment osez-vous toucher à ce nom.",
						"spanish": "Temerarios. Aquí termina todo. ¿Cómo osáis tocar ese nombre?",
						"vietnamese": "Những kẻ liều lĩnh. Đến đây là kết thúc. Dám cả gan đụng đến cái tên đó.",
						"thai": "พวกบ้าบิ่น! จบสิ้นตรงนี้แหละ! กล้าดียังไงมาแตะต้องชื่อนั้น",
						"hindi": "मूर्ख दुस्साहसी। यहीं अंत है। तुम्हारी हिम्मत कैसे हुई उस नाम को छूने की।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이름? 네가 뭘 막으려는 거지?",
						"english": "Name? What are you trying to stop?",
						"japanese": "名前？何を止めようとしているんだ？",
						"chinese": "名字？你想阻止什么？",
						"french": "Un nom ? Qu'essayes-tu d'arrêter ?",
						"spanish": "¿Nombre? ¿Qué intentas detener?",
						"vietnamese": "Cái tên? Ngươi đang cố ngăn cản điều gì?",
						"thai": "ชื่อ? นายกำลังพยายามจะหยุดอะไร?",
						"hindi": "नाम? तुम क्या रोकने की कोशिश कर रहे हो?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은 너희를 파멸시킬 뿐이다.",
						"english": "The truth will only destroy you.",
						"japanese": "真実は貴様らを破滅させるだけだ。",
						"chinese": "真相只会毁灭你们。",
						"french": "La vérité ne fera que vous détruire.",
						"spanish": "La verdad solo os destruirá.",
						"vietnamese": "Sự thật sẽ chỉ hủy diệt các ngươi thôi.",
						"thai": "ความจริงจะทำลายพวกเจ้าเท่านั้น",
						"hindi": "सत्य तुम्हें केवल नष्ट करेगा।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
