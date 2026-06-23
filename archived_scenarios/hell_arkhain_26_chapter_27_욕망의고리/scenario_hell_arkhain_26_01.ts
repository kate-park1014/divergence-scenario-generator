export const scenario_hell_arkhain_26_01 = {
	"scenario_id": "hell_arkhain_26_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모든 것이 부서진 왕좌의 방. 찢겨진 금빛 조각들이 과거의 영광을 비웃는다.",
						"english": "The throne room, everything shattered. Torn golden fragments mock past glory.",
						"japanese": "全てが打ち砕かれた玉座の間。引き裂かれた金色の破片が、過去の栄光を嘲笑う。",
						"chinese": "一切破碎的王座之厅。撕裂的金色碎片嘲笑着往日的荣耀。",
						"french": "La salle du trône, tout est brisé. Des fragments dorés déchirés se moquent de la gloire passée.",
						"spanish": "La sala del trono, todo destrozado. Fragmentos dorados rotos se burlan de la gloria pasada.",
						"vietnamese": "Căn phòng ngai vàng mọi thứ đều vỡ nát. Những mảnh vàng rách nát chế giễu vinh quang xưa.",
						"thai": "ห้องบัลลังก์ที่ทุกสิ่งแตกสลาย เศษทองที่ฉีกขาดเย้ยหยันความรุ่งโรจน์ในอดีต",
						"hindi": "सिंहासन कक्ष, सब कुछ टूट गया। फटे हुए सुनहरे टुकड़े पिछले गौरव का मज़ाक उड़ाते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 그곳인가.",
						"english": "Is this... the place?",
						"japanese": "ここが… あの場所か。",
						"chinese": "这里就是……那个地方吗？",
						"french": "C'est ici... cet endroit ?",
						"spanish": "¿Es este... el lugar?",
						"vietnamese": "Đây là... nơi đó sao?",
						"thai": "นี่คือ...ที่นั่นหรือ",
						"hindi": "क्या यह... वही जगह है?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔구나… 결국 이 길을 택했어.",
						"english": "You've come... You chose this path after all.",
						"japanese": "来たか… 結局この道を選んだな。",
						"chinese": "你来了……终究还是选择了这条路。",
						"french": "Tu es venu... Tu as finalement choisi cette voie.",
						"spanish": "Has venido... Al final elegiste este camino.",
						"vietnamese": "Ngươi đã đến... Cuối cùng vẫn chọn con đường này.",
						"thai": "เจ้ามาแล้ว... ในที่สุดก็เลือกเส้นทางนี้",
						"hindi": "तुम आ गए... आखिर तुमने यह रास्ता चुना।"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "And you are...?",
						"japanese": "あなたは…？",
						"chinese": "您是……？",
						"french": "Et vous êtes... ?",
						"spanish": "¿Y usted es...?",
						"vietnamese": "Ngài là...?",
						"thai": "ท่านคือ...?",
						"hindi": "और आप कौन हैं...?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "애쉬. 잊혀진 약속을 지키는 자.",
						"english": "Ash. The one who keeps forgotten promises.",
						"japanese": "アッシュ。忘れられた約束を守る者。",
						"chinese": "艾什。遗忘誓言的守护者。",
						"french": "Ash. Celui qui garde les promesses oubliées.",
						"spanish": "Ash. El que guarda las promesas olvidadas.",
						"vietnamese": "Ash. Kẻ giữ gìn những lời hứa bị lãng quên.",
						"thai": "แอช ผู้รักษาคำสัญญาที่ถูกลืม",
						"hindi": "ऐश। भूली हुई प्रतिज्ञाओं का रखवाला।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳에선 아무것도 되돌릴 수 없어. 특히, 그 반지는.",
						"english": "Nothing can be undone here. Especially not that ring.",
						"japanese": "ここでは何も取り戻せない。特に、あの指輪は。",
						"chinese": "在这里，一切都无法挽回。尤其是那枚戒指。",
						"french": "Rien ne peut être défait ici. Surtout pas cet anneau.",
						"spanish": "Aquí nada se puede deshacer. Especialmente, ese anillo.",
						"vietnamese": "Ở đây, không gì có thể thay đổi. Đặc biệt là chiếc nhẫn đó.",
						"thai": "ที่นี่ไม่มีอะไรย้อนกลับได้ โดยเฉพาะแหวนนั่น",
						"hindi": "यहां कुछ भी पूर्ववत नहीं किया जा सकता। खासकर वह अंगूठी।"
					},
					"speaker": "ash",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "그 반지의 힘은… 너의 가장 깊은 욕망을 왜곡할 거야.",
						"english": "The ring's power… will distort your deepest desires.",
						"japanese": "その指輪の力は… お前の最も深い欲望を歪めるだろう。",
						"chinese": "那枚戒指的力量… 会扭曲你内心最深处的欲望。",
						"french": "Le pouvoir de cette bague… pervertira tes désirs les plus profonds.",
						"spanish": "El poder de ese anillo… distorsionará tus deseos más profundos.",
						"vietnamese": "Sức mạnh của chiếc nhẫn đó… sẽ bóp méo những khát khao sâu thẳm nhất của ngươi.",
						"thai": "พลังของแหวนนั่น… จะบิดเบือนความปรารถนาอันลึกที่สุดของเจ้า",
						"hindi": "उस अंगूठी की शक्ति… तुम्हारी सबसे गहरी इच्छाओं को विकृत कर देगी।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는… 그저 과거를 바로잡고 싶을 뿐이야.",
						"english": "I… merely wish to correct the past.",
						"japanese": "私は… ただ過去を正したいだけだ。",
						"chinese": "我… 只是想纠正过去。",
						"french": "Je… souhaite simplement corriger le passé.",
						"spanish": "Yo… solo quiero corregir el pasado.",
						"vietnamese": "Ta… chỉ muốn sửa chữa quá khứ thôi.",
						"thai": "ฉัน… แค่อยากแก้ไขอดีตเท่านั้น",
						"hindi": "मैं… बस अतीत को सुधारना चाहता हूँ।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "하지만 네가 보는 너의 모습은, 진실이 아닐지도 몰라.",
						"english": "But the self you see, might not be the truth.",
						"japanese": "だが、お前が見る自分は、真実ではないかもしれない。",
						"chinese": "但你所看到的自己，或许并非真相。",
						"french": "Mais l'image que tu as de toi-même, n'est peut-être pas la vérité.",
						"spanish": "Pero la imagen que ves de ti, quizás no sea la verdad.",
						"vietnamese": "Nhưng hình ảnh mà ngươi thấy về mình, có lẽ không phải sự thật.",
						"thai": "แต่ตัวตนที่เจ้าเห็นนั้น อาจไม่ใช่ความจริง",
						"hindi": "परन्तु जो तुम खुद को देखते हो, वह सच नहीं हो सकता।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué dices?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "เจ้าหมายความว่าอะไร?",
						"hindi": "क्या मतलब है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "어떤 기억은… 너무 강력해서 현실을 일그러뜨려. 마치 거울처럼.",
						"english": "Some memories… are so powerful they distort reality. Like a mirror.",
						"japanese": "ある記憶は… あまりにも強烈で現実を歪める。まるで鏡のように。",
						"chinese": "有些记忆… 过于强大，会扭曲现实。就像镜子一样。",
						"french": "Certains souvenirs… sont si puissants qu'ils déforment la réalité. Comme un miroir.",
						"spanish": "Algunos recuerdos… son tan poderosos que distorsionan la realidad. Como un espejo.",
						"vietnamese": "Một số ký ức… quá mạnh mẽ, bóp méo thực tại. Giống như một tấm gương.",
						"thai": "ความทรงจำบางอย่าง… ทรงพลังมากเสียจนบิดเบือนความจริง ราวกับกระจก",
						"hindi": "कुछ यादें… इतनी शक्तिशाली होती हैं कि वे वास्तविकता को विकृत कर देती हैं। एक दर्पण की तरह।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "네 눈빛에서 문득… 낯선 얼굴이 보여.",
						"english": "In your eyes, I suddenly… see a strange face.",
						"japanese": "お前の瞳にふと… 見知らぬ顔が見える。",
						"chinese": "在你的眼神中，我突然… 看到了一张陌生的脸。",
						"french": "Dans tes yeux, je vois soudain… un visage étranger.",
						"spanish": "En tu mirada, de repente… veo un rostro extraño.",
						"vietnamese": "Trong mắt ngươi, ta bỗng thấy… một gương mặt xa lạ.",
						"thai": "ในดวงตาของเจ้า จู่ๆ… ฉันก็เห็นใบหน้าที่แปลกไป",
						"hindi": "तुम्हारी आँखों में, मुझे अचानक… एक अजनबी चेहरा दिखता है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "과거의 비극은… 그 반지가 불러온 재앙이었어.",
						"english": "The past tragedy… was a disaster brought forth by that ring.",
						"japanese": "過去の悲劇は… あの指輪が招いた災厄だった。",
						"chinese": "过去的悲剧… 是那枚戒指带来的灾祸。",
						"french": "La tragédie passée… était une catastrophe causée par cette bague.",
						"spanish": "La tragedia del pasado… fue un desastre provocado por ese anillo.",
						"vietnamese": "Bi kịch trong quá khứ… là tai ương do chiếc nhẫn đó mang lại.",
						"thai": "โศกนาฏกรรมในอดีต… คือหายนะที่เกิดจากแหวนวงนั้น",
						"hindi": "अतीत की त्रासदी… उस अंगूठी द्वारा लाई गई एक आपदा थी।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내가 그걸 막을 수 있을 거야.",
						"english": "I'll be able to stop it.",
						"japanese": "私がそれを止められるはずだ。",
						"chinese": "我能阻止它。",
						"french": "Je pourrai l'arrêter.",
						"spanish": "Podré detenerlo.",
						"vietnamese": "Ta sẽ có thể ngăn chặn nó.",
						"thai": "ฉันจะหยุดมันได้",
						"hindi": "मैं इसे रोक पाऊँगा।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "막는다고? 아니… 넌 그저 그 운명을 반복할 뿐이야.",
						"english": "Stop it? No… you'll merely repeat that fate.",
						"japanese": "止めるだと？違う… お前はその運命を繰り返すだけだ。",
						"chinese": "阻止？不… 你只是在重复那个命运罢了。",
						"french": "L'arrêter ? Non… tu ne feras que répéter ce destin.",
						"spanish": "¿Detenerlo? No… solo repetirás ese destino.",
						"vietnamese": "Ngăn chặn ư? Không… ngươi chỉ đang lặp lại số phận đó thôi.",
						"thai": "หยุดมันหรือ? ไม่… เจ้าแค่จะย้ำรอยเดิมของโชคชะตานั้น",
						"hindi": "रोकना? नहीं… तुम बस उस नियति को दोहराओगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "나는 달라.",
						"english": "I'm different.",
						"japanese": "私は違う。",
						"chinese": "我不同。",
						"french": "Je suis différent.",
						"spanish": "Yo soy diferente.",
						"vietnamese": "Ta khác.",
						"thai": "ฉันไม่เหมือนใคร",
						"hindi": "मैं अलग हूँ।"
					}
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모두가 그렇게 말했지. 결국 모든 길은… 같은 결말을 향했어.",
						"english": "Everyone said so. In the end, all paths led to… the same conclusion.",
						"japanese": "皆そう言っていた。結局、全ての道は…同じ結末に向かっていた。",
						"chinese": "所有人都这么说。最终，所有的路都…通向同一个结局。",
						"french": "Tout le monde le disait. Au final, tous les chemins menaient… à la même fin.",
						"spanish": "Todos lo dijeron. Al final, todos los caminos… llevaban al mismo final.",
						"vietnamese": "Mọi người đều nói vậy. Cuối cùng, mọi con đường đều dẫn… đến một kết cục.",
						"thai": "ทุกคนพูดอย่างนั้น สุดท้ายแล้ว ทุกเส้นทางก็… นำไปสู่จุดจบเดียวกัน",
						"hindi": "सबने ऐसा ही कहा। आखिरकार, सभी रास्ते… एक ही अंजाम की ओर ले गए।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이 이상은… 돌아갈 수 없어. 멈춰.",
						"english": "No further… You can't go back. Stop.",
						"japanese": "これ以上は…引き返せない。止まれ。",
						"chinese": "不能再往前了… 回不去了。停下。",
						"french": "Pas plus loin… Tu ne peux pas revenir en arrière. Arrête.",
						"spanish": "No más allá… No puedes volver. Detente.",
						"vietnamese": "Không thể hơn nữa… Không thể quay lại. Dừng lại.",
						"thai": "ไปมากกว่านี้… กลับไม่ได้แล้ว หยุดเถอะ",
						"hindi": "इससे आगे नहीं… वापस नहीं जा सकते। रुक जाओ।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 멈추지 않아.",
						"english": "I won't stop.",
						"japanese": "私は止まらない。",
						"chinese": "我不会停下。",
						"french": "Je ne m'arrêterai pas.",
						"spanish": "No me detendré.",
						"vietnamese": "Tôi sẽ không dừng lại.",
						"thai": "ฉันจะไม่หยุด",
						"hindi": "मैं नहीं रुकूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "네가 얻으려는 자유는, 또 다른 속박이 될 뿐이야.",
						"english": "The freedom you seek will only become another bind.",
						"japanese": "お前が得ようとする自由は、新たな束縛となるだけだ。",
						"chinese": "你所追求的自由，只会变成另一种束缚。",
						"french": "La liberté que tu cherches ne sera qu'une autre entrave.",
						"spanish": "La libertad que buscas solo será otra atadura.",
						"vietnamese": "Tự do mà ngươi muốn có, sẽ chỉ là một sự ràng buộc khác mà thôi.",
						"thai": "อิสรภาพที่เจ้าไขว่คว้า จะกลายเป็นเพียงพันธนาการอื่น",
						"hindi": "जो आज़ादी तुम पाना चाहते हो, वह केवल एक और बंधन बनेगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 후회는 없어.",
						"english": "No more regrets.",
						"japanese": "もう後悔はない。",
						"chinese": "我不再有遗憾。",
						"french": "Plus de regrets.",
						"spanish": "No más remordimientos.",
						"vietnamese": "Không còn hối tiếc nữa.",
						"thai": "ไม่มีความเสียใจอีกแล้ว",
						"hindi": "अब कोई पछतावा नहीं।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "…후회하게 될 거야. 반드시.",
						"english": "…You will regret it. Surely.",
						"japanese": "…後悔することになる。必ず。",
						"chinese": "…你一定会后悔的。肯定会。",
						"french": "…Tu le regretteras. Sûrement.",
						"spanish": "…Te arrepentirás. Sin falta.",
						"vietnamese": "…Ngươi sẽ phải hối hận. Chắc chắn.",
						"thai": "…เจ้าจะต้องเสียใจ อย่างแน่นอน",
						"hindi": "…तुम्हें पछतावा होगा। ज़रूर।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 힘에 짓눌려 모든 것이 산산이 부서졌다.",
						"english": "Crushed by an immense power, everything shattered.",
						"japanese": "巨大な力に押し潰され、全てが粉々に砕け散った。",
						"chinese": "被巨大的力量碾压，一切都支离破碎。",
						"french": "Écrasé par une puissance colossale, tout se brisa en mille morceaux.",
						"spanish": "Aplastado por una fuerza inmensa, todo se hizo añicos.",
						"vietnamese": "Bị sức mạnh khổng lồ nghiền nát, mọi thứ tan vỡ thành từng mảnh.",
						"thai": "ถูกบดขยี้ด้วยพลังอันมหาศาล ทุกสิ่งแตกสลาย",
						"hindi": "एक विशाल शक्ति से कुचलकर, सब कुछ चकनाचूर हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "큭큭… 네 약속은… 영원히 지켜지지 않을 것이다.",
						"english": "Heh heh... Your promise... will never be kept.",
						"japanese": "クク… お前の約束は… 永遠に果たされないだろう。",
						"chinese": "呵呵……你的承诺……将永远无法实现。",
						"french": "Haha… Ta promesse… ne sera jamais tenue.",
						"spanish": "Je je... Tu promesa... nunca se cumplirá.",
						"vietnamese": "Khà khà… Lời hứa của ngươi… sẽ không bao giờ được giữ.",
						"thai": "ฮึๆ... คำสัญญาของเจ้า... จะไม่มีวันเป็นจริง",
						"hindi": "हा हा... तुम्हारा वादा... कभी पूरा नहीं होगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "……还没，结束呢。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa, kết thúc đâu.",
						"thai": "...ยัง, ไม่จบหรอก",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크크… 어리석은… 그 힘은… 너를 집어삼킬 것이다…",
						"english": "Heh heh... Foolish... That power... will consume you...",
						"japanese": "クク… 愚かな… その力は… お前を蝕むだろう…",
						"chinese": "呵呵……愚蠢的家伙……那力量……将会吞噬你……",
						"french": "Haha… Imbécile… Ce pouvoir… te dévorera…",
						"spanish": "Je je... Estúpido... Ese poder... te consumirá...",
						"vietnamese": "Khà khà… Ngu xuẩn… Sức mạnh đó… sẽ nuốt chửng ngươi…",
						"thai": "ฮึๆ... ช่างโง่เขลา... พลังนั้น... จะกลืนกินเจ้า...",
						"hindi": "हा हा... मूर्ख... वह शक्ति... तुम्हें निगल जाएगी..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "....",
						"chinese": "……",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "잠시 멈춰선 시간. 그러나 왕좌의 방은 여전히 쓸쓸했고, 반지의 메아리는 멈추지 않았다.",
						"english": "Time momentarily stopped. Yet, the throne room remained desolate, and the echo of the ring did not cease.",
						"japanese": "一時停止した時間。しかし、玉座の間は相変わらず物寂しく、指輪の残響は止まらなかった。",
						"chinese": "时间短暂地停滞了。然而，王座之厅依然寂寥，戒指的回响也未曾停止。",
						"french": "Le temps s'arrêta un instant. Pourtant, la salle du trône restait désolée, et l'écho de l'anneau ne s'éteignait pas.",
						"spanish": "El tiempo se detuvo por un instante. Sin embargo, la sala del trono seguía desolada, y el eco del anillo no cesaba.",
						"vietnamese": "Thời gian chợt ngừng lại. Nhưng phòng ngai vàng vẫn hiu quạnh, và tiếng vọng của chiếc nhẫn không ngừng.",
						"thai": "เวลาหยุดลงชั่วขณะ แต่ห้องบัลลังก์ยังคงเงียบเหงา และเสียงสะท้อนของแหวนก็ไม่หยุดนิ่ง",
						"hindi": "समय क्षण भर के लिए थम गया। फिर भी, सिंहासन कक्ष वीरान रहा, और अंगूठी की गूँज बंद नहीं हुई।"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "결국… 이렇게 되는구나. 또 다시.",
						"english": "In the end... it comes to this. Again.",
						"japanese": "結局… こうなるのか。またしても。",
						"chinese": "最终……还是变成这样了。又一次。",
						"french": "Finalement… c'est ce qui arrive. Encore une fois.",
						"spanish": "Al final... así es como termina. De nuevo.",
						"vietnamese": "Rốt cuộc… lại thành ra thế này. Lại một lần nữa.",
						"thai": "ในที่สุด... ก็เป็นเช่นนี้อีกแล้ว.",
						"hindi": "अंत में... ऐसा ही होता है। फिर से।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왕좌 위, 거대한 그림자가 일그러진 욕망처럼 꿈틀거렸다.",
						"english": "Upon the throne, a colossal shadow writhed like distorted desire.",
						"japanese": "玉座の上、巨大な影が歪んだ欲望のように蠢いていた。",
						"chinese": "王座之上，巨大的影子如同扭曲的欲望般蠕动着。",
						"french": "Sur le trône, une ombre colossale se tordait comme un désir déformé.",
						"spanish": "Sobre el trono, una sombra colosal se retorcía como un deseo distorsionado.",
						"vietnamese": "Trên ngai vàng, một cái bóng khổng lồ cuộn mình như một dục vọng méo mó.",
						"thai": "เหนือบัลลังก์ เงาขนาดมหึมาบิดเบี้ยวราวกับความปรารถนาที่ผิดเพี้ยน",
						"hindi": "सिंहासन पर, एक विशाल छाया विकृत इच्छा की तरह ऐंठ रही थी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔구나… 잊혀진 약속의 계승자여.",
						"english": "You've come… Successor of the forgotten promise.",
						"japanese": "来たか…忘れ去られた約束の継承者よ。",
						"chinese": "你来了… 遗忘之约的继承者啊。",
						"french": "Tu es venu… Héritier de la promesse oubliée.",
						"spanish": "Has venido… Heredero de la promesa olvidada.",
						"vietnamese": "Ngươi đã đến rồi… Kẻ kế thừa của lời hứa bị lãng quên.",
						"thai": "เจ้ามาแล้ว… ผู้สืบทอดพันธสัญญาที่ถูกลืม",
						"hindi": "तुम आ गए… भूले हुए वादे के उत्तराधिकारी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가… 이 모든 비극의 시작인가.",
						"english": "Are you… the beginning of all this tragedy?",
						"japanese": "お前が…この全ての悲劇の始まりなのか。",
						"chinese": "你就是… 这所有悲剧的开端吗？",
						"french": "Es-tu… le début de toute cette tragédie ?",
						"spanish": "¿Eres tú… el comienzo de toda esta tragedia?",
						"vietnamese": "Ngươi… là khởi đầu của tất cả bi kịch này sao?",
						"thai": "เจ้าคือ… จุดเริ่มต้นของโศกนาฏกรรมทั้งหมดนี้หรือ",
						"hindi": "क्या तुम… इस सारी त्रासदी की शुरुआत हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시작이자 끝. 모든 것은 결국 하나로 귀결되지.",
						"english": "The beginning and the end. Everything ultimately converges into one.",
						"japanese": "始まりにして終わり。全ては結局、一つに帰結する。",
						"chinese": "始亦是终。万物终将归于一。",
						"french": "Le début et la fin. Tout finit par converger en un.",
						"spanish": "El principio y el fin. Todo converge finalmente en uno.",
						"vietnamese": "Khởi đầu và kết thúc. Tất cả cuối cùng đều quy về một.",
						"thai": "จุดเริ่มต้นและจุดสิ้นสุด ทุกสิ่งล้วนมาบรรจบกันในที่สุด",
						"hindi": "शुरुआत और अंत। अंततः सब एक में विलीन हो जाता है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네가 원하는 것이 있다면… 나를 쓰러뜨려라.",
						"english": "If you desire something... defeat me.",
						"japanese": "望むものがあるのなら… 私を倒してみせろ。",
						"chinese": "如果你有所企求……就打倒我吧。",
						"french": "Si tu désires quelque chose… renverse-moi.",
						"spanish": "Si deseas algo... derrótame.",
						"vietnamese": "Nếu ngươi muốn điều gì đó… hãy đánh bại ta.",
						"thai": "หากเจ้าปรารถนาสิ่งใด… จงโค่นล้มข้าเสีย",
						"hindi": "यदि तुम कुछ चाहते हो... तो मुझे हरा दो।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황폐한 왕좌의 방. 찢겨진 약속의 메아리가 떠돈다.",
			"과거의 선택은 시간을 왜곡했고, 모든 희망은 조각났다.",
			"이제, 그 저주받은 반지가 너를 부른다.",
			"비극은 이미 시작되었고, 끝은 정해져 있었다."
		],
		"english": [
			"The desolate throne room. Echoes of a broken promise linger.",
			"Past choices distorted time, shattering all hope.",
			"Now, that cursed ring calls to you.",
			"The tragedy had already begun, its end predetermined."
		],
		"japanese": [
			"荒廃した玉座の間。引き裂かれた約束の残響が漂う。",
			"過去の選択が時間を歪め、全ての希望は砕け散った。",
			"今、その呪われた指輪がお前を呼ぶ。",
			"悲劇は既に始まり、結末は定められていた。"
		],
		"chinese": [
			"荒废的王座之厅。破碎誓言的回响萦绕。",
			"过去的选择扭曲了时间，所有希望都已破碎。",
			"现在，那被诅咒的戒指正在呼唤你。",
			"悲剧早已开始，结局已注定。"
		],
		"french": [
			"La salle du trône désolée. Les échos d'une promesse brisée y résonnent.",
			"Les choix passés ont déformé le temps, brisant tout espoir.",
			"Maintenant, cet anneau maudit t'appelle.",
			"La tragédie avait déjà commencé, sa fin était prédestinée."
		],
		"spanish": [
			"La sala del trono desolada. Ecos de una promesa rota vagan.",
			"Las elecciones pasadas distorsionaron el tiempo, destrozando toda esperanza.",
			"Ahora, ese anillo maldito te llama.",
			"La tragedia ya había comenzado, su fin estaba predeterminado."
		],
		"vietnamese": [
			"Căn phòng ngai vàng hoang phế. Tiếng vọng của lời hứa tan vỡ vẫn còn vương vấn.",
			"Những lựa chọn trong quá khứ đã bóp méo thời gian, mọi hy vọng đều tan vỡ.",
			"Giờ đây, chiếc nhẫn bị nguyền rủa đó đang gọi ngươi.",
			"Bi kịch đã bắt đầu, kết cục đã định sẵn."
		],
		"thai": [
			"ห้องบัลลังก์ที่รกร้าง เสียงสะท้อนของคำสัญญาที่แตกสลายยังคงลอยอยู่",
			"ทางเลือกในอดีตบิดเบือนกาลเวลา ความหวังทั้งหมดแตกสลาย",
			"บัดนี้ แหวนต้องคำสาปนั้นเรียกหาเจ้าแล้ว",
			"โศกนาฏกรรมได้เริ่มต้นขึ้นแล้ว จุดจบถูกกำหนดไว้แล้ว"
		],
		"hindi": [
			"निर्जन सिंहासन कक्ष। टूटे वादे की गूँज गूँजती है。",
			"पिछले चुनावों ने समय को विकृत कर दिया, सारी उम्मीदें बिखर गईं।",
			"अब, वह शापित अंगूठी तुम्हें बुला रही है।",
			"त्रासदी पहले ही शुरू हो चुकी थी, उसका अंत पूर्वनिर्धारित था।"
		]
	}
} as const;
