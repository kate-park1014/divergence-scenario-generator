export const scenario_modern_memento_9_04 = {
	"scenario_id": "modern_memento_9_04",
	"order": 4,
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
		},
		"bex": {
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "bex",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "메멘토의 '맹세'는 이 도시를 파멸시킬 거예요.",
						"english": "Memento's 'Oath' will destroy this city.",
						"japanese": "メメントの「誓い」はこの街を破滅させるでしょう。",
						"chinese": "记忆的“誓言”会毁灭这座城市。",
						"french": "Le « Serment » de Memento détruira cette ville.",
						"spanish": "El \"Juramento\" de Memento destruirá esta ciudad.",
						"vietnamese": "Lời thề của Memento sẽ hủy diệt thành phố này.",
						"thai": "‘คำสาบาน’ ของ Memento จะทำลายเมืองนี้",
						"hindi": "मेमेंटो की 'शपथ' इस शहर को तबाह कर देगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "...파멸?",
						"english": "...Ruin?",
						"japanese": "...破滅？",
						"chinese": "...毁灭？",
						"french": "...Ruine ?",
						"spanish": "...¿Ruina?",
						"vietnamese": "...Hủy diệt?",
						"thai": "...พินาศ?",
						"hindi": "...तबाही?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "우린 그를 완전히 제거해야 해요.",
						"english": "We must eliminate him completely.",
						"japanese": "我々は彼を完全に排除しなければなりません。",
						"chinese": "我们必须彻底清除他。",
						"french": "Nous devons l'éliminer complètement.",
						"spanish": "Debemos eliminarlo por completo.",
						"vietnamese": "Chúng ta phải loại bỏ hắn ta hoàn toàn.",
						"thai": "เราต้องกำจัดเขาให้สิ้นซาก",
						"hindi": "हमें उसे पूरी तरह खत्म करना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "맞아요. 시민들도 불안해하고 있어요. 그를 믿을 수 없어요.",
						"english": "That's right. The citizens are uneasy. We can't trust him.",
						"japanese": "そうです。市民も不安がっています。彼を信じることはできません。",
						"chinese": "没错。市民们也很不安。我们不能相信他。",
						"french": "Exactement. Les citoyens sont inquiets. Nous ne pouvons pas lui faire confiance.",
						"spanish": "Exacto. Los ciudadanos están intranquilos. No podemos confiar en él.",
						"vietnamese": "Đúng vậy. Người dân cũng đang lo lắng. Chúng ta không thể tin hắn.",
						"thai": "ถูกต้องครับ ประชาชนก็ไม่สบายใจ เราไว้ใจเขาไม่ได้",
						"hindi": "सही है। नागरिक भी बेचैन हैं। हम उस पर भरोसा नहीं कर सकते।"
					}
				},
				{
					"content": {
						"korean": "보셨죠? 저게 시민들의 목소리예요.",
						"english": "See? That's the voice of the citizens.",
						"japanese": "見ましたか？あれが市民の声です。",
						"chinese": "你们看到了吗？那是市民们的声音。",
						"french": "Vous voyez ? C'est la voix des citoyens.",
						"spanish": "¿Ven? Esa es la voz de los ciudadanos.",
						"vietnamese": "Thấy chứ? Đó là tiếng nói của người dân.",
						"thai": "เห็นไหมครับ? นั่นคือเสียงของประชาชน",
						"hindi": "देखा? यही नागरिकों की आवाज़ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "bex",
					"direction": "up"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "메멘토는 위협이에요. 그 음악은 공포를 퍼뜨리고 있어요.",
						"english": "Memento is a threat. His music spreads fear.",
						"japanese": "メメントは脅威です。彼の音楽は恐怖を広めています。",
						"chinese": "记忆是一个威胁。他的音乐正在散布恐惧。",
						"french": "Memento est une menace. Sa musique propage la peur.",
						"spanish": "Memento es una amenaza. Su música siembra el miedo.",
						"vietnamese": "Memento là một mối đe dọa. Âm nhạc của hắn đang lan truyền nỗi sợ hãi.",
						"thai": "Memento คือภัยคุกคาม เพลงของเขากำลังแพร่กระจายความกลัว",
						"hindi": "मेमेंटो एक खतरा है। उसका संगीत डर फैला रहा है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "...정말 그럴까?",
						"english": "...Really?",
						"japanese": "...本当にそうかな？",
						"chinese": "...真是那样吗？",
						"french": "...Vraiment ?",
						"spanish": "¿...De verdad?",
						"vietnamese": "...Thật sao?",
						"thai": "...จริงเหรอ?",
						"hindi": "...क्या सच में ऐसा होगा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이건 우리 모두의 안전과 관련된 일이에요. 저널리스트 Bex가 말해줬어요.",
						"english": "This concerns all our safety. Journalist Bex told me.",
						"japanese": "これは私たち全員の安全に関わることです。ジャーナリストのベックスが言っていました。",
						"chinese": "这关乎我们所有人的安全。记者贝克斯告诉我的。",
						"french": "Cela concerne notre sécurité à tous. La journaliste Bex me l'a dit.",
						"spanish": "Esto concierne a nuestra seguridad. La periodista Bex me lo dijo.",
						"vietnamese": "Chuyện này liên quan đến sự an toàn của tất cả chúng ta. Nhà báo Bex đã nói với tôi.",
						"thai": "นี่เป็นเรื่องเกี่ยวกับความปลอดภัยของเราทุกคน นักข่าวเบ็กซ์บอกฉันมา",
						"hindi": "यह हम सबकी सुरक्षा का मामला है। पत्रकार बेक्स ने मुझे बताया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "Bex... 그녀의 말이 전부 사실일까.",
						"english": "Bex... Is everything she says true?",
						"japanese": "ベックス…彼女の言うことは全部本当なのかな。",
						"chinese": "贝克斯…她说的都是真的吗？",
						"french": "Bex... Est-ce que tout ce qu'elle dit est vrai ?",
						"spanish": "Bex... ¿Es todo lo que dice verdad?",
						"vietnamese": "Bex... Liệu mọi điều cô ấy nói đều là sự thật?",
						"thai": "เบ็กซ์... ที่เธอพูดมาทั้งหมดเป็นเรื่องจริงเหรอ?",
						"hindi": "बेक्स... क्या उसकी हर बात सच है?"
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
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "메멘토의 음악에서 슬픔이 느껴진다고요? 그건 위험한 착각이에요.",
						"english": "You feel sadness in Memento's music? That's a dangerous delusion.",
						"japanese": "メメントの音楽に悲しみを感じる？それは危険な錯覚だよ。",
						"chinese": "你从“回忆”的音乐中感受到悲伤？那是一种危险的错觉。",
						"french": "Vous ressentez de la tristesse dans la musique de Memento ? C'est une dangereuse illusion.",
						"spanish": "¿Sientes tristeza en la música de Memento? Eso es una peligrosa ilusión.",
						"vietnamese": "Bạn cảm thấy buồn trong âm nhạc của Memento ư? Đó là một ảo tưởng nguy hiểm.",
						"thai": "คุณรู้สึกเศร้าในเพลงของเมเมนโต้เหรอ? นั่นเป็นภาพลวงตาที่อันตรายนะ",
						"hindi": "मेमेंटो के संगीत में उदासी महसूस होती है? वह एक खतरनाक भ्रम है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만... 그 속에 뭔가 있어.",
						"english": "But... there's something in it.",
						"japanese": "でも…その中に何かある。",
						"chinese": "但是…那里面有什么。",
						"french": "Mais... il y a quelque chose dedans.",
						"spanish": "Pero... hay algo ahí.",
						"vietnamese": "Nhưng... có điều gì đó trong đó.",
						"thai": "แต่... มีบางอย่างอยู่ในนั้น",
						"hindi": "लेकिन... उसमें कुछ है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거리의 방랑자가 잊힌 노래를 읊조린다. '지켜지지 않는 맹세'를 비웃는 가사였다.",
						"english": "A street wanderer hums a forgotten song. Its lyrics mocked 'unkept vows'.",
						"japanese": "通りの放浪者が忘れられた歌を口ずさむ。「守られなかった誓い」を嘲笑う歌詞だった。",
						"chinese": "街头流浪者低声吟唱着一首被遗忘的歌。歌词嘲笑着“未兑现的誓言”。",
						"french": "Un vagabond des rues fredonne une chanson oubliée. Ses paroles se moquaient des 'vœux non tenus'.",
						"spanish": "Un vagabundo callejero tararea una canción olvidada. Su letra se burlaba de los 'votos incumplidos'.",
						"vietnamese": "Một kẻ lang thang trên phố ngân nga một bài hát bị lãng quên. Lời bài hát chế nhạo 'những lời thề không được giữ'.",
						"thai": "คนเร่ร่อนข้างถนนฮัมเพลงที่ถูกลืม เนื้อเพลงเยาะเย้ย 'คำสาบานที่ไม่ได้รักษาไว้'",
						"hindi": "एक सड़क का बंजारा भूला हुआ गीत गुनगुनाता है। उसके बोल 'अनदेखे वादों' का मज़ाक उड़ा रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "Bex가 말했어요. 그 맹세는 도시를 파괴할 거라고.",
						"english": "Bex said that vow would destroy the city.",
						"japanese": "ベックスが言ったわ。その誓いは都市を破壊するって。",
						"chinese": "贝克斯说。那个誓言会摧毁这座城市。",
						"french": "Bex a dit que ce vœu détruirait la ville.",
						"spanish": "Bex dijo que ese juramento destruiría la ciudad.",
						"vietnamese": "Bex nói. Lời thề đó sẽ phá hủy thành phố.",
						"thai": "เบ็กซ์บอกว่าคำสาบานนั้นจะทำลายเมือง",
						"hindi": "बेक्स ने कहा। वह वादा शहर को तबाह कर देगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "우린 그저 진실을 원하는 거예요.",
						"english": "We just want the truth.",
						"japanese": "私たちはただ真実が知りたいだけなの。",
						"chinese": "我们只是想要真相。",
						"french": "Nous voulons juste la vérité.",
						"spanish": "Solo queremos la verdad.",
						"vietnamese": "Chúng tôi chỉ muốn sự thật.",
						"thai": "เราแค่อยากได้ความจริง",
						"hindi": "हम बस सच जानना चाहते हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "더 이상 망설이지 마세요! 메멘토를 막지 않으면 다 끝장이에요.",
						"english": "Don't hesitate any longer! If we don't stop Memento, it's all over.",
						"japanese": "もう迷わないで！メメントを止めないと、すべて終わってしまうよ。",
						"chinese": "别再犹豫了！如果我们不阻止“回忆”，就都完了。",
						"french": "N'hésitez plus ! Si nous n'arrêtons pas Memento, tout est fini.",
						"spanish": "¡No dudes más! Si no detenemos a Memento, todo habrá terminado.",
						"vietnamese": "Đừng do dự nữa! Nếu chúng ta không ngăn chặn Memento, mọi thứ sẽ kết thúc.",
						"thai": "อย่าลังเลอีกเลย! ถ้าเราไม่หยุดเมเมนโต้ ทุกอย่างก็จบสิ้น",
						"hindi": "अब और मत हिचकिचाओ! अगर हम मेमेंटो को नहीं रोकते, तो सब खत्म हो जाएगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 정말... 맞는 걸까.",
						"english": "Is this really... the right thing to do?",
						"japanese": "これって本当に…正しいことなのかな。",
						"chinese": "这真的…对吗？",
						"french": "Est-ce vraiment... la bonne chose à faire ?",
						"spanish": "¿Es esto realmente... lo correcto?",
						"vietnamese": "Chuyện này có thật sự... đúng đắn không?",
						"thai": "นี่มัน... ถูกต้องแล้วเหรอ?",
						"hindi": "क्या यह वाकई... सही है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이건 당신의 선택이 아니에요. 우리의 생존 문제라고요!",
						"english": "This isn't your choice. This is about our survival!",
						"japanese": "これはあなたの選択ではない。我々の生存問題だ！",
						"chinese": "这不是你的选择。这是我们生存的问题！",
						"french": "Ce n'est pas votre choix. C'est une question de survie !",
						"spanish": "Esta no es tu elección. ¡Es cuestión de nuestra supervivencia!",
						"vietnamese": "Đây không phải là lựa chọn của bạn. Đây là vấn đề sống còn của chúng ta!",
						"thai": "นี่ไม่ใช่ทางเลือกของคุณ นี่คือปัญหาการอยู่รอดของเรา!",
						"hindi": "यह आपकी पसंद नहीं है। यह हमारे अस्तित्व का सवाल है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "점점 더 강해지는 여론의 파도. 누군가 뒤에서 조종하는 듯한 불길한 예감.",
						"english": "The rising tide of public opinion. An ominous feeling that someone is pulling the strings.",
						"japanese": "ますます強まる世論の波。誰かが裏で操っているような不吉な予感。",
						"chinese": "舆论的浪潮越来越强。一种不祥的预感，似乎有人在幕后操纵。",
						"french": "La vague montante de l'opinion publique. Un pressentiment sinistre que quelqu'un tire les ficelles.",
						"spanish": "La creciente ola de la opinión pública. Una ominosa sensación de que alguien está manipulando los hilos.",
						"vietnamese": "Làn sóng dư luận ngày càng mạnh mẽ. Một linh cảm đáng ngại rằng ai đó đang giật dây.",
						"thai": "กระแสความคิดเห็นของประชาชนที่เพิ่มขึ้นเรื่อยๆ ลางสังหรณ์ร้ายที่เหมือนมีใครบางคนชักใยอยู่เบื้องหลัง",
						"hindi": "जनता की राय की बढ़ती लहर। एक अशुभ भावना कि कोई पीछे से सब कुछ नियंत्रित कर रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 뒤틀린 욕망이 형체를 드러냈다.",
						"english": "The city's twisted desires have taken form.",
						"japanese": "都市の歪んだ欲望が形を現した。",
						"chinese": "城市的扭曲欲望显现了。",
						"french": "Les désirs tordus de la ville ont pris forme.",
						"spanish": "Los retorcidos deseos de la ciudad han tomado forma.",
						"vietnamese": "Những ham muốn méo mó của thành phố đã thành hình.",
						"thai": "ความปรารถนาที่บิดเบี้ยวของเมืองได้ปรากฏตัวขึ้นแล้ว",
						"hindi": "शहर की विकृत इच्छाओं ने आकार ले लिया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "메멘토는 제거되어야 한다. 그것이 도시의 의지.",
						"english": "Memento must be eliminated. That is the will of the city.",
						"japanese": "メメントは排除されなければならない。それが都市の意志だ。",
						"chinese": "必须清除遗物。那是城市的意志。",
						"french": "Memento doit être éliminé. Telle est la volonté de la ville.",
						"spanish": "Memento debe ser eliminado. Esa es la voluntad de la ciudad.",
						"vietnamese": "Memento phải bị loại bỏ. Đó là ý chí của thành phố.",
						"thai": "เมเมนโต้จะต้องถูกกำจัด นั่นคือเจตจำนงของเมือง",
						"hindi": "मेमेंटो को खत्म करना होगा। यही शहर की इच्छा है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 도시의 의지라고?",
						"english": "You are the will of the city?",
						"japanese": "お前が都市の意志だと？",
						"chinese": "你就是城市的意志？",
						"french": "Tu es la volonté de la ville ?",
						"spanish": "¿Eres la voluntad de la ciudad?",
						"vietnamese": "Ngươi là ý chí của thành phố?",
						"thai": "แกคือเจตจำนงของเมืองเหรอ?",
						"hindi": "तुम शहर की इच्छा हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 그저, 너희의 두려움을 구현했을 뿐.",
						"english": "I merely manifested your fears.",
						"japanese": "私はただ、お前たちの恐怖を具現化しただけだ。",
						"chinese": "我只是，实现了你们的恐惧。",
						"french": "Je n'ai fait qu'incarner vos peurs.",
						"spanish": "Simplemente manifesté vuestros miedos.",
						"vietnamese": "Ta chỉ đơn thuần hiện thực hóa nỗi sợ hãi của các ngươi.",
						"thai": "ฉันแค่ทำให้ความกลัวของพวกแกเป็นจริงเท่านั้น",
						"hindi": "मैंने केवल तुम्हारे डर को साकार किया है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "이것으로 끝이 아니다. {random_boss}는… 다시 나타날 것이다.",
						"english": "This isn't the end. {random_boss} will... reappear.",
						"japanese": "これで終わりではない。{random_boss}は…再び現れるだろう。",
						"chinese": "这还没结束。{random_boss}会……再次出现。",
						"french": "Ce n'est pas la fin. {random_boss} va… réapparaître.",
						"spanish": "Esto no es el final. {random_boss}… reaparecerá.",
						"vietnamese": "Đây không phải là kết thúc. {random_boss} sẽ… xuất hiện trở lại.",
						"thai": "นี่ไม่ใช่จุดจบ {random_boss} จะ... ปรากฏตัวอีกครั้ง",
						"hindi": "यह अंत नहीं है। {random_boss}... फिर से प्रकट होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "또 다른 적이 있다는 건가.",
						"english": "There's another enemy?",
						"japanese": "また別の敵がいるのか。",
						"chinese": "还有另一个敌人吗？",
						"french": "Il y a un autre ennemi ?",
						"spanish": "¿Hay otro enemigo?",
						"vietnamese": "Lại có kẻ thù khác sao?",
						"thai": "มีศัตรูอื่นอีกเหรอเนี่ย",
						"hindi": "क्या कोई और दुश्मन है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "조작된 여론의 그림자는 여전히 도시를 옥죄고 있었다. 진실은 더 깊이 숨어 있었다.",
						"english": "The shadow of manipulated public opinion still gripped the city. The truth lay hidden deeper.",
						"japanese": "操作された世論の影は、依然として都市を締め付けていた。真実はもっと深く隠されていた。",
						"chinese": "被操纵的舆论阴影仍然笼罩着城市。真相隐藏得更深。",
						"french": "L'ombre de l'opinion publique manipulée étreignait toujours la ville. La vérité était cachée plus profondément.",
						"spanish": "La sombra de la opinión pública manipulada seguía oprimiendo la ciudad. La verdad estaba escondida más profundamente.",
						"vietnamese": "Bóng tối của dư luận bị thao túng vẫn đang bóp nghẹt thành phố. Sự thật ẩn giấu sâu hơn.",
						"thai": "เงามืดของความคิดเห็นสาธารณะที่ถูกบงการยังคงรัดตรึงเมืองไว้ ความจริงซ่อนอยู่ลึกกว่านั้น",
						"hindi": "हेरफेर की गई जनमत की छाया अभी भी शहर को घेरे हुए थी। सच्चाई और गहराई में छिपी थी।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "속삭이는 공포가 탐험대를 집어삼켰다.",
						"english": "Whispering dread swallowed the expedition team.",
						"japanese": "ささやく恐怖が探検隊を飲み込んだ。",
						"chinese": "低语的恐惧吞噬了探险队。",
						"french": "La terreur murmurante a englouti l'équipe d'expédition.",
						"spanish": "El terror susurrante engulló al equipo de expedición.",
						"vietnamese": "Nỗi kinh hoàng thì thầm nuốt chửng đội thám hiểm.",
						"thai": "ความหวาดกลัวที่กระซิบกระซาบกลืนกินทีมสำรวจ",
						"hindi": "फुसफुसाता डर अभियान दल को निगल गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희는 이 도시의 의지를 거스를 수 없어.",
						"english": "You cannot defy the will of this city.",
						"japanese": "あなたたちはこの都市の意思に逆らうことはできない。",
						"chinese": "你们无法违抗这座城市的意志。",
						"french": "Vous ne pouvez pas défier la volonté de cette ville.",
						"spanish": "No pueden desafiar la voluntad de esta ciudad.",
						"vietnamese": "Các ngươi không thể chống lại ý chí của thành phố này.",
						"thai": "พวกเจ้าไม่สามารถขัดขืนเจตจำนงของเมืองนี้ได้",
						"hindi": "तुम इस शहर की इच्छा का उल्लंघन नहीं कर सकते।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 우린 진실을 찾을 거야.",
						"english": "It's not over yet. We'll find the truth.",
						"japanese": "まだ終わってない。私たちは真実を見つける。",
						"chinese": "还没结束。我们会找到真相的。",
						"french": "Ce n'est pas encore fini. Nous trouverons la vérité.",
						"spanish": "Aún no ha terminado. Encontraremos la verdad.",
						"vietnamese": "Chưa hết đâu. Chúng ta sẽ tìm ra sự thật.",
						"thai": "ยังไม่จบแค่นี้ เราจะค้นหาความจริง",
						"hindi": "अभी खत्म नहीं हुआ है। हम सच का पता लगाएंगे।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"벡스의 목소리가 도시를 뒤흔든다.",
			"메멘토의 '맹세'는 파멸을 불러올 것이라고.",
			"그러나 그의 음악 속에는 슬픔이 흐르고 있었다.",
			"진실은 가면 뒤에 숨어, 점점 더 공포를 속삭였다."
		],
		"english": [
			"Vex's voice shakes the city.",
			"Memento's 'Oath' will bring ruin.",
			"Yet, sorrow flowed within his music.",
			"Truth hid behind a mask, whispering growing fear."
		],
		"japanese": [
			"ベックスの声が街を揺るがす。",
			"メメントの「誓い」は破滅を招くと。",
			"しかし、彼の音楽には悲しみが流れていた。",
			"真実は仮面の後ろに隠れ、次第に恐怖を囁いた。"
		],
		"chinese": [
			"贝克斯的声音震撼着城市。",
			"记忆的“誓言”将带来毁灭。",
			"然而，他的音乐中流淌着悲伤。",
			"真相藏在面具之后，低语着日益增长的恐惧。"
		],
		"french": [
			"La voix de Vex secoue la ville.",
			"Le « Serment » de Memento causera la ruine.",
			"Pourtant, la tristesse coulait dans sa musique.",
			"La vérité se cachait derrière un masque, chuchotant une peur grandissante."
		],
		"spanish": [
			"La voz de Vex estremece la ciudad.",
			"El \"Juramento\" de Memento traerá la ruina.",
			"Sin embargo, la tristeza fluía en su música.",
			"La verdad se ocultaba tras una máscara, susurrando un miedo creciente."
		],
		"vietnamese": [
			"Giọng nói của Vex làm rung chuyển thành phố.",
			"Lời thề của Memento sẽ mang đến sự hủy diệt.",
			"Dù vậy, nỗi buồn vẫn chảy trong âm nhạc của anh ta.",
			"Sự thật ẩn sau lớp mặt nạ, thì thầm nỗi sợ hãi ngày càng lớn."
		],
		"thai": [
			"เสียงของ Vex เขย่าขวัญเมือง",
			"‘คำสาบาน’ ของ Memento จะนำมาซึ่งความพินาศ",
			"ทว่า ความเศร้าไหลเวียนอยู่ในบทเพลงของเขา",
			"ความจริงซ่อนอยู่หลังหน้ากาก กระซิบความกลัวที่เพิ่มพูน"
		],
		"hindi": [
			"वेक्स की आवाज़ शहर को हिला देती है।",
			"मेमेंटो की 'शपथ' तबाही लाएगी।",
			"फिर भी, उसके संगीत में दुख बह रहा था।",
			"सच एक नकाब के पीछे छिपा था, बढ़ते डर को फुसफुसा रहा था।"
		]
	}
} as const;
