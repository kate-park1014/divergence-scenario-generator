export const scenario_snowy_eira_85_05 = {
	"scenario_id": "snowy_eira_85_05",
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
		"pool_id": "pool_EternalSnow_Eira_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…오셨군요. 에이라님의 품으로.",
						"english": "...You've arrived. Into Aira's embrace.",
						"japanese": "…お越しになりましたね。エイラ様の御許へ。",
						"chinese": "……您来了。来到艾拉大人的怀抱。",
						"french": "...Vous êtes arrivé. Dans l'étreinte d'Aira.",
						"spanish": "...Ha llegado. Al abrazo de Aira.",
						"vietnamese": "...Ngài đã đến rồi. Đến với vòng tay của Aira.",
						"thai": "...ท่านมาถึงแล้ว สู่หัตถ์ของไอรา",
						"hindi": "...आप आ गए। एरा के आलिंगन में।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "힐드… 아직도 그 말을 믿는 거야?",
						"english": "Hild... do you still believe those words?",
						"japanese": "ヒルド…まだその言葉を信じているのかい？",
						"chinese": "希尔德……你还相信那些话吗？",
						"french": "Hild... tu crois encore à ces mots ?",
						"spanish": "Hild... ¿todavía crees esas palabras?",
						"vietnamese": "Hild... ngươi vẫn tin vào những lời đó ư?",
						"thai": "ฮิลด์... เจ้ายงคงเชื่อคำพูดเหล่านั้นอยู่หรือ?",
						"hindi": "हिल्ड... क्या तुम अभी भी उन बातों पर विश्वास करते हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳만큼 안전한 곳은 없어요. 이 평화는… 영원할 거예요.",
						"english": "Nowhere is as safe as here. This peace... it will last forever.",
						"japanese": "ここほど安全な場所はないわ。この平和は…永遠に続くのよ。",
						"chinese": "没有比这里更安全的地方了。这份宁静……将是永恒的。",
						"french": "Il n'y a pas d'endroit plus sûr qu'ici. Cette paix... elle sera éternelle.",
						"spanish": "No hay lugar más seguro que este. Esta paz... será eterna.",
						"vietnamese": "Không nơi nào an toàn như nơi đây. Sự bình yên này... sẽ là vĩnh cửu.",
						"thai": "ไม่มีที่ใดปลอดภัยเท่าที่นี่แล้ว สันติสุขนี้... จะคงอยู่ชั่วนิรันดร์",
						"hindi": "यहाँ से ज़्यादा सुरक्षित जगह कोई नहीं है। यह शांति... हमेशा के लिए रहेगी।"
					}
				},
				{
					"content": {
						"korean": "힐드의 눈동자는 흔들림이 없었다. 그녀는 진심으로 믿고 있었다.",
						"english": "Hilde's eyes held steady. She truly believed.",
						"japanese": "ヒルデの瞳は揺らがなかった。彼女は心から信じていた。",
						"chinese": "希尔德的眼睛没有丝毫动摇。她真心相信着。",
						"french": "Les yeux d'Hilde restèrent inébranlables. Elle y croyait sincèrement.",
						"spanish": "Los ojos de Hilde no titubearon. Ella creía de verdad.",
						"vietnamese": "Ánh mắt của Hilde không hề dao động. Cô ấy thực sự tin tưởng.",
						"thai": "ดวงตาของฮิลเดไม่สั่นคลอน เธอเชื่อมั่นอย่างแท้จริง",
						"hindi": "हिल्डे की आँखें अडिग थीं। उसे वाकई विश्वास था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "에이라님은 우리를 사랑했어요. 이 고통스러운 세상에서 구해준 거라고요.",
						"english": "Lady Eira loved us. She saved us from this painful world.",
						"japanese": "エイラ様は私たちを愛してくださったわ。この苦痛に満ちた世界から救ってくれたのよ。",
						"chinese": "艾拉大人爱我们。她把我们从这个痛苦的世界中解救了出来。",
						"french": "Dame Eira nous aimait. Elle nous a sauvés de ce monde douloureux.",
						"spanish": "Lady Eira nos amaba. Nos salvó de este mundo de sufrimiento.",
						"vietnamese": "Tiên nữ Eira yêu thương chúng ta. Cô ấy đã cứu chúng ta khỏi thế giới đau khổ này.",
						"thai": "ท่านเอร่ารักพวกเรา ท่านช่วยพวกเราให้พ้นจากโลกที่เจ็บปวดนี้",
						"hindi": "लेडी ऐरा हमें प्यार करती थीं। उन्होंने हमें इस दर्द भरी दुनिया से बचाया।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "사랑? 이건 감옥이야. 시간이 멈춰버린.",
						"english": "Love? This is a prison. Where time has stopped.",
						"japanese": "愛？これは監獄よ。時間が止まってしまった。",
						"chinese": "爱？这不过是座监狱。时间停滞不前。",
						"french": "L'amour ? C'est une prison. Où le temps s'est arrêté.",
						"spanish": "¿Amor? Esto es una prisión. Donde el tiempo se ha detenido.",
						"vietnamese": "Yêu thương ư? Đây là một nhà tù. Nơi thời gian đã ngừng lại.",
						"thai": "รักงั้นเหรอ? นี่มันคุกชัดๆ เวลาหยุดนิ่งไปแล้ว",
						"hindi": "प्यार? यह तो एक जेल है। जहाँ समय ठहर गया है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아뇨! 영원한 안식이에요. 더 이상 아무것도 두려워하지 않아도 돼요.",
						"english": "No! It's eternal peace. You don't have to fear anything anymore.",
						"japanese": "違うわ！これは永遠の安息よ。もう何も恐れる必要はないの。",
						"chinese": "不！这是永恒的安息。你再也不必害怕任何事了。",
						"french": "Non ! C'est le repos éternel. Vous n'avez plus rien à craindre.",
						"spanish": "¡No! Es un descanso eterno. Ya no tienes que temer a nada.",
						"vietnamese": "Không! Đây là sự an nghỉ vĩnh hằng. Bạn không cần phải sợ hãi bất cứ điều gì nữa.",
						"thai": "ไม่ใช่! นี่คือความสงบสุขชั่วนิรันดร์ เธอไม่จำเป็นต้องกลัวอะไรอีกแล้ว",
						"hindi": "नहीं! यह शाश्वत शांति है। तुम्हें अब और किसी चीज़ से डरने की ज़रूरत नहीं है।"
					},
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "하지만… 아무것도 느낄 수 없잖아.",
						"english": "But... I can't feel anything.",
						"japanese": "でも…何も感じられないじゃないか。",
						"chinese": "可是……什么都感觉不到了啊。",
						"french": "Mais... je ne ressens rien.",
						"spanish": "Pero... no puedo sentir nada.",
						"vietnamese": "Nhưng... tôi không thể cảm thấy bất cứ điều gì.",
						"thai": "แต่ว่า... ฉันไม่รู้สึกอะไรเลยนี่นา",
						"hindi": "लेकिन... मैं कुछ भी महसूस नहीं कर पा रहा हूँ।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "에이라님은 모든 것을 희생했어요. 이 부족을 지키려고… 영원한 겨울이 되셨어요.",
						"english": "Lady Eira sacrificed everything. To protect this tribe... she became the eternal winter.",
						"japanese": "エイラ様はすべてを犠牲にされたわ。この部族を守るため…永遠の冬になられたの。",
						"chinese": "艾拉大人牺牲了一切。为了守护这个部落……她化作了永恒的冬天。",
						"french": "Dame Eira a tout sacrifié. Pour protéger cette tribu... elle est devenue l'hiver éternel.",
						"spanish": "Lady Eira lo sacrificó todo. Para proteger a esta tribu... se convirtió en el invierno eterno.",
						"vietnamese": "Tiên nữ Eira đã hy sinh tất cả. Để bảo vệ bộ tộc này... cô ấy đã trở thành mùa đông vĩnh cửu.",
						"thai": "ท่านเอร่าเสียสละทุกสิ่ง เพื่อปกป้องเผ่านี้... ท่านกลายเป็นฤดูหนาวชั่วนิรันดร์",
						"hindi": "लेडी ऐरा ने सब कुछ कुर्बान कर दिया। इस जनजाति की रक्षा के लिए... वह शाश्वत शीत बन गईं।"
					},
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "희생이라기엔… 너무 잔혹하잖아. 모두가 똑같은 실수를 반복하고 있어.",
						"english": "Calling it a sacrifice... it's too cruel. Everyone is repeating the same mistake.",
						"japanese": "犠牲というには…あまりにも残酷すぎる。みんな同じ過ちを繰り返しているわ。",
						"chinese": "若是牺牲……也未免太残酷了。所有人都重蹈覆辙。",
						"french": "Parler de sacrifice... c'est trop cruel. Tout le monde répète la même erreur.",
						"spanish": "Llamarlo sacrificio... es demasiado cruel. Todos están cometiendo el mismo error.",
						"vietnamese": "Gọi đó là sự hy sinh... thì quá tàn nhẫn. Mọi người đều lặp lại cùng một sai lầm.",
						"thai": "ถ้าจะเรียกว่าเสียสละ... มันก็โหดร้ายเกินไป ทุกคนกำลังทำผิดซ้ำซาก",
						"hindi": "इसे बलिदान कहना... बहुत क्रूर है। हर कोई वही गलती दोहरा रहा है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그건… 외부의 유혹이에요. 에이라님을 의심하게 만드는….",
						"english": "That's... an external temptation. Making you doubt Lady Eira...",
						"japanese": "それは…外部からの誘惑よ。エイラ様を疑わせるような…。",
						"chinese": "那是……来自外部的诱惑。让你怀疑艾拉大人……",
						"french": "C'est... une tentation extérieure. Qui vous fait douter de Dame Eira...",
						"spanish": "Eso es... una tentación externa. Que te hace dudar de Lady Eira...",
						"vietnamese": "Đó là... một sự cám dỗ từ bên ngoài. Khiến bạn nghi ngờ Tiên nữ Eira...",
						"thai": "นั่นมัน... สิ่งล่อลวงจากภายนอก ที่ทำให้สงสัยท่านเอร่า...",
						"hindi": "वह... बाहरी प्रलोभन है। जो तुम्हें लेडी ऐरा पर शक कराता है..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "힐드의 목소리에 절박함이 묻어났다. 그녀는 필사적으로 현실을 외면하고 있었다.",
						"english": "Desperation laced Hilde's voice. She was desperately ignoring reality.",
						"japanese": "ヒルデの声には切迫感が滲んでいた。彼女は必死に現実から目を背けていた。",
						"chinese": "希尔德的声音中带着绝望。她拼命地逃避着现实。",
						"french": "La voix d'Hilde était empreinte de désespoir. Elle ignorait désespérément la réalité.",
						"spanish": "La voz de Hilde estaba teñida de desesperación. Ella estaba ignorando desesperadamente la realidad.",
						"vietnamese": "Giọng nói của Hilde lộ rõ vẻ tuyệt vọng. Cô ấy tuyệt vọng né tránh thực tại.",
						"thai": "เสียงของฮิลเดมีความสิ้นหวังเจือปนอยู่ เธอพยายามหลีกหนีความจริงอย่างสิ้นหวัง",
						"hindi": "हिल्डे की आवाज़ में हताशा थी। वह हताशा से वास्तविकता से मुँह मोड़ रही थी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hild",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "아니야! 에이라님은… 단지 우리를 지키고 싶었던 거야! 어린 아이들까지도…!",
						"english": "No! Lady Eira… she just wanted to protect us! Even the children...!",
						"japanese": "「違う！エイラ様は…ただ私たちを守りたかっただけなんだ！幼い子供たちまでも…！」",
						"chinese": "“不！艾拉大人…她只是想保护我们！甚至包括孩子们…！”",
						"french": "« Non ! Dame Eira… elle voulait juste nous protéger ! Même les enfants… ! »",
						"spanish": "« ¡No! ¡Lady Eira... solo quería protegernos! ¡Incluso a los niños...! »",
						"vietnamese": "« Không! Nữ thần Eira… Người chỉ muốn bảo vệ chúng ta! Kể cả những đứa trẻ…! »",
						"thai": "« ไม่จริง! ท่านเอร่า… ท่านแค่อยากปกป้องพวกเรา! แม้แต่เด็กๆ ด้วยซ้ำ…! »",
						"hindi": "« नहीं! लेडी ऐरा… वह बस हमें बचाना चाहती थी! बच्चों को भी…! »"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "지킨다는 이름으로 영원히 가둔 거잖아. 그게 사랑이라고 생각하는 거야?",
						"english": "You imprisoned us forever in the name of protection. Do you call that love?",
						"japanese": "「守るという名目で永遠に閉じ込めたじゃないか。それが愛だとでも思っているのか？」",
						"chinese": "“你以保护之名将我们永远囚禁。你认为那是爱吗？”",
						"french": "« Tu nous as emprisonnés pour toujours au nom de la protection. Appelles-tu cela de l'amour ? »",
						"spanish": "« Nos encerraste para siempre en nombre de la protección. ¿A eso le llamas amor? »",
						"vietnamese": "« Ngươi đã giam cầm chúng ta vĩnh viễn dưới danh nghĩa bảo vệ. Ngươi nghĩ đó là tình yêu sao? »",
						"thai": "« แกขังพวกเราไว้ตลอดกาลภายใต้ชื่อของการปกป้องนี่นา นั่นแกคิดว่าเป็นความรักเหรอ? »",
						"hindi": "« तुमने हमें सुरक्षा के नाम पर हमेशा के लिए कैद कर लिया। क्या तुम इसे प्यार कहते हो? »"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…당신들은 아무것도 몰라. 고통 없는 삶이 어떤 건지…!",
						"english": "...You know nothing. Nothing of a life without pain...!",
						"japanese": "「…あなたたちは何も知らない。苦痛のない人生がどんなものか…！」",
						"chinese": "“…你们一无所知。对于没有痛苦的生活…！”",
						"french": "« …Vous ne savez rien. Rien d'une vie sans douleur… ! »",
						"spanish": "« ...No sabéis nada. Nada de una vida sin dolor...! »",
						"vietnamese": "« ...Các ngươi không biết gì cả. Về một cuộc sống không đau khổ...! »",
						"thai": "« ...พวกแกไม่รู้อะไรเลย. ชีวิตที่ไร้ความเจ็บปวดมันเป็นยังไงกันแน่...! »",
						"hindi": "« ...तुम कुछ नहीं जानते। बिना दर्द के जीवन कैसा होता है...! »"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이제 알겠어. 이 평화는 착각이었다는 걸.",
						"english": "Now I understand. This peace was an illusion.",
						"japanese": "「もう分かった。この平和は錯覚だったということを。」",
						"chinese": "“现在我明白了。这种平静只是一个幻觉。”",
						"french": "« Maintenant je comprends. Cette paix n'était qu'une illusion. »",
						"spanish": "« Ahora lo entiendo. Esta paz era una ilusión. »",
						"vietnamese": "« Giờ tôi đã hiểu. Sự bình yên này chỉ là ảo ảnh. »",
						"thai": "« ตอนนี้ฉันเข้าใจแล้ว. สันติภาพนี้มันเป็นแค่ภาพลวงตา. »",
						"hindi": "« अब मैं समझ गया। यह शांति एक भ्रम थी। »"
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
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "콜록… 나의 눈물이… 모든 것을 얼릴지니….",
						"english": "Cough... My tears... shall freeze everything...",
						"japanese": "ゴホッ…私の涙が…全てを凍らせるでしょう…。",
						"chinese": "咳咳……我的泪水……将冻结一切……",
						"french": "Tousse... Mes larmes... gèleront tout...",
						"spanish": "Tos... Mis lágrimas... lo congelarán todo...",
						"vietnamese": "Khụ khụ... Nước mắt của ta... sẽ đóng băng tất cả...",
						"thai": "แค่ก... น้ำตาของข้า... จะแช่แข็งทุกสิ่ง...",
						"hindi": "खाँसी... मेरे आँसू... सब कुछ जमा देंगे..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "당신들은… 또 다른 죄책감을 안고… 영원히 이 루프를 헤맬 거야….",
						"english": "You... shall wander this loop forever... burdened with yet another guilt...",
						"japanese": "あなたたちは…また別の罪悪感を抱え…永遠にこのループをさまようでしょう…。",
						"chinese": "你们……将带着另一份罪恶感……永远在这循环中徘徊……",
						"french": "Vous... errerez dans cette boucle à jamais... accablés par une nouvelle culpabilité...",
						"spanish": "Vosotros... vagaréis por este bucle para siempre... cargados con otra culpa más...",
						"vietnamese": "Các ngươi... sẽ mãi mãi lang thang trong vòng lặp này... mang theo một tội lỗi khác...",
						"thai": "พวกเจ้า... จะต้องวนเวียนอยู่ในวังวนนี้ตลอดไป... พร้อมกับความรู้สึกผิดอีกครั้ง...",
						"hindi": "तुम... हमेशा के लिए इस चक्र में भटकते रहोगे... एक और अपराध बोध के साथ..."
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…우리가 대체 뭘 한 거지….",
						"english": "...What exactly have we done...?",
						"japanese": "…我々は一体何をしたんだ…。",
						"chinese": "……我们到底做了什么……？",
						"french": "...Qu'avons-nous donc fait...?",
						"spanish": "¿...Qué hemos hecho exactamente...?",
						"vietnamese": "...Rốt cuộc chúng ta đã làm gì...?",
						"thai": "...พวกเราทำอะไรลงไปกันแน่...?",
						"hindi": "...हमने आख़िर क्या किया है...?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "에이라의 얼음 눈물이 주변을 더욱 강렬하게 얼렸다. 승리는… 또 다른 시작일 뿐이었다.",
						"english": "Aira's icy tears froze the surroundings even more intensely. Victory was... merely another beginning.",
						"japanese": "アイラの氷の涙が周囲をさらに強く凍らせた。勝利は…ただの新たな始まりに過ぎなかった。",
						"chinese": "艾拉的冰冷泪水将周围冻结得更加猛烈。胜利……不过是另一个开始。",
						"french": "Les larmes glacées d'Aira gelèrent les environs avec une intensité accrue. La victoire n'était... qu'un autre commencement.",
						"spanish": "Las lágrimas heladas de Aira congelaron el entorno con aún más intensidad. La victoria era... simplemente otro comienzo.",
						"vietnamese": "Nước mắt băng giá của Aira càng đóng băng mạnh mẽ hơn xung quanh. Chiến thắng... chỉ là một khởi đầu khác.",
						"thai": "น้ำตาเยือกแข็งของไอราทำให้รอบข้างยิ่งแข็งขึ้น ชัยชนะเป็นเพียง... การเริ่มต้นครั้งใหม่",
						"hindi": "ऐरा के बर्फीले आँसुओं ने चारों ओर को और भी तेज़ी से जमा दिया। जीत... बस एक और शुरुआत थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 얼어붙은 세계는 파괴되지 않았다. 단지… 다음 비극을 기다릴 뿐.",
						"english": "This frozen world was not destroyed. It merely... awaited the next tragedy.",
						"japanese": "この凍りついた世界は破壊されなかった。ただ…次の悲劇を待つのみ。",
						"chinese": "这个冰封的世界并未被摧毁。它只是……等待着下一场悲剧的降临。",
						"french": "Ce monde gelé ne fut pas détruit. Il ne faisait... qu'attendre la prochaine tragédie.",
						"spanish": "Este mundo congelado no fue destruido. Simplemente... esperaba la próxima tragedia.",
						"vietnamese": "Thế giới băng giá này không bị phá hủy. Nó chỉ... chờ đợi bi kịch tiếp theo.",
						"thai": "โลกที่เยือกแข็งนี้ไม่ได้ถูกทำลาย มันแค่... รอคอยโศกนาฏกรรมครั้งต่อไป",
						"hindi": "यह जमी हुई दुनिया नष्ट नहीं हुई। यह बस... अगली त्रासदी का इंतज़ार कर रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 장막이 열리고, 차가운 공기 속에서 에이라가 나타났다.",
						"english": "The massive ice barrier opened, and Eira appeared amidst the cold air.",
						"japanese": "「巨大な氷の帳が開き、冷たい空気の中にエイラが現れた。」",
						"chinese": "“巨大的冰幕开启，艾拉在冰冷的空气中现身。”",
						"french": "« L'immense barrière de glace s'ouvrit, et Eira apparut dans l'air froid. »",
						"spanish": "« La enorme barrera de hielo se abrió y Eira apareció entre el aire frío. »",
						"vietnamese": "« Bức màn băng khổng lồ mở ra, và Eira xuất hiện trong không khí lạnh giá. »",
						"thai": "« ม่านน้ำแข็งขนาดมหึมาเปิดออก และเอร่าก็ปรากฏตัวขึ้นกลางอากาศอันหนาวเย็น. »",
						"hindi": "« विशाल बर्फ की दीवार खुली, और ठंडी हवा के बीच ऐरा प्रकट हुई। »"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "두려워 마세요, 길 잃은 아이들아… 이곳은 안전하단다.",
						"english": "Fear not, lost children… This place is safe.",
						"japanese": "「恐れることはない、迷子の子供たちよ… ここは安全な場所だ。」",
						"chinese": "“不要害怕，迷途的孩子们… 这里很安全。”",
						"french": "« N'ayez crainte, enfants perdus… Cet endroit est sûr. »",
						"spanish": "« No temáis, niños perdidos... Este lugar es seguro. »",
						"vietnamese": "« Đừng sợ hãi, những đứa trẻ lạc lối… Nơi đây an toàn. »",
						"thai": "« อย่าได้กลัวเลยนะ เจ้าเด็กหลงทาง… ที่นี่ปลอดภัยแล้ว. »",
						"hindi": "« डरो मत, भटके हुए बच्चों… यह जगह सुरक्षित है। »"
					}
				},
				{
					"content": {
						"korean": "이 얼음 속에서, 누구도 다시는 추위에 떨지 않을 거야. 우리는… 영원히 함께할 테니….",
						"english": "Within this ice, no one will ever shiver from the cold again. We shall… be together forever….",
						"japanese": "「この氷の中で、誰も二度と寒さに震えることはないだろう。私たちは…永遠に共にいるのだから…。」",
						"chinese": "“在这冰雪之中，再无人会因寒冷而颤抖。我们…将永远在一起…”",
						"french": "« Dans cette glace, personne ne frissonnera plus jamais de froid. Nous serons… ensemble pour toujours… »",
						"spanish": "« Dentro de este hielo, nadie volverá a temblar de frío. Estaremos... juntos para siempre... »",
						"vietnamese": "« Trong lớp băng này, sẽ không ai phải run rẩy vì lạnh nữa. Chúng ta sẽ… mãi mãi bên nhau… »",
						"thai": "« ในน้ำแข็งนี้ จะไม่มีใครสั่นสะท้านจากความหนาวเย็นอีกต่อไป. พวกเราจะ… อยู่ด้วยกันตลอดไป… »",
						"hindi": "« इस बर्फ के भीतर, कोई फिर कभी ठंड से नहीं कांपेगा। हम… हमेशा साथ रहेंगे…। »"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "들었죠? 에이라님은 진정으로 우리를 위하는 거예요! 제발… 그만해요.",
						"english": "Did you hear? Lady Eira truly cares for us! Please… stop.",
						"japanese": "「聞いたでしょ？エイラ様は本当に私たちのことを思っているのよ！お願い…やめて。」",
						"chinese": "“你们听到了吗？艾拉大人是真的为我们好！求求你们…住手吧。”",
						"french": "« Vous avez entendu ? Dame Eira se soucie vraiment de nous ! S'il vous plaît… arrêtez. »",
						"spanish": "« ¿Oísteis? ¡Lady Eira realmente se preocupa por nosotros! Por favor... parad. »",
						"vietnamese": "« Các ngươi nghe rõ chưa? Nữ thần Eira thực sự quan tâm đến chúng ta! Làm ơn… dừng lại đi. »",
						"thai": "« ได้ยินไหม? ท่านเอร่าปรารถนาดีกับพวกเราจริงๆ นะ! ได้โปรด… หยุดเถอะ. »",
						"hindi": "« सुना तुमने? लेडी ऐरा सच में हमारी परवाह करती हैं! कृपया… रुक जाओ। »"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 어떻게 안식이야. 영원한 감옥이지.",
						"english": "How is this peace? It's an eternal prison.",
						"japanese": "「これがどうして安息なんだ。永遠の監獄じゃないか。」",
						"chinese": "“这哪是什么安宁。分明是永恒的牢狱。”",
						"french": "« Comment est-ce la paix ? C'est une prison éternelle. »",
						"spanish": "« ¿Cómo va a ser esto paz? Es una prisión eterna. »",
						"vietnamese": "« Đây sao gọi là an nghỉ. Đây là nhà tù vĩnh viễn. »",
						"thai": "« นี่จะเรียกว่าความสงบสุขได้ยังไง. มันคือคุกตลอดกาลต่างหาก. »",
						"hindi": "« यह शांति कैसे है? यह तो एक शाश्वत जेल है। »"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "에이라. 당신의 사랑은 우리에게 필요 없어.",
						"english": "Eira. We don't need your love.",
						"japanese": "「エイラ。あなたの愛は私たちには必要ない。」",
						"chinese": "“艾拉。我们不需要你的爱。”",
						"french": "« Eira. Nous n'avons pas besoin de ton amour. »",
						"spanish": "« Eira. No necesitamos tu amor. »",
						"vietnamese": "« Eira. Tình yêu của ngươi không cần thiết với chúng ta. »",
						"thai": "« เอร่า. ความรักของเจ้า พวกเราไม่ต้องการหรอก. »",
						"hindi": "« ऐरा। हमें तुम्हारे प्यार की ज़रूरत नहीं है। »"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…왜 나의 사랑을 이해하지 못하니…?",
						"english": "...Why can't you understand my love...?",
						"japanese": "…なぜ私の愛を理解できないのですか…？",
						"chinese": "……为何不理解我的爱……？",
						"french": "...Pourquoi ne comprends-tu pas mon amour...?",
						"spanish": "¿...Por qué no entiendes mi amor...?",
						"vietnamese": "...Sao ngươi không hiểu tình yêu của ta...?",
						"thai": "...เหตุใดเจ้าจึงไม่เข้าใจความรักของข้า...?",
						"hindi": "...तुम मेरे प्यार को क्यों नहीं समझते...?"
					},
					"speaker": "boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제… 영원히 나와 함께… 평화로울 거야….",
						"english": "Now... you shall be at peace... with me forever...",
						"japanese": "さあ…永遠に私と共に…安らかになるでしょう…。",
						"chinese": "现在……你将永远与我一同……安宁……",
						"french": "Maintenant... tu seras en paix... avec moi pour toujours...",
						"spanish": "Ahora... estarás en paz... conmigo para siempre...",
						"vietnamese": "Bây giờ... ngươi sẽ mãi mãi bình yên... cùng ta...",
						"thai": "ตอนนี้... เจ้าจะสงบสุข... ไปกับข้าตลอดไป...",
						"hindi": "अब... तुम हमेशा के लिए मेरे साथ... शांति में रहोगे..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이대로 끝낼 수는 없어. 다시…!",
						"english": "...It cannot end like this. Again...!",
						"japanese": "…このままでは終われない。もう一度…！",
						"chinese": "……不能就此结束。再来……！",
						"french": "...Ça ne peut pas finir comme ça. Encore...!",
						"spanish": "...No puede terminar así. ¡De nuevo...!",
						"vietnamese": "...Không thể kết thúc thế này được. Lại lần nữa...!",
						"thai": "...จะจบแบบนี้ไม่ได้ กลับมาอีกครั้ง...!",
						"hindi": "...यह ऐसे खत्म नहीं हो सकता। फिर से...!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"에이라의 절규는 얼어붙은 계곡에 메아리쳤다. 허나 고요는 돌아오지 않았다.",
			"얼음은 녹지 않았다. 단지, 모든 것이 잠시 멈췄을 뿐.",
			"우리의 죄책감은 더욱 깊어졌다. 이것이 구원인가, 아니면 또 다른 침해인가?",
			"이 비극적인 만가는… 끝없이 반복될 것만 같았다."
		],
		"english": [
			"Aira's scream echoed through the frozen valley. Yet, silence did not return.",
			"The ice did not melt. Everything merely paused for a moment.",
			"Our guilt deepened further. Is this salvation, or yet another transgression?",
			"This tragic elegy... it felt as if it would repeat endlessly."
		],
		"japanese": [
			"エイラの絶叫は凍てついた谷に木霊した。しかし、静寂は戻らなかった。",
			"氷は溶けなかった。ただ、全てが一時的に停止しただけだった。",
			"我々の罪悪感はさらに深まった。これが救済なのか、それとも別の侵害なのか？",
			"この悲劇的な挽歌は… 終わりなく繰り返されるかのようだった。"
		],
		"chinese": [
			"艾拉的尖叫声在冰冻的山谷中回荡。然而，寂静并未回来。",
			"冰没有融化。一切只是暂时停滞了而已。",
			"我们的罪恶感更加深重。这是救赎，还是又一次侵犯？",
			"这悲惨的挽歌……似乎会无休止地重复。"
		],
		"french": [
			"Le cri d'Aira résonna dans la vallée gelée. Pourtant, le silence ne revint pas.",
			"La glace n'a pas fondu. Tout s'est simplement arrêté un instant.",
			"Notre culpabilité s'est encore approfondie. Est-ce le salut, ou une autre transgression ?",
			"Cette élégie tragique... semblait devoir se répéter sans fin."
		],
		"spanish": [
			"El grito de Aira resonó en el valle congelado. Sin embargo, el silencio no regresó.",
			"El hielo no se derritió. Todo simplemente se detuvo por un momento.",
			"Nuestra culpa se profundizó aún más. ¿Es esto la salvación, o una transgresión más?",
			"Esta trágica elegía... parecía que se repetiría sin fin."
		],
		"vietnamese": [
			"Tiếng thét của Aira vang vọng khắp thung lũng băng giá. Thế nhưng, sự tĩnh lặng vẫn không trở lại.",
			"Băng không tan chảy. Mọi thứ chỉ tạm dừng trong chốc lát.",
			"Nỗi ân hận của chúng ta càng thêm sâu sắc. Đây là sự cứu rỗi, hay một sự xâm phạm khác?",
			"Điệu bi ca bi thảm này… dường như sẽ lặp lại không ngừng."
		],
		"thai": [
			"เสียงกรีดร้องของไอราก้องกังวานไปทั่วหุบเขาที่เยือกแข็ง แต่ความเงียบสงบก็ไม่กลับมา",
			"น้ำแข็งไม่ได้ละลาย ทุกสิ่งเพียงแค่หยุดนิ่งชั่วขณะเท่านั้น",
			"ความรู้สึกผิดของเรายิ่งลึกซึ้งยิ่งขึ้น นี่คือการไถ่ถอน หรือเป็นการล่วงละเมิดอีกครั้งกันแน่?",
			"บทเพลงไว้อาลัยอันโศกเศร้าบทนี้... รู้สึกราวกับว่าจะซ้ำรอยไม่สิ้นสุด"
		],
		"hindi": [
			"एरा की चीख जमी हुई घाटी में गूंज उठी। फिर भी, खामोशी नहीं लौटी।",
			"बर्फ पिघली नहीं। सब कुछ बस एक पल के लिए रुक गया।",
			"हमारा अपराधबोध और गहरा हो गया। क्या यह मुक्ति है, या एक और अतिक्रमण?",
			"यह दुखद शोकगीत... ऐसा लग रहा था कि यह अनंत तक दोहराया जाएगा।"
		]
	},
	"prologue": {
		"korean": [
			"얼어붙은 세계의 심장부. 마침내 에이라의 장막이 열렸다.",
			"오랜 시간 이곳을 지배해온, 슬픔으로 뒤틀린 사랑의 흔적.",
			"희망이라 믿었던 것은 절망이 되고, 구원은 또 다른 속박으로 변질되었다.",
			"이 모든 죄의 만가 속에서, 우리는 무엇을 노래할 것인가?"
		],
		"english": [
			"The heart of a frozen world. Aira's veil finally opened.",
			"The twisted trace of love, warped by sorrow, that has long dominated this place.",
			"What was believed to be hope became despair, and salvation transformed into another form of bondage.",
			"Amidst this elegy of all sins, what shall we sing?"
		],
		"japanese": [
			"凍てついた世界の心臓部。ついにエイラの帳が開かれた。",
			"長きにわたりこの地を支配してきた、悲しみで歪んだ愛の痕跡。",
			"希望と信じたものは絶望となり、救済は別の束縛へと変質した。",
			"この全ての罪の挽歌の中で、我々は何を歌うべきか？"
		],
		"chinese": [
			"冰冻世界的心脏。艾拉的帷幕终于揭开。",
			"长久以来支配着这里的，被悲伤扭曲的爱的痕迹。",
			"曾被视为希望的变成了绝望，而救赎则变质为另一种束缚。",
			"在这所有罪孽的挽歌中，我们将歌颂什么？"
		],
		"french": [
			"Au cœur d'un monde gelé. Le voile d'Aira s'est enfin levé.",
			"La trace tordue de l'amour, déformée par le chagrin, qui a longtemps dominé ce lieu.",
			"Ce qui était cru être de l'espoir est devenu du désespoir, et le salut s'est transformé en une autre forme d'esclavage.",
			"Au milieu de cette élégie de tous les péchés, que chanterons-nous ?"
		],
		"spanish": [
			"En el corazón de un mundo congelado. El velo de Aira finalmente se abrió.",
			"El rastro retorcido del amor, distorsionado por la tristeza, que ha dominado este lugar durante mucho tiempo.",
			"Lo que se creyó que era esperanza se convirtió en desesperación, y la salvación se transformó en otra forma de atadura.",
			"En medio de esta elegía de todos los pecados, ¿qué cantaremos?"
		],
		"vietnamese": [
			"Trái tim của thế giới băng giá. Bức màn của Aira cuối cùng đã mở ra.",
			"Dấu vết méo mó của tình yêu, bị biến dạng bởi nỗi buồn, đã thống trị nơi đây suốt thời gian dài.",
			"Điều tưởng chừng là hy vọng đã biến thành tuyệt vọng, và sự cứu rỗi đã biến chất thành một xiềng xích khác.",
			"Trong điệu bi ca của mọi tội lỗi này, chúng ta sẽ hát điều gì?"
		],
		"thai": [
			"ใจกลางของโลกที่เยือกแข็ง ในที่สุดม่านของไอราก็เปิดออก",
			"ร่องรอยแห่งความรักที่บิดเบี้ยวด้วยความเศร้าโศก ที่ครอบงำสถานที่แห่งนี้มาอย่างยาวนาน",
			"สิ่งที่เชื่อว่าเป็นความหวังกลับกลายเป็นความสิ้นหวัง และการไถ่ถอนก็เปลี่ยนเป็นพันธนาการอีกรูปแบบหนึ่ง",
			"ท่ามกลางบทเพลงแห่งบาปทั้งหมดนี้ เราจะร้องเพลงอะไร?"
		],
		"hindi": [
			"जमी हुई दुनिया के दिल में। एरा का पर्दा आखिरकार उठ गया।",
			"दुख से मुड़ा हुआ प्यार का निशान, जिसने लंबे समय तक इस जगह पर राज किया है।",
			"जो आशा मानी जाती थी वह निराशा बन गई, और मुक्ति दूसरे बंधन में बदल गई।",
			"इस सभी पापों के शोकगीत में, हम क्या गाएंगे?"
		]
	}
} as const;
