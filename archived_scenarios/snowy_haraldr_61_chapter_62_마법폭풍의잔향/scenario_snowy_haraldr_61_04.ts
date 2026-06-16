export const scenario_snowy_haraldr_61_04 = {
	"scenario_id": "snowy_haraldr_61_04",
	"order": 4,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시간이 멈춘 듯, 모든 풍경이 똑같았다.",
						"english": "As if time stopped, every landscape was the same.",
						"japanese": "時間が止まったかのように、全ての景色が同じだった。",
						"chinese": "仿佛时间停滞，所有景象都一模一样。",
						"french": "Comme si le temps s'était arrêté, chaque paysage était identique.",
						"spanish": "Como si el tiempo se hubiera detenido, todo el paisaje era igual.",
						"vietnamese": "Như thể thời gian ngừng lại, mọi cảnh vật đều giống nhau.",
						"thai": "ราวกับเวลาหยุดนิ่ง ทุกทัศนียภาพเหมือนกันหมด",
						"hindi": "जैसे समय रुक गया हो, हर दृश्य एक जैसा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이상해. 아까 지나온 길 같은데?",
						"english": "...Strange. Is this the path we just passed?",
						"japanese": "…おかしい。さっき通ってきた道と同じみたいだが？",
						"chinese": "…奇怪。这好像是刚才走过的路？",
						"french": "...Étrange. C'est le chemin qu'on vient de prendre ?",
						"spanish": "...Extraño. ¿Es este el camino que acabamos de pasar?",
						"vietnamese": "...Lạ thật. Hình như là con đường vừa đi qua?",
						"thai": "...แปลกจัง นี่มันทางที่เราเพิ่งผ่านมาไม่ใช่เหรอ?",
						"hindi": "...अजीब है। यह वही रास्ता लगता है जिससे हम अभी गुजरे थे?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기록… 시작합니다. 이 폭풍은 과거를 붙잡고 있습니다.",
						"english": "Recording... starts. This storm holds the past captive.",
						"japanese": "記録… 開始します。この嵐は過去を捕らえている。",
						"chinese": "记录… 开始。这场风暴束缚着过去。",
						"french": "Enregistrement... commence. Cette tempête retient le passé prisonnier.",
						"spanish": "Grabación... comienza. Esta tormenta mantiene el pasado cautivo.",
						"vietnamese": "Ghi chép... bắt đầu. Cơn bão này đang giữ quá khứ lại.",
						"thai": "บันทึก... เริ่มต้น พายุนี้กำลังกักขังอดีตไว้",
						"hindi": "रिकॉर्डिंग... शुरू होती है। यह तूफान अतीत को बंधक बनाए हुए है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "저기, 보세요. 무릎 꿇은 전사의 잔상이… 또 나타나는군요.",
						"english": "Look over there. The phantom of a kneeling warrior... appears again.",
						"japanese": "あれ、見てください。膝まずく戦士の残像が… また現れました。",
						"chinese": "看那边。跪着的战士残影… 又出现了。",
						"french": "Regardez là-bas. L'image rémanente d'un guerrier agenouillé... apparaît encore.",
						"spanish": "Mire allí. La imagen residual de un guerrero arrodillado... aparece de nuevo.",
						"vietnamese": "Nhìn kìa. Bóng ma của chiến binh quỳ gối... lại xuất hiện.",
						"thai": "ดูนั่นสิ เงาของนักรบที่คุกเข่า... ปรากฏขึ้นอีกแล้ว",
						"hindi": "वहां देखो। घुटने टेके हुए योद्धा की परछाई... फिर से दिखाई दे रही है।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 룬은… 끔찍한 절망을 담고 있군요.",
						"english": "This rune... contains terrible despair.",
						"japanese": "このルーンは… 恐ろしい絶望を宿しているな。",
						"chinese": "这符文… 蕴含着可怕的绝望。",
						"french": "Cette rune... contient un terrible désespoir.",
						"spanish": "Esta runa... contiene una desesperación terrible.",
						"vietnamese": "Dòng chữ này... chứa đựng sự tuyệt vọng kinh hoàng.",
						"thai": "อักษรรูนนี้... บรรจุความสิ้นหวังที่น่ากลัวไว้",
						"hindi": "यह रन... भयानक निराशा से भरा है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "절망? 이 폭풍이 절망을 먹고 사나?",
						"english": "Despair? Does this storm feed on despair?",
						"japanese": "絶望？ この嵐は絶望を食い物にしているのか？",
						"chinese": "绝望？这场风暴是靠绝望为生吗？",
						"french": "Désespoir ? Cette tempête se nourrit-elle du désespoir ?",
						"spanish": "¿Desesperación? ¿Esta tormenta se alimenta de la desesperación?",
						"vietnamese": "Tuyệt vọng? Cơn bão này sống nhờ sự tuyệt vọng sao?",
						"thai": "ความสิ้นหวัง? พายุนี้กินความสิ้นหวังเป็นอาหารเหรอ?",
						"hindi": "निराशा? क्या यह तूफान निराशा पर पनपता है?"
					}
				},
				{
					"content": {
						"korean": "아니요. 절망이 이 폭풍을 먹고 있습니다.",
						"english": "No. Despair is consuming this storm.",
						"japanese": "いいえ。絶望がこの嵐を食い尽くしているのです。",
						"chinese": "不。绝望正在吞噬这场风暴。",
						"french": "Non. Le désespoir est en train de dévorer cette tempête.",
						"spanish": "No. La desesperación está consumiendo esta tormenta.",
						"vietnamese": "Không. Sự tuyệt vọng đang nuốt chửng cơn bão này.",
						"thai": "ไม่ใช่ ความสิ้นหวังกำลังกลืนกินพายุนี้อยู่ต่างหาก",
						"hindi": "नहीं। निराशा इस तूफान को निगल रही है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 그 반대인가요.",
						"english": "No... or is it the other way around?",
						"japanese": "いや…むしろ逆か？",
						"chinese": "不…或许恰恰相反？",
						"french": "Non... ou est-ce l'inverse ?",
						"spanish": "¿No... o es al revés?",
						"vietnamese": "Không... hay ngược lại?",
						"thai": "ไม่สิ... หรือว่าเป็นทางกลับกัน?",
						"hindi": "नहीं… या शायद इसका उलटा?"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 길은 이곳으로 돌아옵니다.",
						"english": "All roads lead back here.",
						"japanese": "全ての道はここへ戻る。",
						"chinese": "条条大路通此地。",
						"french": "Tous les chemins mènent ici.",
						"spanish": "Todos los caminos regresan aquí.",
						"vietnamese": "Mọi con đường đều dẫn về đây.",
						"thai": "ทุกเส้นทางล้วนนำกลับมาที่นี่",
						"hindi": "सारे रास्ते यहीं लौटते हैं।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "출구가 없다는 거야?",
						"english": "So, no way out?",
						"japanese": "出口がないってことか？",
						"chinese": "意思是…没有出口？",
						"french": "Tu veux dire qu'il n'y a pas d'issue ?",
						"spanish": "¿Quieres decir que no hay salida?",
						"vietnamese": "Ý là không có lối thoát sao?",
						"thai": "หมายความว่าไม่มีทางออกเหรอ?",
						"hindi": "मतलब… कोई रास्ता नहीं है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "정확히는… 그가 밖으로 나가는 길을 잊었습니다.",
						"english": "More precisely... he's forgotten the way out.",
						"japanese": "正確には…彼が外に出る道を忘れたんだ。",
						"chinese": "准确地说…他忘记了出去的路。",
						"french": "Plus précisément... il a oublié le chemin de la sortie.",
						"spanish": "Más precisamente... él ha olvidado el camino de salida.",
						"vietnamese": "Chính xác thì... anh ta đã quên lối ra rồi.",
						"thai": "พูดให้ถูกคือ... เขาได้ลืมเส้นทางออกไปแล้ว",
						"hindi": "असल में… वह बाहर जाने का रास्ता भूल गया है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 폭풍은… 그의 감옥입니다.",
						"english": "This storm... is his prison.",
						"japanese": "この嵐は…彼の牢獄だ。",
						"chinese": "这场风暴…是他的牢笼。",
						"french": "Cette tempête... est sa prison.",
						"spanish": "Esta tormenta... es su prisión.",
						"vietnamese": "Cơn bão này... là nhà tù của anh ta.",
						"thai": "พายุนี้... คือคุกของเขา",
						"hindi": "यह तूफ़ान… उसकी क़ैद है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "출구가 없습니다.",
						"english": "No way out.",
						"japanese": "出口はない。",
						"chinese": "没有出口。",
						"french": "Il n'y a pas d'issue.",
						"spanish": "No hay salida.",
						"vietnamese": "Không có lối thoát.",
						"thai": "ไม่มีทางออก",
						"hindi": "कोई रास्ता नहीं है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "모든 길은 같은 자리로 돌아오고 있습니다.",
						"english": "All roads lead back to the same place.",
						"japanese": "全ての道が同じ場所に戻ってきている。",
						"chinese": "条条大路都回到同一个地方。",
						"french": "Tous les chemins reviennent au même endroit.",
						"spanish": "Todos los caminos regresan al mismo lugar.",
						"vietnamese": "Mọi con đường đều dẫn về cùng một chỗ.",
						"thai": "ทุกเส้นทางล้วนนำกลับมายังที่เดิม",
						"hindi": "सारे रास्ते एक ही जगह लौट रहे हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 여긴 대체 어디야?",
						"english": "So... where are we, exactly?",
						"japanese": "じゃあ…ここは一体どこなんだ？",
						"chinese": "那么…这里到底是什么地方？",
						"french": "Alors... où sommes-nous, exactement ?",
						"spanish": "¿Entonces... dónde estamos exactamente?",
						"vietnamese": "Vậy... rốt cuộc đây là đâu?",
						"thai": "แล้ว... ที่นี่มันคือที่ไหนกันแน่?",
						"hindi": "तो… यह आख़िर कहाँ है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 폭풍은 밖이 아니라… 안에 있습니다.",
						"english": "This storm isn't outside... it's inside.",
						"japanese": "この嵐は外ではなく…内にあるんだ。",
						"chinese": "这场风暴不在外面…而在里面。",
						"french": "Cette tempête n'est pas à l'extérieur... elle est à l'intérieur.",
						"spanish": "Esta tormenta no está afuera... está adentro.",
						"vietnamese": "Cơn bão này không ở bên ngoài... mà ở bên trong.",
						"thai": "พายุนี้ไม่ได้อยู่ข้างนอก... แต่อยู่ข้างใน",
						"hindi": "यह तूफ़ान बाहर नहीं… अंदर है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "안…?",
						"english": "Inside...?",
						"japanese": "内に…？",
						"chinese": "里面…？",
						"french": "Intérieur...?",
						"spanish": "¿Adentro...?",
						"vietnamese": "Bên trong...?",
						"thai": "ข้างใน...?",
						"hindi": "अंदर…?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "도망쳐봐야 소용 없어. 결국 모두 이곳으로 돌아와.",
						"english": "There's no use running. In the end, everyone returns here.",
						"japanese": "逃げても無駄だ。結局、皆ここへ戻ってくる。",
						"chinese": "逃跑也沒用。最终所有人都会回到这里。",
						"french": "Inutile de fuir. Au final, tout le monde revient ici.",
						"spanish": "Es inútil huir. Al final, todos regresan aquí.",
						"vietnamese": "Trốn cũng vô ích thôi. Cuối cùng, mọi người đều trở về đây.",
						"thai": "หนีไปก็ไร้ประโยชน์ สุดท้ายแล้วทุกคนก็ต้องกลับมาที่นี่",
						"hindi": "भागने का कोई फायदा नहीं। अंत में, सब यहीं लौट आते हैं।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실을 알아낼 때까지… 멈추지 않아.",
						"english": "Until I uncover the truth… I won't stop.",
						"japanese": "真実を突き止めるまで… 止まらない。",
						"chinese": "在查明真相之前… 我不会停止。",
						"french": "Tant que je n'aurai pas découvert la vérité… je ne m'arrêterai pas.",
						"spanish": "Hasta que descubra la verdad… no me detendré.",
						"vietnamese": "Cho đến khi tìm ra sự thật… tôi sẽ không dừng lại.",
						"thai": "จนกว่าจะรู้ความจริง... ฉันจะไม่หยุด",
						"hindi": "जब तक मैं सच का पता नहीं लगा लेता… मैं रुकूंगा नहीं।"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…결국, 그는 너희도 삼킬 것이다.",
						"english": "...In the end, he will devour you too.",
						"japanese": "…結局、彼はお前たちをも飲み込むだろう。",
						"chinese": "…最终，他也会吞噬你们的。",
						"french": "...Finalement, il vous dévorera vous aussi.",
						"spanish": "...Al final, él también os devorará.",
						"vietnamese": "...Cuối cùng, hắn cũng sẽ nuốt chửng các ngươi.",
						"thai": "...สุดท้ายแล้ว เขาก็จะกลืนกินพวกเจ้าด้วยเช่นกัน",
						"hindi": "...अंत में, वह तुम्हें भी निगल जाएगा।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리야.",
						"english": "...What do you mean?",
						"japanese": "…どういう意味だ。",
						"chinese": "…什么意思。",
						"french": "...Que voulez-vous dire ?",
						"spanish": "...¿Qué quieres decir?",
						"vietnamese": "...Ngươi nói gì vậy?",
						"thai": "...หมายความว่าอะไร",
						"hindi": "...तुम्हारा मतलब क्या है।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이것으로… 하나의 기록이 끝났습니다.",
						"english": "With this… one record has ended.",
						"japanese": "これで… 一つの記録が終わった。",
						"chinese": "至此… 一段记录结束了。",
						"french": "Avec cela… un chapitre se clôt.",
						"spanish": "Con esto… un registro ha terminado.",
						"vietnamese": "Với điều này… một kỷ lục đã kết thúc.",
						"thai": "ด้วยสิ่งนี้... หนึ่งบันทึกได้สิ้นสุดลงแล้ว",
						"hindi": "इसके साथ... एक अध्याय समाप्त हुआ।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "폭풍 속에서, 또 다른 잔향이 깨어난다. 감춰졌던 마지막 싸움이 이제야 시작될 참이었다.",
						"english": "Within the storm, another echo awakens. The hidden final battle was now about to begin.",
						"japanese": "嵐の中で、別の残響が目覚める。隠されていた最後の戦いが今、まさに始まろうとしていた。",
						"chinese": "在风暴中，另一道余音苏醒。隐藏的最终之战即将开始。",
						"french": "Au cœur de la tempête, un autre écho s'éveille. La dernière bataille cachée était sur le point de commencer.",
						"spanish": "En la tormenta, otro eco despierta. La última batalla oculta estaba a punto de comenzar.",
						"vietnamese": "Trong cơn bão, một dư âm khác thức tỉnh. Trận chiến cuối cùng bị che giấu giờ mới sắp bắt đầu.",
						"thai": "ท่ามกลางพายุ เสียงสะท้อนอีกระลอกกำลังตื่นขึ้น การต่อสู้ครั้งสุดท้ายที่ถูกปกปิด กำลังจะเริ่มขึ้นแล้ว",
						"hindi": "तूफान के भीतर, एक और प्रतिध्वनि जागृत होती है। छिपी हुई अंतिम लड़ाई अब शुरू होने वाली थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "또 왔군. 끝없는 싸움이 지겹지도 않나?",
						"english": "You again. Aren't you tired of this endless fight?",
						"japanese": "また来たのか。終わりのない戦いに飽きないのか？",
						"chinese": "又是你。没厌倦这无休止的战斗吗？",
						"french": "Encore vous. Cette lutte sans fin ne vous lasse donc pas ?",
						"spanish": "Otra vez tú. ¿No te cansas de esta lucha interminable?",
						"vietnamese": "Lại là ngươi. Ngươi không chán cuộc chiến bất tận này sao?",
						"thai": "มาอีกแล้วรึ ไม่เบื่อการต่อสู้ที่ไม่มีที่สิ้นสุดนี้หรือไง?",
						"hindi": "तुम फिर आ गए। इस अंतहीन लड़ाई से थके नहीं?"
					}
				},
				{
					"content": {
						"korean": "당신을 쓰러뜨려야… 이 폭풍이 끝난다.",
						"english": "Only by defeating you... will this storm end.",
						"japanese": "あなたを倒さなければ… この嵐は終わらない。",
						"chinese": "只有打败你… 这场风暴才会结束。",
						"french": "Ce n'est qu'en vous abattant… que cette tempête prendra fin.",
						"spanish": "Solo derribándote… esta tormenta terminará.",
						"vietnamese": "Chỉ khi hạ gục ngươi… cơn bão này mới kết thúc.",
						"thai": "มีเพียงโค่นล้มท่าน... พายุลูกนี้ถึงจะสงบลง",
						"hindi": "तुम्हें हराने के बाद ही... यह तूफान खत्म होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…어리석은 것들. 폭풍은 영원해.",
						"english": "...Fools. The storm is eternal.",
						"japanese": "…愚かな者たちめ。嵐は永遠だ。",
						"chinese": "…愚蠢的家伙们。风暴是永恒的。",
						"french": "...Idiots. La tempête est éternelle.",
						"spanish": "...Necios. La tormenta es eterna.",
						"vietnamese": "...Lũ ngốc. Cơn bão là vĩnh cửu.",
						"thai": "...พวกโง่เขลา พายุนั้นเป็นนิรันดร์",
						"hindi": "...मूर्ख। तूफान शाश्वत है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"멈추지 않는 마법 폭풍. 그 안에서 수백 년의 시간이 멈췄다.",
			"모든 길은 하나로 통했다. 끝나지 않는 죽음의 순간으로.",
			"기록자는 깨달았다. 폭풍은 밖이 아니라, 그 안에 있었다는 것을."
		],
		"english": [
			"The ceaseless magic storm. Within it, centuries of time stood still.",
			"All paths led to one. To an endless moment of death.",
			"The Scribe realized. The storm wasn't outside, but within it."
		],
		"japanese": [
			"止まない魔法の嵐。その中で、数百年もの時間が止まった。",
			"全ての道は一つに通じた。終わりのない死の瞬間へと。",
			"記録者は悟った。嵐は外ではなく、その内側にあったことを。"
		],
		"chinese": [
			"永不停歇的魔法风暴。在其中，数百年的时间停滞了。",
			"所有道路都通向一点。通向永无止境的死亡瞬间。",
			"记录者意识到。风暴并非在外，而是在其内部。"
		],
		"french": [
			"La tempête magique incessante. En elle, des siècles de temps s'étaient arrêtés.",
			"Tous les chemins menaient à un seul. Vers un moment de mort sans fin.",
			"Le Chroniqueur réalisa. La tempête n'était pas à l'extérieur, mais à l'intérieur."
		],
		"spanish": [
			"La incesante tormenta mágica. Dentro de ella, siglos de tiempo se detuvieron.",
			"Todos los caminos llevaban a uno. A un momento de muerte sin fin.",
			"El Cronista se dio cuenta. La tormenta no estaba afuera, sino dentro de ella."
		],
		"vietnamese": [
			"Cơn bão ma thuật không ngừng. Trong đó, hàng trăm năm thời gian đã ngừng lại.",
			"Mọi con đường đều dẫn đến một. Đến khoảnh khắc cái chết không ngừng.",
			"Người ghi chép nhận ra. Cơn bão không ở bên ngoài, mà ở bên trong nó."
		],
		"thai": [
			"พายุเวทมนตร์ที่ไม่หยุดนิ่ง ภายในนั้นกาลเวลาหลายร้อยปีได้หยุดลง",
			"ทุกเส้นทางนำไปสู่สิ่งเดียว ช่วงเวลาแห่งความตายที่ไม่มีที่สิ้นสุด",
			"ผู้บันทึกตระหนักได้ พายุไม่ได้อยู่ข้างนอก แต่อยู่ข้างในนั้น"
		],
		"hindi": [
			"अविराम जादुई तूफान। उसके भीतर, सदियों का समय थम गया।",
			"सभी रास्ते एक ही ओर ले गए। मृत्यु के एक अंतहीन क्षण की ओर।",
			"लेखक को एहसास हुआ। तूफान बाहर नहीं, बल्कि उसके भीतर था।"
		]
	}
} as const;
