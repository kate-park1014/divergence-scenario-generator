export const scenario_desert_rustblood_11_05 = {
	"scenario_id": "desert_rustblood_11_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_DustBlade_Rustblood_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "결국 여기까지 왔군. 자네의 여정이… 끝을 향하고 있어.",
						"english": "So you've made it this far. Your journey... is nearing its end.",
						"japanese": "ついにここまで来たか。君の旅路は…終わりに向かっている。",
						"chinese": "最终还是走到这里了啊。你的旅程…正走向终点。",
						"french": "Tu es finalement arrivé jusqu'ici. Ton voyage... approche de sa fin.",
						"spanish": "Finalmente llegaste hasta aquí. Tu viaje... se acerca a su fin.",
						"vietnamese": "Cuối cùng thì ngươi cũng đã đến đây. Hành trình của ngươi... đang đi đến hồi kết.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ การเดินทางของเจ้า... กำลังจะสิ้นสุดลง",
						"hindi": "तो तुम यहाँ तक आ ही गए। तुम्हारी यात्रा... अपने अंत की ओर बढ़ रही है।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "러스트블러드를 만날 거야. 모든 진실을 들어야만 해.",
						"english": "You will meet Rustblood. You must hear all the truth.",
						"japanese": "ラストブラッドに会うだろう。すべての真実を聞かなければならない。",
						"chinese": "你会遇到锈血。你必须听清所有真相。",
						"french": "Tu rencontreras Rustblood. Tu dois entendre toute la vérité.",
						"spanish": "Conocerás a Rustblood. Debes escuchar toda la verdad.",
						"vietnamese": "Ngươi sẽ gặp Rustblood. Ngươi phải nghe tất cả sự thật.",
						"thai": "เจ้าจะได้พบกับรัสท์บลัด เจ้าจะต้องฟังความจริงทั้งหมด",
						"hindi": "तुम रस्टब्लड से मिलोगे। तुम्हें सारी सच्चाई सुननी होगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 진실은… 자네가 감당하기 어려울 걸세. 너무 많은 것이 부서질 테니.",
						"english": "That truth... you won't be able to bear it. Too much will break.",
						"japanese": "その真実は… 君には耐え難いだろう。あまりに多くのものが壊れるからだ。",
						"chinese": "那个真相……你承受不住的。会有太多东西因此破碎。",
						"french": "Cette vérité... tu ne pourras pas la supporter. Trop de choses seront brisées.",
						"spanish": "Esa verdad... no podrás soportarla. Demasiadas cosas se harán pedazos.",
						"vietnamese": "Sự thật đó… ngươi sẽ không chịu đựng nổi đâu. Quá nhiều thứ sẽ tan vỡ vì nó.",
						"thai": "ความจริงนั้น... เจ้าจะรับมือกับมันไม่ไหวหรอก จะมีอะไรมากมายต้องพังทลาย",
						"hindi": "वह सच… तुम सह नहीं पाओगे। बहुत कुछ टूट जाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "부서지더라도, 봐야겠어. 이것이 나의 정의니까.",
						"english": "Even if it breaks, I must see it. This is my justice.",
						"japanese": "壊れても、見なければ。それが私の正義だからだ。",
						"chinese": "即便会破碎，我也要看到。这是我的正义。",
						"french": "Même si ça brise, je dois le voir. C'est ma justice.",
						"spanish": "Aunque se rompa, debo verlo. Esta es mi justicia.",
						"vietnamese": "Dù có vỡ tan, ta cũng phải nhìn thấy. Đây là công lý của ta.",
						"thai": "ถึงแม้จะพังทลาย ฉันก็ต้องเห็น นี่คือความยุติธรรมของฉัน",
						"hindi": "टूट भी जाए तो भी, मुझे देखना होगा। यही मेरा न्याय है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "블레이드마스터 길드… 한때는 사막의 빛이었지.",
						"english": "The Blademaster Guild... once the light of the desert.",
						"japanese": "ブレードマスターギルド… かつては砂漠の光だった。",
						"chinese": "剑圣公会……曾是沙漠之光。",
						"french": "La Guilde des Maîtres-Lames... fut autrefois la lumière du désert.",
						"spanish": "El Gremio de Maestros de la Espada... una vez fue la luz del desierto.",
						"vietnamese": "Bang Hội Kiếm Sư… từng là ánh sáng của sa mạc.",
						"thai": "กิลด์เบลดมาสเตอร์... ครั้งหนึ่งเคยเป็นแสงสว่างแห่งทะเลทราย",
						"hindi": "ब्लेडमास्टर गिल्ड… कभी रेगिस्तान की रोशनी थी।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "지금은 그림자투성이잖아. 러스트블러드가 그 그림자의 중심에 있다고.",
						"english": "Now it's riddled with shadows. And Rustblood is at the heart of those shadows.",
						"japanese": "今は影だらけだ。ラストブラッドがその影の中心にいる。",
						"chinese": "现在却充满了阴影。而拉斯特布拉德就在那些阴影的中心。",
						"french": "Maintenant, c'est plein d'ombres. Et Rustblood est au cœur de ces ombres.",
						"spanish": "Ahora está plagado de sombras. Y Rustblood está en el centro de esas sombras.",
						"vietnamese": "Giờ đây, nó tràn ngập bóng tối. Và Rustblood đang ở trung tâm của những bóng tối đó.",
						"thai": "ตอนนี้มันเต็มไปด้วยเงามืด และรัสท์บลัดก็เป็นหัวใจของเงามืดเหล่านั้น",
						"hindi": "अब तो यह अंधेरे से भरा है। और रस्टब्लड उन अंधेरों के केंद्र में है।"
					}
				},
				{
					"content": {
						"korean": "그는 길드의 가장 깊은 곳을 지키는 자였어. 진실을… 가장 잘 아는 자였지.",
						"english": "He was the one guarding the guild's deepest secrets. The one who knew the truth... best.",
						"japanese": "彼はギルドの最も深い場所を守る者だった。真実を…最もよく知る者だった。",
						"chinese": "他是守护公会最深处的人。是那个……最了解真相的人。",
						"french": "Il était celui qui gardait les recoins les plus profonds de la guilde. Celui qui connaissait le mieux la vérité...",
						"spanish": "Él era quien custodiaba lo más profundo del gremio. Quien mejor conocía la verdad...",
						"vietnamese": "Hắn là người canh giữ nơi sâu thẳm nhất của bang hội. Kẻ biết sự thật… rõ nhất.",
						"thai": "เขาคือผู้พิทักษ์ส่วนที่ลึกที่สุดของกิลด์ ผู้ที่รู้ความจริง... ดีที่สุด",
						"hindi": "वह गिल्ड के सबसे गहरे रहस्यों का रक्षक था। वह जो सच्चाई... सबसे अच्छे से जानता था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "무슨 의미야? 그가 영웅이었다는 거야?",
						"english": "What do you mean? Was he a hero?",
						"japanese": "どういう意味だ？ 彼が英雄だったとでも？",
						"chinese": "什么意思？他是英雄吗？",
						"french": "Qu'est-ce que tu veux dire ? C'était un héros ?",
						"spanish": "¿Qué quieres decir? ¿Era un héroe?",
						"vietnamese": "Ý ngươi là gì? Hắn là một anh hùng sao?",
						"thai": "หมายความว่าไง? เขาเป็นวีรบุรุษเหรอ?",
						"hindi": "क्या मतलब है? क्या वह एक हीरो था?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
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
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "모든 것이 뒤틀렸네. 선이라 믿었던 것이 악이 되고…",
						"english": "Everything's twisted. What was believed to be good has become evil...",
						"japanese": "すべてが歪んだ。善と信じていたものが悪になり…",
						"chinese": "一切都扭曲了。曾被认为是善良的，却变成了邪恶……",
						"french": "Tout est tordu. Ce qui était considéré comme bon est devenu maléfique...",
						"spanish": "Todo está retorcido. Lo que se creía bueno se ha vuelto malvado...",
						"vietnamese": "Mọi thứ đã bị bóp méo. Những gì từng được tin là thiện giờ đã thành ác…",
						"thai": "ทุกสิ่งบิดเบี้ยวไปหมด สิ่งที่เชื่อว่าเป็นความดีกลับกลายเป็นความชั่วร้าย...",
						"hindi": "सब कुछ बिगड़ गया है। जिसे अच्छा माना था, वह बुराई बन गया है…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "러스트블러드는 왜 그렇게 변한 거지? 무엇이 그를 타락시켰어?",
						"english": "Why did Rustblood change like that? What corrupted him?",
						"japanese": "ラストブラッドはなぜあんな風に変わったんだ？ 何が彼を堕落させた？",
						"chinese": "拉斯特布拉德为什么会变成那样？是什么腐蚀了他？",
						"french": "Pourquoi Rustblood a-t-il changé ainsi ? Qu'est-ce qui l'a corrompu ?",
						"spanish": "¿Por qué Rustblood cambió así? ¿Qué lo corrompió?",
						"vietnamese": "Tại sao Rustblood lại thay đổi như vậy? Điều gì đã làm hắn tha hóa?",
						"thai": "ทำไมรัสท์บลัดถึงเปลี่ยนไปอย่างนั้น? อะไรทำให้เขาเสื่อมทราม?",
						"hindi": "रस्टब्लड ऐसा क्यों बदल गया? उसे किसने भ्रष्ट किया?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "타락이라 부를 수 있을까? 그는 그저… 진실을 파헤쳤을 뿐인데.",
						"english": "Can we call it corruption? He merely... uncovered the truth.",
						"japanese": "堕落と呼べるだろうか？ 彼はただ… 真実を暴いただけなのに。",
						"chinese": "能称之为堕落吗？他只是……揭露了真相而已。",
						"french": "Peut-on appeler ça de la corruption ? Il a juste... déterré la vérité.",
						"spanish": "¿Podemos llamarlo corrupción? Él simplemente... desenterró la verdad.",
						"vietnamese": "Liệu có thể gọi đó là sự tha hóa không? Hắn chỉ… khám phá ra sự thật mà thôi.",
						"thai": "เราจะเรียกว่าการเสื่อมทรามได้ไหม? เขาก็แค่... เปิดเผยความจริงเท่านั้นเอง",
						"hindi": "क्या हम इसे भ्रष्टाचार कह सकते हैं? उसने बस… सच का पर्दाफाश किया है।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실? 그게 뭔데?",
						"english": "The truth? What is it?",
						"japanese": "真実？ それは何だ？",
						"chinese": "真相？那是什么？",
						"french": "La vérité ? Qu'est-ce que c'est ?",
						"spanish": "¿La verdad? ¿Qué es?",
						"vietnamese": "Sự thật? Đó là gì?",
						"thai": "ความจริง? มันคืออะไร?",
						"hindi": "सच? वह क्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 한때 '질서의 칼날'이었다. 길드의 가장 고귀한 신념을 구현한 자.",
						"english": "He was once 'Blade of Order,' embodying the guild's noblest ideals.",
						"japanese": "かつて彼は「秩序の刃」だった。ギルドの最も高貴な信念を体現する者。",
						"chinese": "他曾是“秩序之刃”，公会最崇高信念的化身。",
						"french": "Il était jadis la 'Lame de l'Ordre', l'incarnation des plus nobles idéaux de la guilde.",
						"spanish": "Una vez fue la 'Hoja del Orden', la encarnación de los ideales más nobles del gremio.",
						"vietnamese": "Anh ta từng là 'Lưỡi Kiếm Trật Tự', người thể hiện những lý tưởng cao quý nhất của bang hội.",
						"thai": "เขาเคยเป็น 'คมดาบแห่งระเบียบ' ผู้เป็นตัวแทนของอุดมการณ์อันสูงส่งที่สุดของกิลด์",
						"hindi": "वह कभी 'व्यवस्था का ब्लेड' था, गिल्ड के सबसे महान आदर्शों का प्रतीक।"
					},
					"speaker": "amir",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "러스트블러드의 본명은 실라스. 그는 '질서의 칼날' 최고 집행관이었어.",
						"english": "Rustblood's true name is Silas. He was the Supreme Enforcer of the 'Blade of Order.'",
						"japanese": "ラストブラッドの本名はサイラス。彼は「秩序の刃」の最高執行官だった。",
						"chinese": "拉斯特布拉德的真名是赛拉斯。他曾是“秩序之刃”的最高执法官。",
						"french": "Le vrai nom de Rustblood est Silas. Il était le Suprême Exécuteur de la 'Lame de l'Ordre'.",
						"spanish": "El verdadero nombre de Rustblood es Silas. Fue el Ejecutor Supremo de la 'Hoja del Orden'.",
						"vietnamese": "Tên thật của Rustblood là Silas. Anh ta từng là Chấp pháp tối cao của 'Lưỡi Kiếm Trật Tự'.",
						"thai": "ชื่อจริงของรัสต์บลัดคือไซลาส เขาเป็นผู้บังคับใช้สูงสุดของ 'คมดาบแห่งระเบียบ'",
						"hindi": "रस्टब्लड का असली नाम साइलस है। वह 'व्यवस्था के ब्लेड' का सर्वोच्च प्रवर्तक था।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "실라스… 그 전설 속 영웅이 러스트블러드였다고?",
						"english": "Silas... The legendary hero was Rustblood?",
						"japanese": "サイラス… あの伝説の英雄がラストブラッドだったと？",
						"chinese": "赛拉斯……那个传说中的英雄就是拉斯特布拉德？",
						"french": "Silas... Le héros légendaire était Rustblood ?",
						"spanish": "¿Silas... El héroe legendario era Rustblood?",
						"vietnamese": "Silas... Anh hùng trong truyền thuyết đó là Rustblood ư?",
						"thai": "ไซลาส... ฮีโร่ในตำนานคนนั้นคือรัสต์บลัดหรือ?",
						"hindi": "साइलस... वह महान नायक रस्टब्लड था?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그는 길드의 기록들이 조작되었음을 알았지. 정의가 탐욕으로 덮였고…",
						"english": "He discovered the guild's records were faked. Justice was overshadowed by greed...",
						"japanese": "彼はギルドの記録が改ざんされていることを知った。正義は貪欲に覆い隠され…",
						"chinese": "他发现公会的记录被篡改了。正义被贪婪所掩盖…",
						"french": "Il découvrit que les registres de la guilde avaient été falsifiés. La justice était éclipsée par la cupidité...",
						"spanish": "Descubrió que los registros del gremio habían sido falsificados. La justicia fue oscurecida por la codicia...",
						"vietnamese": "Anh ta phát hiện ra các ghi chép của bang hội đã bị làm giả. Công lý bị lòng tham che mờ...",
						"thai": "เขาพบว่าบันทึกของกิลด์ถูกบิดเบือน ความยุติธรรมถูกบดบังด้วยความโลภ...",
						"hindi": "उसने पाया कि गिल्ड के रिकॉर्ड फर्जी थे। न्याय को लालच ने ढक लिया था..."
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "기록이… 뒤섞였다는 게 그런 뜻이었어?",
						"english": "Records... that's what \"muddled\" meant?",
						"japanese": "記録が…「ごちゃ混ぜになった」とはそういう意味だったのか？",
						"chinese": "记录……“混淆”是这个意思吗？",
						"french": "Les registres... c'est ce que voulait dire \"mêlés\" ?",
						"spanish": "¿Los registros... eso era lo que significaba \"revueltos\"?",
						"vietnamese": "Ghi chép... đó là ý nghĩa của việc \"xáo trộn\" ư?",
						"thai": "บันทึก... นั่นคือความหมายของคำว่า \"ปนเปกัน\" หรือ?",
						"hindi": "रिकॉर्ड... क्या 'गड़बड़' का यही मतलब था?"
					}
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그가 지키려던 모든 신념이 부서졌어. 이 사막의 폐허처럼…",
						"english": "All the beliefs he defended shattered. Like these desert ruins...",
						"japanese": "彼が守ろうとしたすべての信念が打ち砕かれた。この砂漠の廃墟のように…",
						"chinese": "他所捍卫的一切信念都破碎了。就像这片沙漠废墟一样…",
						"french": "Toutes les croyances qu'il défendait se brisèrent. Comme ces ruines désertiques...",
						"spanish": "Todas las creencias que defendía se hicieron añicos. Como estas ruinas del desierto...",
						"vietnamese": "Tất cả những niềm tin anh ta bảo vệ đều tan vỡ. Như những tàn tích sa mạc này...",
						"thai": "ความเชื่อทั้งหมดที่เขาปกป้องพังทลายลง เหมือนซากปรักหักพังในทะเลทรายแห่งนี้...",
						"hindi": "उसके सभी विश्वास टूट गए, जिनकी वह रक्षा कर रहा था। इन रेगिस्तानी खंडहरों की तरह..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 '영혼의 칼날'은…?",
						"english": "Then the 'Blade of Souls'... ?",
						"japanese": "では「魂の刃」は…？",
						"chinese": "那么“灵魂之刃”呢……？",
						"french": "Alors la 'Lame des Âmes'... ?",
						"spanish": "¿Entonces la 'Hoja de las Almas'... ?",
						"vietnamese": "Vậy 'Lưỡi Kiếm Linh Hồn' thì sao...?",
						"thai": "แล้ว 'คมดาบแห่งวิญญาณ' ล่ะ...?",
						"hindi": "तो 'आत्माओं का ब्लेड'... ?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "실라스는 영혼의 칼날이 모든 기만을 끝낼 유일한 해방이라고 믿었네.",
						"english": "Silas believed the Blade of Souls was the only liberation that could end all deceit.",
						"japanese": "サイラスは魂の刃こそが、すべての欺瞞を終わらせる唯一の解放だと信じていた。",
						"chinese": "赛拉斯相信“灵魂之刃”是唯一能终结所有欺骗的解放。",
						"french": "Silas croyait que la Lame des Âmes était la seule libération capable de mettre fin à toute tromperie.",
						"spanish": "Silas creía que la Hoja de las Almas era la única liberación que podía acabar con todo engaño.",
						"vietnamese": "Silas tin rằng Lưỡi Kiếm Linh Hồn là sự giải thoát duy nhất có thể chấm dứt mọi sự lừa dối.",
						"thai": "ไซลาสเชื่อว่าคมดาบแห่งวิญญาณคือการปลดปล่อยเพียงหนึ่งเดียวที่จะยุติการหลอกลวงทั้งหมดได้",
						"hindi": "साइलस का मानना था कि आत्माओं का ब्लेड ही एकमात्र मुक्ति थी जो सभी धोखे को समाप्त कर सकती थी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모든 게 거짓이었다고? 내가 믿었던 모든 것이?",
						"english": "Everything was a lie? Everything I believed in?",
						"japanese": "すべてが嘘だったと？私が信じていたすべてが？",
						"chinese": "一切都是谎言？我所相信的一切？",
						"french": "Tout était un mensonge ? Tout ce que je croyais ?",
						"spanish": "¿Todo era mentira? ¿Todo lo que creía?",
						"vietnamese": "Mọi thứ đều là dối trá ư? Tất cả những gì tôi đã tin tưởng?",
						"thai": "ทุกสิ่งเป็นเรื่องโกหกหรือ? ทุกสิ่งที่ฉันเคยเชื่อ?",
						"hindi": "सब कुछ झूठ था? वह सब कुछ जो मैंने विश्वास किया था?"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "모래 폭풍 속, 한때 영웅이었던 자가 모습을 드러냈다. 그의 이름은 실라스.",
						"english": "Amidst the sandstorm, one who was once a hero appeared. His name is Silas.",
						"japanese": "砂嵐の中、かつて英雄だった者が姿を現した。彼の名はサイラス。",
						"chinese": "沙尘暴中，一位昔日的英雄现身了。他的名字是赛拉斯。",
						"french": "Au milieu de la tempête de sable, celui qui fut autrefois un héros apparut. Son nom est Silas.",
						"spanish": "En medio de la tormenta de arena, apareció aquel que una vez fue un héroe. Su nombre es Silas.",
						"vietnamese": "Giữa bão cát, một người từng là anh hùng đã xuất hiện. Tên anh ta là Silas.",
						"thai": "ท่ามกลางพายุทราย ผู้ที่เคยเป็นวีรบุรุษก็ปรากฏกายขึ้น เขามีชื่อว่าไซลาส",
						"hindi": "रेत के तूफान के बीच, एक नायक सामने आया। उसका नाम साइलस है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						4
					]
				},
				{
					"content": {
						"korean": "왔군. 진실을 찾아 헤매는 어리석은 자여.",
						"english": "You've arrived, foolish seeker of truth.",
						"japanese": "来たか。真実を求める愚かな者よ。",
						"chinese": "你来了。寻求真相的愚蠢之人。",
						"french": "Te voilà. Toi, l'insensé qui erre en quête de vérité.",
						"spanish": "Has llegado. Necio que vaga en busca de la verdad.",
						"vietnamese": "Ngươi đến rồi à, kẻ ngu ngốc đi tìm sự thật.",
						"thai": "มาแล้วสินะ เจ้าคนโง่ที่หลงทางตามหาความจริง",
						"hindi": "तुम आ गए, सत्य की तलाश में भटकने वाले मूर्ख।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "실라스… 네가 러스트블러드였다니.",
						"english": "Silas... You were Rustblood?",
						"japanese": "サイラス… お前がラストブラッドだったとはな。",
						"chinese": "赛拉斯……你竟然是锈血。",
						"french": "Silas... C'était donc toi, Rustblood.",
						"spanish": "Silas... ¿Así que tú eras Rustblood?",
						"vietnamese": "Silas... Ngươi chính là Rustblood sao.",
						"thai": "ไซลัส... เจ้าคือรัสต์บลัดอย่างนั้นหรือ?",
						"hindi": "सिलास... तुम रस्टब्लड थे?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "난 그저 길드의 위선을 끝내고 싶었을 뿐. 너희 블레이드마스터들이 외면한 진실을 말이야.",
						"english": "I merely wished to end the guild's hypocrisy. The truth you Blademasters chose to ignore.",
						"japanese": "私はただ、ギルドの偽善を終わらせたかっただけだ。お前たちブレードマスターが見て見ぬふりをしてきた真実をな。",
						"chinese": "我只是想终结公会的伪善。你们这些刀剑大师所忽视的真相。",
						"french": "Je voulais seulement mettre fin à l'hypocrisie de la guilde. La vérité que vous, les Maîtres-lames, avez choisi d'ignorer.",
						"spanish": "Yo solo quería acabar con la hipocresía del gremio. La verdad que vosotros, los Maestros de la Espada, ignorasteis.",
						"vietnamese": "Ta chỉ muốn chấm dứt sự đạo đức giả của bang hội. Sự thật mà các ngươi, những Kiếm sư, đã ngoảnh mặt làm ngơ.",
						"thai": "ข้าเพียงแค่อยากยุติความหน้าไหว้หลังหลอกของกิลด์ ความจริงที่พวกเจ้าเหล่าเบลดมาสเตอร์เมินเฉยต่างหาก",
						"hindi": "मैं तो बस गिल्ड के पाखंड को खत्म करना चाहता था। वह सच जिसे तुम ब्लेडमास्टर्स ने नज़रअंदाज़ किया।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 이 모든 파괴의 이유라고? 네 신념이 부서져서?",
						"english": "That's the reason for all this destruction? Because your beliefs were shattered?",
						"japanese": "それがこの破壊の全ての理由だと？お前の信念が砕かれたからか？",
						"chinese": "这就是所有破坏的理由？因为你的信仰破碎了？",
						"french": "C'est ça, la raison de toute cette destruction ? Parce que tes convictions ont été brisées ?",
						"spanish": "¿Esa es la razón de tanta destrucción? ¿Porque tus creencias se hicieron pedazos?",
						"vietnamese": "Đó là lý do cho tất cả sự hủy diệt này sao? Vì niềm tin của ngươi đã sụp đổ ư?",
						"thai": "นั่นคือเหตุผลของการทำลายล้างทั้งหมดนี้งั้นหรือ? เพียงเพราะความเชื่อของเจ้าพังทลาย?",
						"hindi": "यही है इस सारी तबाही का कारण? क्योंकि तुम्हारे विश्वास टूट गए?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 믿는 정의? 그건 모래성일 뿐이다. 진실 앞에서 언제든 무너질 환상.",
						"english": "Justice you believe in? It's nothing but a sandcastle. An illusion that will crumble before the truth.",
						"japanese": "お前が信じる正義？それは砂上の楼閣にすぎない。真実の前には、いつだって崩れ去る幻想だ。",
						"chinese": "你所相信的正义？那不过是沙堡。在真相面前随时都会崩塌的幻象。",
						"french": "La justice à laquelle tu crois ? Ce n'est qu'un château de sable. Une illusion qui s'effondrera à tout moment face à la vérité.",
						"spanish": "¿La justicia en la que crees? Es solo un castillo de arena. Una ilusión que se desmoronará ante la verdad en cualquier momento.",
						"vietnamese": "Công lý mà ngươi tin tưởng ư? Đó chỉ là lâu đài cát. Một ảo ảnh sẽ sụp đổ bất cứ lúc nào trước sự thật.",
						"thai": "ความยุติธรรมที่เจ้าเชื่อ? มันเป็นแค่ปราสาททรายเท่านั้นเอง ภาพลวงตาที่จะพังทลายลงเมื่อเจอความจริง",
						"hindi": "जिस न्याय में तुम विश्वास करते हो? वह बस रेत का महल है। एक भ्रम जो सच्चाई के सामने कभी भी बिखर जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 난 이제 알아. 허구가 아닌 진짜 정의를 세울 거야.",
						"english": "No... I know now. I will establish true justice, not a fiction.",
						"japanese": "いいや… 私はもう知っている。虚構ではない、真の正義を築き上げる。",
						"chinese": "不……我现在明白了。我要建立真正的正义，而非虚构。",
						"french": "Non... Je sais maintenant. Je vais établir une vraie justice, pas une fiction.",
						"spanish": "No... Ahora lo sé. Estableceré una verdadera justicia, no una ficción.",
						"vietnamese": "Không... Ta đã hiểu rồi. Ta sẽ kiến tạo công lý đích thực, không phải hư cấu.",
						"thai": "ไม่... ตอนนี้ข้ารู้แล้ว ข้าจะสร้างความยุติธรรมที่แท้จริง ไม่ใช่เรื่องแต่ง",
						"hindi": "नहीं... मैं अब जान गया हूँ। मैं एक वास्तविक न्याय स्थापित करूँगा, न कि एक कल्पना।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						1
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "실라스… 그만하게. 더 이상 비극은 없어야 해.",
						"english": "Silas... Stop this. There should be no more tragedy.",
						"japanese": "サイラス… もうやめろ。これ以上悲劇はあってはならない。",
						"chinese": "赛拉斯……住手吧。不应该再有悲剧了。",
						"french": "Silas... Arrête ça. Il ne doit plus y avoir de tragédie.",
						"spanish": "Silas... Detente. No debe haber más tragedia.",
						"vietnamese": "Silas... Dừng lại đi. Không nên có thêm bi kịch nào nữa.",
						"thai": "ไซลัส... พอเถอะ ไม่ควรมีโศกนาฏกรรมอีกต่อไปแล้ว",
						"hindi": "सिलास... रुक जाओ। अब और त्रासदी नहीं होनी चाहिए।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 증인도 함께 사라지겠군. 이 사막의 진실은 오직 파괴만이 남을 테니.",
						"english": "This witness will vanish along with it. Only destruction will remain as the truth of this desert.",
						"japanese": "この証人も共に消え去るだろう。この砂漠の真実は、ただ破壊のみが残るのだから。",
						"chinese": "这位证人也将一同消失。这片沙漠的真相，只剩下毁灭。",
						"french": "Ce témoin disparaîtra également. La vérité de ce désert ne laissera que la destruction.",
						"spanish": "Este testigo también desaparecerá. La verdad de este desierto solo dejará destrucción.",
						"vietnamese": "Chứng nhân này cũng sẽ biến mất cùng với nó. Sự thật về sa mạc này sẽ chỉ còn lại sự hủy diệt.",
						"thai": "พยานคนนี้ก็จะหายไปด้วยเช่นกัน ความจริงของทะเลทรายแห่งนี้จะเหลือไว้เพียงการทำลายล้างเท่านั้น",
						"hindi": "यह गवाह भी इसी के साथ गायब हो जाएगा। इस रेगिस्तान का सच सिर्फ़ विनाश ही छोड़ेगा।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "direction",
					"direction": "down",
					"speaker": "amir",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…싸우자. 너의 거짓된 정의를 끝내주겠어.",
						"english": "...Let's fight. I'll put an end to your false justice.",
						"japanese": "…戦おう。お前の偽りの正義を終わらせてやる。",
						"chinese": "……战斗吧。我将终结你虚伪的正义。",
						"french": "...Battons-nous. Je mettrai fin à ta fausse justice.",
						"spanish": "...Luchemos. Pondré fin a tu falsa justicia.",
						"vietnamese": "...Chiến thôi. Ta sẽ kết thúc cái công lý giả dối của ngươi.",
						"thai": "...มาสู้กัน ฉันจะยุติความยุติธรรมที่หลอกลวงของเจ้าเอง",
						"hindi": "...चलो लड़ते हैं। मैं तुम्हारे झूठे न्याय का अंत करूँगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래폭풍이 모든 것을 삼켰다. 진실은 다시 감춰졌다.",
						"english": "The sandstorm swallowed everything. The truth was hidden again.",
						"japanese": "砂嵐が全てを飲み込んだ。真実は再び隠された。",
						"chinese": "沙暴吞噬了一切。真相再次被掩盖。",
						"french": "La tempête de sable a tout englouti. La vérité a été de nouveau cachée.",
						"spanish": "La tormenta de arena lo devoró todo. La verdad fue ocultada de nuevo.",
						"vietnamese": "Bão cát nuốt chửng mọi thứ. Sự thật lại bị che giấu.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง ความจริงถูกซ่อนไว้อีกครั้ง",
						"hindi": "रेत के तूफान ने सब कुछ निगल लिया। सच्चाई फिर से छिप गई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "약한 자여. 너의 정의는 영원히 모래 속에 묻힐 것이다.",
						"english": "Weak one. Your justice will be buried forever in the sand.",
						"japanese": "弱き者よ。お前の正義は永遠に砂の中に埋もれるだろう。",
						"chinese": "弱者啊。你的公义将永远被埋葬在沙中。",
						"french": "Faible créature. Ta justice sera à jamais enfouie dans le sable.",
						"spanish": "Débil. Tu justicia será enterrada para siempre en la arena.",
						"vietnamese": "Kẻ yếu đuối. Công lý của ngươi sẽ vĩnh viễn bị chôn vùi trong cát.",
						"thai": "คนอ่อนแอเอ๋ย ความยุติธรรมของเจ้าจะถูกฝังอยู่ในทรายตลอดไป",
						"hindi": "कमजोर व्यक्ति। तुम्हारा न्याय हमेशा के लिए रेत में दफन हो जाएगा।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 진실은… 반드시 드러날 거야.",
						"english": "It's not over yet. The truth… will surely be revealed.",
						"japanese": "まだ…終わっていない。真実は…必ず明らかになるだろう。",
						"chinese": "还没…结束。真相…终将大白。",
						"french": "Ce n'est pas encore… fini. La vérité… sera sûrement révélée.",
						"spanish": "Aún… no ha terminado. La verdad… se revelará sin falta.",
						"vietnamese": "Chưa… kết thúc đâu. Sự thật… nhất định sẽ được phơi bày.",
						"thai": "ยัง…ไม่จบ ความจริง…จะต้องถูกเปิดเผย",
						"hindi": "अभी… खत्म नहीं हुआ है। सच्चाई… निश्चित रूप से सामने आएगी।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "러스트블러드, 실라스가 쓰러졌다. 그의 칼날은 더 이상 진실을 베지 못했다.",
						"english": "Rustblood, Silas, has fallen. His blade could no longer cut through the truth.",
						"japanese": "ラストブラッド、サイラスは倒れた。彼の刃はもはや真実を斬ることはできなかった。",
						"chinese": "锈血，赛拉斯倒下了。他的刀刃再也无法斩断真相。",
						"french": "Rustblood, Silas, est tombé. Son épée ne pouvait plus trancher la vérité.",
						"spanish": "Rustblood, Silas, ha caído. Su hoja ya no pudo cortar la verdad.",
						"vietnamese": "Rustblood, Silas đã gục ngã. Lưỡi kiếm của hắn không thể cắt xuyên sự thật được nữa.",
						"thai": "รัสต์บลัด, ไซลัสล้มลงแล้ว คมดาบของเขาไม่สามารถผ่าความจริงได้อีกต่อไป",
						"hindi": "रस्टब्लड, सिलास गिर गया। उसकी तलवार अब सच को काट नहीं पाई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "결국… 너도 알게 될 거다. 이 사막의 정의는… 언제나 모래 위에 지어졌다는 것을.",
						"english": "Eventually… you will also learn. The justice of this desert… was always built on sand.",
						"japanese": "結局…お前も知るだろう。この砂漠の正義は…常に砂の上に築かれていたことを。",
						"chinese": "终究…你也会明白。这片沙漠的公义…始终建立在沙之上。",
						"french": "Finalement… tu le sauras aussi. La justice de ce désert… a toujours été bâtie sur le sable.",
						"spanish": "Al final… tú también lo sabrás. La justicia de este desierto… siempre fue construida sobre la arena.",
						"vietnamese": "Cuối cùng… ngươi cũng sẽ biết thôi. Công lý của sa mạc này… vốn dĩ luôn được xây trên cát.",
						"thai": "ในที่สุด…เจ้าก็จะรู้เช่นกัน ความยุติธรรมของทะเลทรายแห่งนี้…ถูกสร้างขึ้นบนผืนทรายเสมอมา",
						"hindi": "आखिरकार… तुम भी जान जाओगे। इस रेगिस्तान का न्याय… हमेशा रेत पर ही बना था।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "진실은… 너를 구원하지 못할 거야.",
						"english": "The truth… will not save you.",
						"japanese": "真実は…お前を救えないだろう。",
						"chinese": "真相…无法救赎你。",
						"french": "La vérité… ne te sauvera pas.",
						"spanish": "La verdad… no te salvará.",
						"vietnamese": "Sự thật… sẽ không cứu rỗi ngươi đâu.",
						"thai": "ความจริง…จะไม่ช่วยเจ้า",
						"hindi": "सच्चाई… तुम्हें बचा नहीं पाएगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…공허하다. 이것이 진실을 얻은 대가인가.",
						"english": "…Empty. Is this the price for obtaining the truth?",
						"japanese": "…虚しい。これが真実を得た代償なのか。",
						"chinese": "…空虚。这就是获得真相的代价吗？",
						"french": "…Le vide. Est-ce le prix à payer pour la vérité ?",
						"spanish": "…Vacío. ¿Es este el precio por obtener la verdad?",
						"vietnamese": "…Trống rỗng. Đây là cái giá phải trả để có được sự thật sao?",
						"thai": "…ว่างเปล่า นี่คือราคาของการได้มาซึ่งความจริงงั้นหรือ",
						"hindi": "…खालीपन। क्या यह सच जानने की कीमत है?"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그는 결국… 진실에 갇힌 채 떠났군.",
						"english": "He ultimately… left, trapped in the truth.",
						"japanese": "彼は結局…真実に囚われたまま去っていった。",
						"chinese": "他终究…被困于真相中离去了。",
						"french": "Il est finalement… parti, piégé par la vérité.",
						"spanish": "Él finalmente… partió, atrapado en la verdad.",
						"vietnamese": "Hắn ta cuối cùng… đã ra đi, bị giam cầm bởi sự thật.",
						"thai": "ในที่สุดเขา…ก็จากไปโดยถูกกักขังอยู่ในความจริง",
						"hindi": "वह अंततः… सच्चाई में फँसकर चला गया।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이제 어디로 가야 하지? 모든 것이 무너졌는데.",
						"english": "Where should I go now? Everything has fallen apart.",
						"japanese": "もうどこへ行けばいい？全てが崩れ去ったのに。",
						"chinese": "现在该去哪里？一切都已崩塌。",
						"french": "Où dois-je aller maintenant ? Tout s'est effondré.",
						"spanish": "¿Adónde debo ir ahora? Todo se ha derrumbado.",
						"vietnamese": "Bây giờ phải đi đâu? Mọi thứ đã sụp đổ rồi.",
						"thai": "ตอนนี้ควรไปที่ไหนดี? ทุกสิ่งพังทลายลงแล้ว",
						"hindi": "अब कहाँ जाना चाहिए? सब कुछ ढह गया है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "새로운 길은… 너의 손에 달려있네. 부서진 모래 위에서….",
						"english": "The new path… lies in your hands. Upon the shattered sand…",
						"japanese": "新たな道は…お前の手に委ねられている。砕けた砂の上で…",
						"chinese": "新的道路…掌握在你的手中。在这破碎的沙之上…",
						"french": "Le nouveau chemin… est entre tes mains. Sur le sable brisé…",
						"spanish": "El nuevo camino… está en tus manos. Sobre la arena rota…",
						"vietnamese": "Con đường mới… nằm trong tay ngươi. Trên lớp cát vỡ nát…",
						"thai": "เส้นทางใหม่…อยู่ในมือของเจ้าแล้ว บนผืนทรายที่แตกสลาย…",
						"hindi": "नया रास्ता… तुम्हारे हाथों में है। टूटी हुई रेत पर…"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"모래폭풍은 잦아들었지만, 사막의 침묵은 더 깊어졌다.",
			"진실은 드러났다. 그러나 그 무게는 구원이 아닌 고통이었다.",
			"부서진 이상 위에 선 자, 새로운 길을 걸어야만 했다.",
			"모래는 모든 것을 덮는다. 영원히."
		],
		"english": [
			"The sandstorm subsided, but the desert's silence deepened.",
			"The truth was revealed. But its weight was not salvation, but agony.",
			"One who stood upon shattered ideals, had to walk a new path.",
			"Sand covers all. Forever."
		],
		"japanese": [
			"砂嵐は収まったが、砂漠の沈黙はさらに深まった。",
			"真実は明らかになった。しかし、その重みは救いではなく苦痛であった。",
			"砕かれた理想の上に立つ者、新たな道を歩まねばならなかった。",
			"砂はすべてを覆う。永遠に。"
		],
		"chinese": [
			"沙尘暴平息，但沙漠的寂静却更加深沉。",
			"真相浮现。然而其重并非救赎，而是痛苦。",
			"站在破碎理想之上者，不得不踏上新的道路。",
			"沙尘覆盖一切。永恒。"
		],
		"french": [
			"La tempête de sable s'est calmée, mais le silence du désert s'est approfondi.",
			"La vérité fut révélée. Mais son poids n'était pas le salut, mais l'agonie.",
			"Celui qui se tenait sur des idéaux brisés, dut emprunter un nouveau chemin.",
			"Le sable recouvre tout. Pour toujours."
		],
		"spanish": [
			"La tormenta de arena amainó, pero el silencio del desierto se hizo más profundo.",
			"La verdad fue revelada. Pero su peso no fue salvación, sino agonía.",
			"Quien se mantuvo sobre ideales rotos, tuvo que andar un nuevo camino.",
			"La arena lo cubre todo. Para siempre."
		],
		"vietnamese": [
			"Bão cát đã lắng xuống, nhưng sự im lặng của sa mạc càng thêm sâu sắc.",
			"Sự thật đã được tiết lộ. Nhưng gánh nặng của nó không phải là sự cứu rỗi, mà là nỗi đau đớn.",
			"Kẻ đứng trên những lý tưởng tan vỡ, buộc phải bước đi trên một con đường mới.",
			"Cát che phủ mọi thứ. Vĩnh viễn."
		],
		"thai": [
			"พายุทรายสงบลง แต่ความเงียบของทะเลทรายกลับลึกลงไปอีก",
			"ความจริงปรากฏแล้ว แต่ภาระของมันไม่ใช่ความรอด หากแต่เป็นความทรมาน",
			"ผู้ที่ยืนอยู่บนอุดมคติที่แตกสลาย จะต้องเดินบนเส้นทางใหม่",
			"ทรายปกคลุมทุกสิ่ง ตลอดกาล"
		],
		"hindi": [
			"रेत का तूफान थम गया, लेकिन रेगिस्तान की खामोशी और गहरी हो गई।",
			"सच सामने आया। लेकिन उसका भार मोक्ष नहीं, बल्कि पीड़ा था।",
			"जो टूटे हुए आदर्शों पर खड़ा था, उसे एक नई राह पर चलना पड़ा।",
			"रेत सब कुछ ढक लेती है। हमेशा के लिए।"
		]
	},
	"prologue": {
		"korean": [
			"모래. 모든 진실을 삼켜버린 망각의 바다.",
			"그 위를 걷는 자, 마침내 허구의 장막을 찢는다.",
			"그러나 밝혀진 것은, 영광 뒤에 숨겨진 추악한 비극.",
			"모든 이상이 무너진 자리, 오직 공허만이 가득했다."
		],
		"english": [
			"Sand. A sea of oblivion that swallowed all truth.",
			"One who walks upon it, finally tears open the veil of fiction.",
			"But what was revealed was an ugly tragedy hidden behind glory.",
			"Where all ideals collapsed, only emptiness remained."
		],
		"japanese": [
			"砂。すべての真実を飲み込んだ忘却の海。",
			"その上を歩む者、ついに虚構の帳を裂く。",
			"しかし、明らかにされたのは、栄光の裏に隠された醜い悲劇であった。",
			"すべての理想が崩れ去った場所には、ただ虚無だけが満ちていた。"
		],
		"chinese": [
			"沙。吞噬所有真相的遗忘之海。",
			"漫步其上者，终将撕裂虚构的帷幕。",
			"然而揭示的，却是荣耀背后隐藏的丑陋悲剧。",
			"所有理想崩塌之处，唯有虚无充斥。"
		],
		"french": [
			"Sable. Une mer d'oubli qui a englouti toute vérité.",
			"Celui qui y marche, déchire enfin le voile de la fiction.",
			"Mais ce qui fut révélé, était une laide tragédie cachée derrière la gloire.",
			"Là où tous les idéaux s'effondraient, seul le vide régnait."
		],
		"spanish": [
			"Arena. Un mar de olvido que se tragó toda la verdad.",
			"Quien camina sobre él, finalmente desgarra el velo de la ficción.",
			"Pero lo que se reveló fue una fea tragedia oculta tras la gloria.",
			"Donde todos los ideales colapsaron, solo el vacío reinó."
		],
		"vietnamese": [
			"Cát. Biển lãng quên nuốt chửng mọi sự thật.",
			"Kẻ bước đi trên đó, cuối cùng xé toạc màn màn hư cấu.",
			"Nhưng điều được tiết lộ, lại là một bi kịch xấu xí ẩn sau vinh quang.",
			"Nơi mọi lý tưởng sụp đổ, chỉ còn sự trống rỗng bao trùm."
		],
		"thai": [
			"ทราย ทะเลแห่งการหลงลืมที่กลืนกินทุกความจริง",
			"ผู้ที่ก้าวเดินบนนั้น ในที่สุดก็ฉีกม่านแห่งความเท็จ",
			"แต่สิ่งที่ถูกเปิดเผยคือโศกนาฏกรรมอันน่าเกลียดที่ซ่อนอยู่เบื้องหลังความรุ่งโรจน์",
			"ณ ที่ซึ่งอุดมคติทั้งมวลพังทลาย มีเพียงความว่างเปล่าเท่านั้นที่หลงเหลืออยู่"
		],
		"hindi": [
			"रेत। विस्मृति का एक सागर जिसने सारे सच निगल लिए।",
			"जो उस पर चलता है, अंततः कल्पना के पर्दे को चीर देता है।",
			"लेकिन जो सामने आया, वह महिमा के पीछे छिपी एक बदसूरत त्रासदी थी।",
			"जहाँ सारे आदर्श ढह गए, वहाँ केवल शून्यता ही व्याप्त थी।"
		]
	}
} as const;
