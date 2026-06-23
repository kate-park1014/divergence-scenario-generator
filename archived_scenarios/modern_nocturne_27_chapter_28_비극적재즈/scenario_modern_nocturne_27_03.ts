export const scenario_modern_nocturne_27_03 = {
	"scenario_id": "modern_nocturne_27_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "주크박스의 선율은 도시를 잠식했다. 이명처럼.",
						"english": "The jukebox's melody consumed the city. Like a ringing in the ears.",
						"japanese": "ジュークボックスの旋律が都市を侵食した。耳鳴りのように。",
						"chinese": "点唱机的旋律侵蚀了这座城市。如耳鸣般。",
						"french": "La mélodie du juke-box a envahi la ville. Comme un acouphène.",
						"spanish": "La melodía de la rocola invadió la ciudad. Como un zumbido.",
						"vietnamese": "Giai điệu của máy hát đã xâm chiếm thành phố. Như tiếng ù tai.",
						"thai": "ท่วงทำนองของตู้เพลงเข้าครอบงำเมือง ราวกับเสียงในหู",
						"hindi": "ukebox की धुन ने शहर को निगल लिया। कानों में गूँज की तरह।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 심해지는 것 같아.",
						"english": "It seems to be getting worse.",
						"japanese": "だんだんひどくなっているようだ。",
						"chinese": "似乎越来越严重了。",
						"french": "Ça empire, semble-t-il.",
						"spanish": "Parece que está empeorando.",
						"vietnamese": "Có vẻ như nó đang tệ hơn.",
						"thai": "ดูเหมือนจะแย่ลงเรื่อยๆ",
						"hindi": "यह और खराब होता जा रहा है।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건 단순한 소음이 아니에요. 강력한 정신 에너지가 흐르고 있어요.",
						"english": "This isn't just noise. A powerful psychic energy is flowing.",
						"japanese": "これはただの騒音じゃない。強力な精神エネルギーが流れている。",
						"chinese": "这不仅仅是噪音。一股强大的精神能量正在流动。",
						"french": "Ce n'est pas un simple bruit. Une puissante énergie psychique y circule.",
						"spanish": "Esto no es solo ruido. Una poderosa energía psíquica está fluyendo.",
						"vietnamese": "Đây không chỉ là tiếng ồn. Một năng lượng tinh thần mạnh mẽ đang chảy.",
						"thai": "นี่ไม่ใช่แค่เสียงรบกวน พลังงานจิตที่รุนแรงกำลังไหลอยู่",
						"hindi": "यह सिर्फ शोर नहीं है। एक शक्तिशाली मानसिक ऊर्जा प्रवाहित हो रही है।"
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구시죠?",
						"english": "Who are you?",
						"japanese": "どなたですか？",
						"chinese": "您是哪位？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh/chị là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "음악 치료사 린이에요. 이 멜로디를… 치료해야 해요.",
						"english": "I'm Rin, a music therapist. This melody... it needs to be treated.",
						"japanese": "音楽療法士のリンです。このメロディを…治療しないと。",
						"chinese": "我是音乐治疗师琳。这个旋律…我必须治疗它。",
						"french": "Je suis Rin, musicothérapeute. Cette mélodie… il faut la soigner.",
						"spanish": "Soy Rin, una musicoterapeuta. Esta melodía... necesita ser tratada.",
						"vietnamese": "Tôi là Rin, một nhà trị liệu âm nhạc. Giai điệu này... cần được chữa trị.",
						"thai": "ฉันชื่อริน นักบำบัดด้วยเสียงเพลง เมโลดี้นี้...ต้องได้รับการรักษา",
						"hindi": "मैं लिन हूँ, एक संगीत चिकित्सक। इस धुन को... ठीक करना होगा।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						4
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "분석해 보니, 이 에너지는 점점 강해지고 있어요.",
						"english": "After analysis, this energy is growing stronger.",
						"japanese": "分析の結果、このエネルギーはますます強まっている。",
						"chinese": "分析发现，这种能量正在逐渐增强。",
						"french": "Après analyse, cette énergie ne cesse de se renforcer.",
						"spanish": "Tras el análisis, esta energía se está volviendo más fuerte.",
						"vietnamese": "Sau khi phân tích, năng lượng này đang mạnh dần lên.",
						"thai": "หลังจากการวิเคราะห์ พลังงานนี้กำลังแข็งแกร่งขึ้นเรื่อยๆ",
						"hindi": "विश्लेषण के बाद, यह ऊर्जा और मजबूत होती जा रही है।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "어떻게 해야 하죠?",
						"english": "What should we do?",
						"japanese": "どうすればいいですか？",
						"chinese": "我们该怎么办？",
						"french": "Que devons-nous faire ?",
						"spanish": "¿Qué debemos hacer?",
						"vietnamese": "Chúng ta nên làm gì?",
						"thai": "เราควรทำอย่างไรดี?",
						"hindi": "हमें क्या करना चाहिए?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "음악으로 진정시킬 수 있을 거예요. 제 주파수로.",
						"english": "Music should calm it. With my frequency.",
						"japanese": "音楽で落ち着かせられるはずです。私の周波数で。",
						"chinese": "音乐应该能让它平静下来。用我的频率。",
						"french": "La musique devrait l'apaiser. Avec ma fréquence.",
						"spanish": "La música debería calmarlo. Con mi frecuencia.",
						"vietnamese": "Âm nhạc sẽ làm nó dịu lại. Bằng tần số của tôi.",
						"thai": "เพลงน่าจะทำให้มันสงบลงได้ ด้วยคลื่นความถี่ของฉัน",
						"hindi": "संगीत इसे शांत कर देगा। मेरी फ़्रीक्वेंसी से।"
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "린의 주파수가 멜로디와 섞이자, 주크박스가 미세하게 진동했다.",
						"english": "As Lin's frequency blended with the melody, the jukebox subtly vibrated.",
						"japanese": "リンの周波数がメロディーと混ざり合うと、ジュークボックスが微かに振動した。",
						"chinese": "琳的频率与旋律融合，点唱机开始轻微震动。",
						"french": "Alors que la fréquence de Lin se mêlait à la mélodie, le juke-box vibra subtilement.",
						"spanish": "Mientras la frecuencia de Lin se mezclaba con la melodía, la rocola vibró sutilmente.",
						"vietnamese": "Khi tần số của Lin hòa vào giai điệu, máy hát tự động rung nhẹ.",
						"thai": "เมื่อคลื่นความถี่ของลินผสมผสานกับท่วงทำนอง ตู้เพลงก็สั่นสะเทือนเล็กน้อย",
						"hindi": "जैसे ही लिन की फ़्रीक्वेंसी धुन में घुली, ज्यूकबॉक्स धीरे से कंपन करने लगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭔가… 더 기분 나빠진 것 같은데.",
						"english": "Somehow... it feels worse.",
						"japanese": "なんだか…もっと気分が悪くなったような。",
						"chinese": "总觉得……情况更糟了。",
						"french": "On dirait que... ça empire.",
						"spanish": "De alguna manera... me siento peor.",
						"vietnamese": "Sao... cảm giác tệ hơn vậy.",
						"thai": "บางอย่าง… รู้สึกแย่ลงกว่าเดิม",
						"hindi": "किसी तरह… यह और भी बुरा लग रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이상하네요. 진정되어야 하는데….",
						"english": "Strange. It should calm down...",
						"japanese": "おかしいですね。落ち着くはずなのに…。",
						"chinese": "真奇怪。它应该平静下来才对……",
						"french": "Étrange. Ça devrait s'apaiser...",
						"spanish": "Qué raro. Debería calmarse...",
						"vietnamese": "Kỳ lạ thật. Lẽ ra nó phải dịu đi chứ...",
						"thai": "แปลกจัง มันควรจะสงบลงสิ...",
						"hindi": "अजीब है। इसे शांत हो जाना चाहिए था…"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "멜로디가… 오히려 더 날카로워졌어요. 제 파장이 증폭시킨 것 같아요.",
						"english": "The melody... it's sharper. My waves must have amplified it.",
						"japanese": "メロディーが…かえって鋭くなりました。私の波長が増幅させたようです。",
						"chinese": "旋律……反而变得更尖锐了。我的波长可能把它放大了。",
						"french": "La mélodie... elle est plus aigüe. Mes ondes ont dû l'amplifier.",
						"spanish": "La melodía... se ha vuelto más aguda. Mis ondas la amplificaron, creo.",
						"vietnamese": "Giai điệu... nó sắc bén hơn. Sóng của tôi chắc đã khuếch đại nó.",
						"thai": "ท่วงทำนอง... กลับยิ่งคมชัดขึ้น คลื่นของฉันคงจะไปขยายมัน",
						"hindi": "धुन… यह और भी तेज़ हो गई है। मेरी तरंगों ने इसे बढ़ा दिया होगा।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 잘못된 거죠?",
						"english": "What went wrong?",
						"japanese": "何が間違っていたのでしょう？",
						"chinese": "到底哪里出错了？",
						"french": "Qu'est-ce qui a mal tourné ?",
						"spanish": "¿Qué salió mal?",
						"vietnamese": "Có gì sai sao?",
						"thai": "เกิดอะไรผิดพลาดไป?",
						"hindi": "क्या ग़लत हो गया?"
					}
				},
				{
					"content": {
						"korean": "이건… 제가 알던 음악이 아니에요. 마치… 살아있는 것처럼 반응해요.",
						"english": "This isn't... the music I knew. It reacts as if... it's alive.",
						"japanese": "これは…私の知っている音楽ではありません。まるで…生きているかのように反応します。",
						"chinese": "这不是……我认识的音乐。它像……活的一样在反应。",
						"french": "Ce n'est pas... la musique que je connaissais. Elle réagit comme si... elle était vivante.",
						"spanish": "Esta no es... la música que conocía. Reacciona como si... estuviera viva.",
						"vietnamese": "Đây không phải... âm nhạc tôi từng biết. Nó phản ứng như thể... nó sống dậy vậy.",
						"thai": "นี่ไม่ใช่... เพลงที่ฉันรู้จักเลย มันตอบสนองราวกับว่า... มันมีชีวิต",
						"hindi": "यह… वह संगीत नहीं है जिसे मैं जानता था। यह ऐसे प्रतिक्रिया करता है जैसे… यह जीवित हो।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 그림자들이 일렁이기 시작했다. 멜로디에 맞춰.",
						"english": "The city's shadows began to ripple. To the melody's beat.",
						"japanese": "都市の影が波打ち始めた。メロディーに合わせて。",
						"chinese": "城市的阴影开始波动。随着旋律起伏。",
						"french": "Les ombres de la ville se mirent à onduler. Au rythme de la mélodie.",
						"spanish": "Las sombras de la ciudad comenzaron a ondular. Al ritmo de la melodía.",
						"vietnamese": "Bóng tối thành phố bắt đầu gợn sóng. Theo nhịp điệu.",
						"thai": "เงาของเมืองเริ่มพลิ้วไหว ตามจังหวะของท่วงทำนอง",
						"hindi": "शहर की परछाइयां हिलने लगीं। धुन के साथ।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "저것 봐! 그림자들이…",
						"english": "Look! The shadows...",
						"japanese": "あれを見て！影が…",
						"chinese": "快看！那些影子……",
						"french": "Regardez ! Les ombres...",
						"spanish": "¡Mira! Las sombras...",
						"vietnamese": "Nhìn kìa! Những cái bóng...",
						"thai": "ดูนั่นสิ! เงาพวกนั้น...",
						"hindi": "देखो! परछाइयां…"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"spot": [
						4,
						4
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "안 돼…! 제가 착각했어요. 이 멜로디는… 치료할 수 있는 게 아니었어요.",
						"english": "No...! I was mistaken. This melody... it wasn't something that could be healed.",
						"japanese": "だめだ…！私が勘違いしていました。このメロディーは…癒せるものではなかった。",
						"chinese": "不……！我错了。这旋律……根本无法治愈。",
						"french": "Non...! Je me suis trompée. Cette mélodie... n'était pas quelque chose qu'on pouvait soigner.",
						"spanish": "¡No...! Me equivoqué. Esta melodía... no era algo que pudiera curarse.",
						"vietnamese": "Không...! Tôi đã nhầm. Giai điệu này... không phải thứ có thể chữa lành.",
						"thai": "ไม่นะ...! ฉันเข้าใจผิดไปแล้ว เมโลดี้นี้... มันไม่ใช่สิ่งที่รักษาได้เลย",
						"hindi": "नहीं…! मुझे ग़लतफ़हमी हुई थी। यह धुन… इसे ठीक नहीं किया जा सकता था।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "린! 대체 무슨 짓을 한 거야!",
						"english": "Lynn! What have you done?!",
						"japanese": "リン！一体何をしたの！",
						"chinese": "琳！你到底做了什么！",
						"french": "Lynn ! Qu'as-tu fait ?!",
						"spanish": "¡Lynn! ¿¡Qué has hecho!?",
						"vietnamese": "Lynn! Cô đã làm cái quái gì vậy!",
						"thai": "ลินน์! เธอทำอะไรลงไป!",
						"hindi": "लिन! तुमने यह क्या कर दिया!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "제 치료가… 이 멜로디의 광기를… 깨웠어요.",
						"english": "My healing… it awakened this melody's madness.",
						"japanese": "私の治療が…このメロディーの狂気を…呼び覚ましてしまった。",
						"chinese": "我的治疗……唤醒了这旋律的疯狂。",
						"french": "Mon soin… a réveillé la folie de cette mélodie.",
						"spanish": "Mi curación… despertó la locura de esta melodía.",
						"vietnamese": "Sự chữa lành của tôi… đã đánh thức sự điên loạn của giai điệu này.",
						"thai": "การรักษาของฉัน… ปลุกความบ้าคลั่งของท่วงทำนองนี้ให้ตื่นขึ้นมา",
						"hindi": "मेरा इलाज… इसने इस धुन के पागलपन को जगा दिया।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "주크박스에서 터져 나온 멜로디는 이제 도시 전체를 집어삼키는 비명으로 변했다.",
						"english": "The melody that erupted from the jukebox has now become a scream engulfing the entire city.",
						"japanese": "ジュークボックスから流れ出したメロディーは、今や街全体を飲み込む悲鳴へと変わった。",
						"chinese": "从点唱机中爆发出的旋律，现在变成了吞噬整个城市的尖叫。",
						"french": "La mélodie qui a éclaté du juke-box est maintenant devenue un hurlement qui engloutit toute la ville.",
						"spanish": "La melodía que brotó del tocadiscos se ha convertido ahora en un grito que envuelve toda la ciudad.",
						"vietnamese": "Giai điệu trào ra từ máy hát tự động giờ đã biến thành tiếng thét nuốt chửng cả thành phố.",
						"thai": "ท่วงทำนองที่ปะทุออกมาจากตู้เพลงได้กลายเป็นเสียงกรีดร้องที่กลืนกินทั้งเมืองไปแล้ว",
						"hindi": "ज्यूकबॉक्स से निकली धुन अब पूरे शहर को निगलने वाली चीख में बदल गई है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고 그 비명 속에서, 거대한 그림자가 형체를 드러냈다.",
						"english": "And within that scream, a colossal shadow took form.",
						"japanese": "そしてその悲鳴の中で、巨大な影が姿を現した。",
						"chinese": "在那尖叫声中，一个巨大的影子显现了形体。",
						"french": "Et au sein de ce hurlement, une ombre colossale a pris forme.",
						"spanish": "Y dentro de ese grito, una sombra colosal tomó forma.",
						"vietnamese": "Và trong tiếng thét đó, một bóng đen khổng lồ đã thành hình.",
						"thai": "และท่ามกลางเสียงกรีดร้องนั้น เงาขนาดยักษ์ก็ปรากฏกายขึ้น",
						"hindi": "और उस चीख के भीतर, एक विशालकाय परछाई ने आकार ले लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "lin",
					"type": "direction"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "하찮은 치료사… 나의 음악을 방해하려 했는가?",
						"english": "Insignificant healer… Did you try to disrupt my music?",
						"japanese": "取るに足らない治療師よ…私の音楽を邪魔しようとしたのか？",
						"chinese": "卑微的治疗师……你试图打扰我的音乐吗？",
						"french": "Pauvre guérisseuse… As-tu osé perturber ma musique ?",
						"spanish": "Sanadora insignificante… ¿Intentaste interrumpir mi música?",
						"vietnamese": "Kẻ chữa lành tầm thường… Ngươi dám ngăn cản âm nhạc của ta sao?",
						"thai": "หมอรักษาอันไร้ค่า… เจ้าพยายามจะขัดขวางดนตรีของข้าหรือ?",
						"hindi": "तुच्छ वैद्य… क्या तुमने मेरे संगीत को बाधित करने की कोशिश की?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 저 비명의 근원이었나!",
						"english": "You… you were the source of that scream!",
						"japanese": "お前が…あの悲鳴の根源だったのか！",
						"chinese": "你……你就是那尖叫的源头！",
						"french": "Tu… tu étais la source de ce hurlement !",
						"spanish": "¡Tú… fuiste la fuente de ese grito!",
						"vietnamese": "Ngươi… ngươi là nguồn gốc của tiếng thét đó sao!",
						"thai": "แก… แกคือต้นกำเนิดของเสียงกรีดร้องนั้นเองหรือ!",
						"hindi": "तुम… तुम ही थे उस चीख का स्रोत!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 이 도시 전체가… 나의 선율로 춤추리라.",
						"english": "Now this entire city… shall dance to my melody.",
						"japanese": "今やこの街全体が…私の旋律で踊るだろう。",
						"chinese": "现在，整个城市……都将随我的旋律起舞。",
						"french": "Maintenant, toute cette ville… dansera au rythme de ma mélodie.",
						"spanish": "Ahora, toda esta ciudad… bailará al son de mi melodía.",
						"vietnamese": "Giờ đây, cả thành phố này… sẽ nhảy múa theo giai điệu của ta.",
						"thai": "บัดนี้ ทั้งเมืองนี้… จะเต้นรำไปตามท่วงทำนองของข้า",
						"hindi": "अब यह पूरा शहर… मेरी धुन पर नाचेगा।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "비명 같던 멜로디가 잦아들었다. 그러나 도시는 여전히 불안했다.",
						"english": "The scream-like melody subsided. But the city remained unsettled.",
						"japanese": "悲鳴のようだったメロディーは収まった。しかし都市はまだ不安定だった。",
						"chinese": "尖叫般的旋律平息了。然而城市依旧不安。",
						"french": "La mélodie hurlante s'est atténuée. Mais la ville restait agitée.",
						"spanish": "La melodía similar a un grito disminuyó. Pero la ciudad permanecía inquieta.",
						"vietnamese": "Giai điệu tựa tiếng thét đã dịu đi. Nhưng thành phố vẫn còn bất an.",
						"thai": "ท่วงทำนองที่เหมือนเสียงกรีดร้องค่อยๆ เงียบลง แต่เมืองยังคงไม่สงบ",
						"hindi": "चीख जैसी धुन धीमी पड़ गई। लेकिन शहर अभी भी अशांत था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멜로디는 멈췄지만… 이 공포는 사라지지 않아.",
						"english": "The melody stopped… but this fear won't disappear.",
						"japanese": "メロディーは止まったけれど…この恐怖は消えない。",
						"chinese": "旋律停止了……但这种恐惧不会消失。",
						"french": "La mélodie s'est arrêtée… mais cette peur ne disparaîtra pas.",
						"spanish": "La melodía se detuvo… but este miedo no desaparecerá.",
						"vietnamese": "Giai điệu đã dừng lại… nhưng nỗi sợ hãi này sẽ không biến mất.",
						"thai": "ท่วงทำนองหยุดลงแล้ว… แต่ความหวาดกลัวนี้ไม่หายไป",
						"hindi": "धुन रुक गई… लेकिन यह डर खत्म नहीं होगा।"
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "저는… 너무 어리석었어요. 죄송해요.",
						"english": "I… I was too foolish. I'm sorry.",
						"japanese": "私は…あまりに愚かでした。ごめんなさい。",
						"chinese": "我……我太愚蠢了。对不起。",
						"french": "J'ai… j'ai été trop stupide. Je suis désolée.",
						"spanish": "Yo… fui demasiado tonta. Lo siento.",
						"vietnamese": "Tôi… tôi đã quá ngốc nghếch. Tôi xin lỗi.",
						"thai": "ฉัน… ฉันโง่เขลาเกินไป ขอโทษค่ะ",
						"hindi": "मैं… मैं बहुत मूर्ख थी। मुझे माफ करना।"
					}
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "린은 자책하며 사라졌다. 주크박스에는 여전히 어두운 기운이 감돌고 있었다.",
						"english": "Lynn vanished, consumed by self-reproach. A dark aura still lingered around the jukebox.",
						"japanese": "リンは自責の念に駆られ、姿を消した。ジュークボックスには相変わらず暗い気配が漂っていた。",
						"chinese": "琳在自责中消失了。点唱机周围仍然弥漫着黑暗的气息。",
						"french": "Lynn disparut, rongée par le remords. Une aura sombre persistait autour du juke-box.",
						"spanish": "Lynn desapareció, consumida por el remordimiento. Un aura oscura aún persistía alrededor de la rocola.",
						"vietnamese": "Lynn biến mất trong sự tự trách. Một luồng khí đen tối vẫn còn lởn vởn quanh máy hát đĩa.",
						"thai": "ลินน์หายตัวไปพร้อมกับความรู้สึกผิด บรรยากาศมืดมิดยังคงอบอวลอยู่รอบตู้เพลง",
						"hindi": "लिन आत्म-घृणा में गायब हो गई। ज्यूकबॉक्स के चारों ओर अभी भी एक काला और भयावह आभा मंडरा रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "멜로디의 광기가 도시를 집어삼키고 있었다.",
						"english": "The melody's madness was engulfing the city.",
						"japanese": "メロディの狂気が都市を飲み込んでいた。",
						"chinese": "旋律的疯狂正在吞噬着城市。",
						"french": "La folie de la mélodie engloutissait la ville.",
						"spanish": "La locura de la melodía estaba devorando la ciudad.",
						"vietnamese": "Sự điên cuồng của giai điệu đang nuốt chửng thành phố.",
						"thai": "ความบ้าคลั่งของท่วงทำนองกำลังกลืนกินเมือง",
						"hindi": "धुन का पागलपन शहर को निगल रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 이 비명은… 영원히 울려 퍼질 것이다.",
						"english": "Fools... These screams... will echo forever.",
						"japanese": "愚か者たち… この悲鳴は… 永遠に響き渡るだろう。",
						"chinese": "愚蠢的家伙们…… 这些尖叫…… 将永远回荡。",
						"french": "Imbéciles... Ces cris... résonneront à jamais.",
						"spanish": "Necios... Estos gritos... resonarán para siempre.",
						"vietnamese": "Những kẻ ngu ngốc… Tiếng hét này… sẽ vang vọng mãi mãi.",
						"thai": "พวกคนโง่... เสียงกรีดร้องเหล่านี้... จะดังก้องไปตลอดกาล",
						"hindi": "मूर्खों... ये चीखें... हमेशा गूंजती रहेंगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没……结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Vẫn... chưa kết thúc!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"낡은 주크박스의 선율이 밤거리를 집어삼켰다.",
			"평화를 원했던 손길이, 오히려 거대한 광기를 깨웠으니.",
			"진실은 비명처럼 울려 퍼지고, 도시는 그림자에 잠긴다."
		],
		"english": [
			"The melody of an old jukebox consumed the night streets.",
			"Hands that sought peace, instead awakened a colossal madness.",
			"The truth echoes like a scream, and the city sinks into shadows."
		],
		"japanese": [
			"古いジュークボックスの旋律が夜の街を飲み込んだ。",
			"平和を求めた手が、かえって巨大な狂気を呼び覚ました。",
			"真実は悲鳴のように響き渡り、都市は影に沈む。"
		],
		"chinese": [
			"老旧点唱机的旋律吞噬了夜幕下的街道。",
			"渴望和平的双手，反而唤醒了巨大的疯狂。",
			"真相如尖叫般回荡，城市陷入阴影。"
		],
		"french": [
			"La mélodie d'un vieux juke-box a englouti les rues nocturnes.",
			"Des mains qui désiraient la paix, ont plutôt éveillé une folie colossale.",
			"La vérité résonne comme un cri, et la ville sombre dans l'ombre."
		],
		"spanish": [
			"La melodía de una vieja rocola devoró las calles nocturnas.",
			"Manos que buscaban la paz, despertaron una locura colosal.",
			"La verdad resuena como un grito, y la ciudad se sumerge en las sombras."
		],
		"vietnamese": [
			"Giai điệu của chiếc máy hát cũ nuốt chửng những con phố đêm.",
			"Bàn tay khao khát hòa bình, lại đánh thức một sự điên loạn khổng lồ.",
			"Sự thật vang vọng như tiếng thét, và thành phố chìm vào bóng tối."
		],
		"thai": [
			"ท่วงทำนองของตู้เพลงเก่ากลืนกินถนนยามค่ำคืน",
			"มือที่ปรารถนาสันติ กลับปลุกความบ้าคลั่งอันใหญ่หลวงขึ้นมา",
			"ความจริงก้องกังวานเหมือนเสียงกรีดร้อง และเมืองจมดิ่งสู่เงามืด"
		],
		"hindi": [
			"पुराने जukebox की धुन ने रात की सड़कों को निगल लिया।",
			"शांति चाहने वाले हाथों ने, इसके बजाय एक विशाल उन्माद को जगाया।",
			"सत्य चीख की तरह गूँजता है, और शहर परछाइयों में डूब जाता है।"
		]
	}
} as const;
