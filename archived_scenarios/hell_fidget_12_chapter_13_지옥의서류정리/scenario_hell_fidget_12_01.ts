export const scenario_hell_fidget_12_01 = {
	"scenario_id": "hell_fidget_12_01",
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
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "눈을 뜨자, 끝없는 서류가 바람에 흩날리는 기묘한 공간이 펼쳐졌다. 이곳이… 지옥?",
						"english": "Opening my eyes, a strange space unfolded, with endless papers scattered by the wind. This is... hell?",
						"japanese": "目を開けると、無限の書類が風に舞う奇妙な空間が広がっていた。ここが…地獄？",
						"chinese": "睁开眼睛，一个奇特的空间展现在眼前，无尽的文件随风飘散。这里就是…地狱？",
						"french": "En ouvrant les yeux, un étrange espace se déploya, avec d'innombrables papiers emportés par le vent. C'est... l'enfer ?",
						"spanish": "Al abrir los ojos, se desplegó un extraño espacio, con papeles interminables esparcidos por el viento. ¿Esto es... el infierno?",
						"vietnamese": "Mở mắt ra, một không gian kỳ lạ hiện ra, với vô số giấy tờ bay lả tả trong gió. Đây là... địa ngục?",
						"thai": "เมื่อลืมตาขึ้นมา ก็พบกับพื้นที่แปลกประหลาดที่มีเอกสารมากมายปลิวว่อนไปตามลม ที่นี่คือ... นรกเหรอ?",
						"hindi": "आँखें खोलने पर, एक अजीब जगह सामने आई, जहाँ अनंत कागज़ हवा में बिखर रहे थे। क्या यही… नर्क है?"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "지옥이… 행정실이라고?",
						"english": "Hell... is an administration office?",
						"japanese": "地獄が…事務室だって？",
						"chinese": "地狱…是行政办公室？",
						"french": "L'enfer... est un bureau administratif ?",
						"spanish": "¿El infierno... es una oficina de administración?",
						"vietnamese": "Địa ngục... là phòng hành chính sao?",
						"thai": "นรก... คือสำนักงานธุรการเหรอ?",
						"hindi": "नर्क… क्या एक प्रशासनिक कार्यालय है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"type": "direction",
					"spot": [
						2,
						4
					]
				},
				{
					"content": {
						"korean": "…새로운 방문자들인가.",
						"english": "...New visitors, are they?",
						"japanese": "…新たな訪問者たちか。",
						"chinese": "…是新的访客吗？",
						"french": "...De nouveaux visiteurs, n'est-ce pas ?",
						"spanish": "...¿Nuevos visitantes?",
						"vietnamese": "...Là những vị khách mới sao?",
						"thai": "...แขกใหม่หรือนี่",
						"hindi": "...नए आगंतुक हैं क्या?"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "돌아가. 여긴 올 곳이 못 돼.",
						"english": "Go back. This is not a place for you.",
						"japanese": "帰れ。ここは来るべき場所じゃない。",
						"chinese": "回去吧。这里不是你该来的地方。",
						"french": "Retourne d'où tu viens. Ce n'est pas un endroit pour toi.",
						"spanish": "Regresa. Este no es tu lugar.",
						"vietnamese": "Về đi. Đây không phải nơi dành cho ngươi.",
						"thai": "กลับไปซะ ที่นี่ไม่ที่ที่แกควรมา",
						"hindi": "वापस जाओ। यह तुम्हारे आने की जगह नहीं है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						5,
						4
					],
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "줄 서! 신규 영혼은 이쪽! 서류 양식은 작성해왔나?!",
						"english": "Line up! New souls, this way! Have you filled out the forms?!",
						"japanese": "並べ！新規の魂はこちらだ！書類の様式は記入してきたか？！",
						"chinese": "排队！新来的灵魂这边！表格填好了吗？！",
						"french": "Faites la queue ! Nouvelles âmes, par ici ! Avez-vous rempli les formulaires ?!",
						"spanish": "¡Hagan fila! ¡Almas nuevas, por aquí! ¿Han rellenado los formularios?!",
						"vietnamese": "Xếp hàng! Linh hồn mới đi lối này! Đã điền xong mẫu đơn chưa?!",
						"thai": "เข้าแถว! วิญญาณใหม่มาทางนี้! กรอกแบบฟอร์มมาแล้วหรือยัง?!",
						"hindi": "लाइन लगाओ! नई आत्माएँ इधर! क्या तुमने फ़ॉर्म भर लिया है?!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "서류? 무슨 서류요?",
						"english": "Papers? What papers?",
						"japanese": "書類？何の書類ですか？",
						"chinese": "文件？什么文件？",
						"french": "Des papiers ? Quels papiers ?",
						"spanish": "¿Papeles? ¿Qué papeles?",
						"vietnamese": "Giấy tờ? Giấy tờ gì ạ?",
						"thai": "เอกสาร? เอกสารอะไรคะ?",
						"hindi": "कागज़ात? कौन से कागज़ात?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "불만 접수 양식! A-37! 빨리 작성해서 제출해!",
						"english": "Complaint form! A-37! Fill it out and submit it quickly!",
						"japanese": "苦情受付用紙！A-37！早く書いて提出しなさい！",
						"chinese": "投诉受理表！A-37！快点填写并提交！",
						"french": "Formulaire de réclamation ! A-37 ! Remplissez-le et soumettez-le vite !",
						"spanish": "¡Formulario de queja! ¡A-37! ¡Rellénalo y envíalo rápido!",
						"vietnamese": "Đơn khiếu nại! A-37! Mau điền vào và nộp đi!",
						"thai": "แบบฟอร์มรับเรื่องร้องเรียน! A-37! รีบกรอกและส่งมาซะ!",
						"hindi": "शिकायत प्रपत्र! A-37! इसे जल्दी से भरें और जमा करें!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…소용없어. 전부 의미 없는 일이야.",
						"english": "...It's no use. It's all meaningless.",
						"japanese": "…無駄だ。全部意味のないことだよ。",
						"chinese": "……没用。一切都没有意义。",
						"french": "...Inutile. Tout est insignifiant.",
						"spanish": "...Es inútil. Todo es en vano.",
						"vietnamese": "...Vô ích thôi. Tất cả đều vô nghĩa.",
						"thai": "...ไร้ประโยชน์. ทุกอย่างไม่มีความหมาย.",
						"hindi": "...कोई फायदा नहीं। सब कुछ व्यर्थ है।"
					},
					"type": "speech",
					"speaker": "ash"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						4
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 찢어진 종이들은 다 뭐지? 어딘가 익숙한데…",
						"english": "What are all these torn papers? They look familiar...",
						"japanese": "この破れた紙は何だ？どこかで見覚えが…",
						"chinese": "这些撕破的纸都是什么？有点眼熟……",
						"french": "C'est quoi tous ces papiers déchirés ? Ça me dit quelque chose…",
						"spanish": "¿Qué son todos estos papeles rotos? Me resultan familiares...",
						"vietnamese": "Mấy mảnh giấy rách này là gì vậy? Trông quen quen...",
						"thai": "กระดาษฉีกพวกนี้คืออะไร? ดูคุ้นๆ นะ...",
						"hindi": "ये फटे हुए कागज़ क्या हैं? कहीं देखे हुए लगते हैं..."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "네가 찾던 것일 수도 있고, 아닐 수도 있어.",
						"english": "It might be what you're looking for, or it might not.",
						"japanese": "君が探しているものかもしれないし、違うかもしれない。",
						"chinese": "也许是你正在找的东西，也许不是。",
						"french": "Ça pourrait être ce que tu cherches, ou pas.",
						"spanish": "Podría ser lo que buscas, o no.",
						"vietnamese": "Có thể là thứ bạn đang tìm, cũng có thể không.",
						"thai": "อาจจะเป็นสิ่งที่คุณกำลังตามหาอยู่ก็ได้ หรือไม่ก็ได้.",
						"hindi": "यह वो हो सकता है जो तुम ढूंढ रहे हो, या नहीं भी।"
					}
				},
				{
					"content": {
						"korean": "여기선 모든 것이 무작위로 분류되거든.",
						"english": "Everything here is categorized randomly.",
						"japanese": "ここではすべてが無作為に分類されるんだ。",
						"chinese": "这里所有东西都是随机分类的。",
						"french": "Ici, tout est classé aléatoirement.",
						"spanish": "Aquí, todo se clasifica al azar.",
						"vietnamese": "Ở đây, mọi thứ đều được phân loại ngẫu nhiên.",
						"thai": "ที่นี่ทุกอย่างถูกจัดหมวดหมู่แบบสุ่ม.",
						"hindi": "यहाँ सब कुछ बेतरतीब ढंग से वर्गीकृत किया जाता है।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "서류 양식이 또 바뀌었다! B-22번으로 다시 작성해! 빨리!",
						"english": "The document form has changed again! Fill it out again with B-22! Quickly!",
						"japanese": "書類様式がまた変わったぞ！B-22番で書き直せ！早く！",
						"chinese": "文件表格又改了！用B-22号重新填写！快点！",
						"french": "Le formulaire a encore changé ! Remplis-le à nouveau avec B-22 ! Vite !",
						"spanish": "¡El formulario ha cambiado de nuevo! ¡Vuelve a rellenarlo con el B-22! ¡Rápido!",
						"vietnamese": "Mẫu tài liệu lại thay đổi rồi! Điền lại bằng B-22! Nhanh lên!",
						"thai": "แบบฟอร์มเอกสารเปลี่ยนอีกแล้ว! กรอกใหม่ด้วย B-22! เร็วเข้า!",
						"hindi": "दस्तावेज़ का फॉर्म फिर बदल गया! इसे B-22 के साथ फिर से भरें! जल्दी!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "또요? 방금 전엔 A-37이었잖아요!",
						"english": "Again? It was A-37 just a moment ago!",
						"japanese": "またですか？さっきはA-37だったじゃないですか！",
						"chinese": "又来了？刚才不是A-37吗！",
						"french": "Encore ? C'était A-37 il y a un instant !",
						"spanish": "¿Otra vez? ¡Hace un momento era el A-37!",
						"vietnamese": "Lại nữa à? Vừa nãy là A-37 mà!",
						"thai": "อีกแล้วเหรอครับ? เมื่อกี้มัน A-37 นี่นา!",
						"hindi": "फिर? अभी थोड़ी देर पहले तो A-37 था!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "불만은 접수 양식 C-01에 적어서 다시 제출해! 순서대로!",
						"english": "Write your complaints on form C-01 and submit them again! In order!",
						"japanese": "不満は受付様式C-01に書いて再提出しろ！順番通りに！",
						"chinese": "不满请写在C-01受理表上，重新提交！按顺序来！",
						"french": "Écris tes plaintes sur le formulaire C-01 et soumets-les à nouveau ! Dans l'ordre !",
						"spanish": "¡Escribe tus quejas en el formulario C-01 y vuelve a presentarlas! ¡En orden!",
						"vietnamese": "Khiếu nại thì viết vào mẫu C-01 rồi nộp lại! Theo thứ tự!",
						"thai": "เขียนคำร้องเรียนลงในแบบฟอร์ม C-01 แล้วส่งใหม่! ตามลำดับ!",
						"hindi": "अपनी शिकायतें C-01 फॉर्म पर लिखें और फिर से जमा करें! क्रम से!"
					}
				},
				{
					"content": {
						"korean": "…어차피 다 사라질 서류들이야.",
						"english": "...They're all just documents that will disappear anyway.",
						"japanese": "…どうせ全部消える書類ばかりだよ。",
						"chinese": "……反正都是会消失的文件。",
						"french": "...Ce ne sont que des documents qui disparaîtront de toute façon.",
						"spanish": "...De todos modos, son documentos que desaparecerán.",
						"vietnamese": "...Dù sao thì cũng chỉ là mấy tài liệu sẽ biến mất thôi.",
						"thai": "...ยังไงซะก็เป็นแค่เอกสารที่จะหายไปอยู่ดี.",
						"hindi": "...ये सब ऐसे दस्तावेज़ हैं जो वैसे भी गायब हो जाएंगे।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						4
					]
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이봐, 저기 좀 봐. 저기는 왜 이렇게 정갈하게 정리되어 있지?",
						"english": "Hey, look over there. Why is that area so neatly organized?",
						"japanese": "おい、あそこを見てみろ。なんであそこだけあんなにきれいに整理されてるんだ？",
						"chinese": "喂，看那边。那里为什么整理得那么整齐？",
						"french": "Hé, regarde là-bas. Pourquoi cet endroit est-il si bien rangé ?",
						"spanish": "Oye, mira allí. ¿Por qué está tan bien organizado ese lugar?",
						"vietnamese": "Này, nhìn đằng kia kìa. Sao chỗ đó lại được sắp xếp gọn gàng vậy nhỉ?",
						"thai": "เฮ้ ดูตรงนั้นสิ. ทำไมตรงนั้นถึงจัดเรียงเรียบร้อยจัง?",
						"hindi": "अरे, वहाँ देखो। वह जगह इतनी साफ-सुथरी क्यों है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "…Fidget의 서류 분류함이야. 완벽하게 무질서한 질서지.",
						"english": "...It's Fidget's filing cabinet. A perfectly disorderly order.",
						"japanese": "...フィジェットの書類棚だ。完璧に無秩序な秩序だね。",
						"chinese": "...这是菲吉特的档案柜。一种完美的无序秩序。",
						"french": "...C'est le classeur de Fidget. Un ordre parfaitement désordonné.",
						"spanish": "...Es el archivador de Fidget. Un orden perfectamente desordenado.",
						"vietnamese": "...Là tủ hồ sơ của Fidget. Một trật tự hoàn hảo trong sự hỗn loạn.",
						"thai": "...นี่คือตู้เก็บเอกสารของฟิดเจ็ต ความเป็นระเบียบที่ไร้ระเบียบอย่างสมบูรณ์แบบ",
						"hindi": "...यह फिτζेट की फ़ाइलिंग कैबिनेट है। एक पूरी तरह से अव्यवस्थित व्यवस्था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 서류에 갇히면 영원히 헤어나올 수 없어.",
						"english": "If you get trapped in those files, you'll never escape.",
						"japanese": "あの書類に閉じ込められたら、永遠に抜け出せない。",
						"chinese": "如果被那些文件困住，你将永远无法逃脱。",
						"french": "Si tu es piégé dans ces dossiers, tu ne t'en sortiras jamais.",
						"spanish": "Si te quedas atrapado en esos papeles, nunca escaparás.",
						"vietnamese": "Nếu bị mắc kẹt trong đống hồ sơ đó, sẽ không bao giờ thoát ra được.",
						"thai": "ถ้าคุณติดอยู่ในเอกสารเหล่านั้น คุณจะไม่มีวันหนีพ้น",
						"hindi": "अगर तुम उन फ़ाइलों में फंस गए, तो कभी नहीं निकल पाओगे।"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서류 미비! 제출 서류 누락! 이봐, 너희 서류는 다 틀렸잖아!",
						"english": "Incomplete documents! Missing submissions! Hey, all your papers are wrong!",
						"japanese": "書類不備！提出書類漏れ！おい、お前たちの書類は全部間違ってるじゃないか！",
						"chinese": "文件不全！缺少提交文件！喂，你们的文件都错了！",
						"french": "Documents incomplets ! Soumissions manquantes ! Hé, tous vos papiers sont faux !",
						"spanish": "¡Documentos incompletos! ¡Faltan entregas! ¡Oye, todos tus papeles están mal!",
						"vietnamese": "Thiếu hồ sơ! Hồ sơ nộp thiếu! Này, tất cả hồ sơ của các người đều sai rồi!",
						"thai": "เอกสารไม่สมบูรณ์! ขาดเอกสารยื่น! เฮ้ เอกสารของพวกแกผิดทั้งหมด!",
						"hindi": "अधूरे दस्तावेज़! गायब प्रस्तुतियां! अरे, तुम्हारे सारे कागजात गलत हैं!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고요? 시키는 대로 했는데!",
						"english": "What? But I did as I was told!",
						"japanese": "何ですって？言われた通りにしたのに！",
						"chinese": "什么？我明明照做了啊！",
						"french": "Quoi ? Mais j'ai fait ce qu'on m'a dit !",
						"spanish": "¿Qué? ¡Pero hice lo que me dijeron!",
						"vietnamese": "Gì cơ? Tôi đã làm theo hướng dẫn mà!",
						"thai": "อะไรนะ? แต่ฉันทำตามที่บอกแล้วนะ!",
						"hindi": "क्या? लेकिन मैंने वही किया जो मुझे बताया गया था!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…규칙은 내가 정해. 다시 제출해! D-04 양식으로!",
						"english": "...I make the rules. Submit it again! Using form D-04!",
						"japanese": "...ルールは私が決める。再提出しろ！D-04様式で！",
						"chinese": "...规则是我定的。重新提交！用D-04表格！",
						"french": "...C'est moi qui fixe les règles. Soumettez-le à nouveau ! Avec le formulaire D-04 !",
						"spanish": "...Yo hago las reglas. ¡Vuelve a presentarlo! ¡Con el formulario D-04!",
						"vietnamese": "...Luật là do tôi đặt ra. Nộp lại đi! Bằng mẫu D-04!",
						"thai": "...ฉันเป็นคนกำหนดกฎ ส่งใหม่ซะ! ใช้แบบฟอร์ม D-04!",
						"hindi": "...नियम मैं बनाता हूँ। इसे फिर से जमा करो! D-04 फॉर्म के साथ!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…봤지? 아무리 노력해도 소용 없어.",
						"english": "...See? It's useless no matter how hard you try.",
						"japanese": "...見たか？どんなに努力しても無駄だ。",
						"chinese": "看见了吧？再怎么努力也没用。",
						"french": "...Tu vois ? C'est inutile, peu importe tes efforts.",
						"spanish": "...¿Ves? Es inútil, no importa cuánto te esfuerces.",
						"vietnamese": "...Thấy chưa? Dù có cố gắng thế nào cũng vô ích thôi.",
						"thai": "...เห็นไหม? พยายามแค่ไหนก็ไร้ประโยชน์",
						"hindi": "...देखा? कितनी भी कोशिश कर लो, कोई फ़ायदा नहीं।"
					},
					"type": "speech",
					"speaker": "ash"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						4
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저 영혼들은 왜 같은 곳을 맴돌지? 뭔가 반복하고 있는 것 같아.",
						"english": "Why do those souls wander in the same place? It seems like they're repeating something.",
						"japanese": "あの魂たちはなぜ同じ場所をさまよう？何かを繰り返しているようだ。",
						"chinese": "那些灵魂为什么总在同一个地方徘徊？它们好像在重复着什么。",
						"french": "Pourquoi ces âmes errent-elles au même endroit ? On dirait qu'elles répètent quelque chose.",
						"spanish": "¿Por qué esas almas deambulan en el mismo lugar? Parece que están repitiendo algo.",
						"vietnamese": "Tại sao những linh hồn đó lại luẩn quẩn ở cùng một chỗ? Có vẻ như chúng đang lặp lại điều gì đó.",
						"thai": "ทำไมวิญญาณเหล่านั้นถึงวนเวียนอยู่แต่ที่เดิม? ดูเหมือนพวกเขากำลังทำอะไรซ้ำๆ",
						"hindi": "वे आत्माएं एक ही जगह पर क्यों भटक रही हैं? लगता है वे कुछ दोहरा रही हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "여기서 벗어나지 못해서 그래. 영원히 똑같은 고통을 반복하는 거야.",
						"english": "It's because they can't escape from here. They're repeating the same pain forever.",
						"japanese": "ここから逃れられないからだ。永遠に同じ苦痛を繰り返しているのさ。",
						"chinese": "因为它们无法摆脱这里。它们永远重复着同样的痛苦。",
						"french": "C'est parce qu'elles ne peuvent pas s'échapper d'ici. Elles répètent la même souffrance éternellement.",
						"spanish": "Es porque no pueden escapar de aquí. Están repitiendo el mismo dolor eternamente.",
						"vietnamese": "Là vì chúng không thể thoát khỏi đây. Chúng đang lặp đi lặp lại cùng một nỗi đau vĩnh viễn.",
						"thai": "เป็นเพราะพวกเขาหนีจากที่นี่ไม่ได้ พวกเขาเป็นคนวนเวียนอยู่กับความเจ็บปวดเดิมๆ ตลอดไป",
						"hindi": "इसलिए क्योंकि वे यहाँ से बच नहीं सकते। वे हमेशा एक ही दर्द दोहरा रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너희도 곧 저렇게 될 거야. 서류에 갇히면 끝이야.",
						"english": "You'll be like that soon too. If you're trapped in the files, it's over.",
						"japanese": "お前たちもじきにああなる。書類に閉じ込められたら終わりだ。",
						"chinese": "你们很快也会变成那样。一旦被文件困住，就完了。",
						"french": "Vous aussi, vous finirez comme ça bientôt. Si vous êtes piégés dans les dossiers, c'est fini.",
						"spanish": "Vosotros también acabaréis así pronto. Si os atrapan en los papeles, se acabó.",
						"vietnamese": "Các người cũng sẽ sớm giống như vậy thôi. Nếu bị mắc kẹt trong hồ sơ, thì kết thúc rồi.",
						"thai": "พวกแกก็จะกลายเป็นแบบนั้นในไม่ช้า ถ้าติดอยู่ในเอกสารก็จบเห่",
						"hindi": "तुम भी जल्द ही वैसे ही हो जाओगे। अगर तुम फ़ाइलों में फंस गए, तो सब ख़त्म।"
					},
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이런 혼란을 야기하는 자들은… 분류가 필요하다!",
						"english": "Those who cause such chaos... need to be classified!",
						"japanese": "このような混乱を引き起こす者たちは… 分類が必要だ！",
						"chinese": "那些制造混乱的人… 需要被分类！",
						"french": "Ceux qui causent un tel chaos... ont besoin d'être classifiés !",
						"spanish": "¡Aquellos que causan tal caos... necesitan ser clasificados!",
						"vietnamese": "Những kẻ gây ra sự hỗn loạn như thế này… cần phải được phân loại!",
						"thai": "ผู้ที่ก่อความวุ่นวายเช่นนี้... จำเป็นต้องถูกจัดหมวดหมู่!",
						"hindi": "जो लोग ऐसी अराजकता फैलाते हैं... उन्हें वर्गीकृत करने की आवश्यकता है!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어디! 이들을 적절하게 ‘분류’해 줄 존재는 없느냐!",
						"english": "Hmph! Is there no one to properly 'classify' these?!",
						"japanese": "ふん！こやつらを適切に「分類」する者はいないのか！",
						"chinese": "哼！就没有人能把他们好好“分类”吗？！",
						"french": "Hmph ! Personne pour les 'classer' correctement ?!",
						"spanish": "¡Hmph! ¿No hay nadie que los 'clasifique' correctamente?!",
						"vietnamese": "Hừ! Không ai có thể 'phân loại' chúng một cách chính xác sao?!",
						"thai": "หึ! ไม่มีใครที่จะ 'จัดหมวดหมู่' พวกนี้ได้อย่างเหมาะสมรึไงกัน!",
						"hindi": "हम्म! क्या इन्हें ठीक से 'वर्गीकृत' करने वाला कोई नहीं है?!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 서류 뭉치 속에서 정체 모를 그림자가 모습을 드러낸다.",
						"english": "An unknown shadow emerges from a colossal pile of documents.",
						"japanese": "巨大な書類の山の中から、正体不明の影が現れる。",
						"chinese": "在巨大的文件堆中，一道不明的影子显现出来。",
						"french": "Une ombre inconnue émerge d'une gigantesque pile de documents.",
						"spanish": "Una sombra desconocida emerge de una pila colosal de documentos.",
						"vietnamese": "Một bóng đen không rõ danh tính xuất hiện từ đống tài liệu khổng lồ.",
						"thai": "เงาลึกลับปรากฏตัวออกมาจากกองเอกสารมหึมา",
						"hindi": "एक अज्ञात छाया विशाल दस्तावेज़ों के ढेर में से प्रकट होती है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…불만 접수? 내 서류는… 완벽하다.",
						"english": "...Complaint received? My documents are... perfect.",
						"japanese": "…不満受理？私の書類は…完璧だ。",
						"chinese": "…收到投诉？我的文件…完美无瑕。",
						"french": "...Une plainte ? Mes documents sont... parfaits.",
						"spanish": "...¿Queja recibida? Mis documentos son... perfectos.",
						"vietnamese": "...Tiếp nhận khiếu nại? Tài liệu của ta... hoàn hảo.",
						"thai": "...รับเรื่องร้องเรียนเหรอ? เอกสารของข้า...สมบูรณ์แบบไร้ที่ติ",
						"hindi": "...शिकायत मिली? मेरे दस्तावेज़...बिल्कुल सही हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저게 뭐야?",
						"english": "What is that?",
						"japanese": "あれは何だ？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Cái gì thế kia?",
						"thai": "นั่นอะไรน่ะ?",
						"hindi": "वह क्या है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나를 거스르는 모든 것은… 분류 오류다.",
						"english": "Everything that defies me... is a classification error.",
						"japanese": "私に逆らうものはすべて…分類エラーだ。",
						"chinese": "所有违抗我的东西…都是分类错误。",
						"french": "Tout ce qui me défie... est une erreur de classification.",
						"spanish": "Todo lo que me desafía... es un error de clasificación.",
						"vietnamese": "Mọi thứ chống đối ta... đều là lỗi phân loại.",
						"thai": "ทุกสิ่งที่ไม่เชื่อฟังข้า...ล้วนเป็นข้อผิดพลาดในการจัดหมวดหมู่",
						"hindi": "जो कुछ भी मुझे चुनौती देता है... वह एक वर्गीकरण त्रुटि है।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스가 거대한 서류 뭉치와 함께 쓰러진다.",
						"english": "The unknown boss falls with a colossal pile of documents.",
						"japanese": "正体不明のボスが、巨大な書類の山と共に倒れる。",
						"chinese": "身份不明的Boss与巨大的文件堆一同倒下。",
						"french": "Le boss inconnu s'effondre avec une gigantesque pile de documents.",
						"spanish": "El jefe desconocido cae junto con una colosal pila de documentos.",
						"vietnamese": "Ông trùm không rõ danh tính gục ngã cùng với đống tài liệu khổng lồ.",
						"thai": "บอสที่ไม่รู้จักล้มลงพร้อมกับกองเอกสารมหึมา",
						"hindi": "अज्ञात बॉस विशाल दस्तावेज़ों के ढेर के साथ गिर जाता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…Fidget… 그가… 이 모든 질서…",
						"english": "...Fidget... He... this whole order...",
						"japanese": "「…フィジェット…彼が…この全ての秩序を…」",
						"chinese": "“…Fidget…他…这所有的秩序…”",
						"french": "...Fidget... Il... tout cet ordre...",
						"spanish": "...Fidget... Él... todo este orden...",
						"vietnamese": "...Fidget... Hắn... tất cả trật tự này...",
						"thai": "...ฟิดเจ็ต... เขา... ระเบียบทั้งหมดนี้...",
						"hindi": "...फिडगेट... उसने... यह सब व्यवस्था..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						4
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "소용 없어. 저건 Fidget이 만들어낸 분류의 일부일 뿐이야.",
						"english": "It's no use. That's just part of the classification Fidget created.",
						"japanese": "「無駄だよ。あれはフィジェットが作り出した分類の一部に過ぎない。」",
						"chinese": "“没用的。那只是Fidget创造的分类的一部分。”",
						"french": "C'est inutile. Ce n'est qu'une partie de la classification créée par Fidget.",
						"spanish": "Es inútil. Eso es solo parte de la clasificación que Fidget creó.",
						"vietnamese": "Vô ích thôi. Đó chỉ là một phần của hệ thống phân loại mà Fidget đã tạo ra.",
						"thai": "ไร้ประโยชน์ นั่นเป็นแค่ส่วนหนึ่งของการจัดหมวดหมู่ที่ฟิดเจ็ตสร้างขึ้นมาเท่านั้น",
						"hindi": "कोई फायदा नहीं। वह फिदगेट द्वारा बनाई गई वर्गीकरण का सिर्फ एक हिस्सा है।"
					},
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "끝이 아니라고?",
						"english": "It's not over?",
						"japanese": "「終わりじゃないって？」",
						"chinese": "“还没结束？”",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿No es el final?",
						"vietnamese": "Chưa kết thúc sao?",
						"thai": "ยังไม่จบเหรอ?",
						"hindi": "क्या यह अंत नहीं है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "…진정한 지옥은… 그 서류의 끝에 있어.",
						"english": "...The true hell... lies at the end of those documents.",
						"japanese": "「…真の地獄は…その書類の果てにある。」",
						"chinese": "“…真正的地狱…在那份文件的尽头。”",
						"french": "...Le véritable enfer... se trouve au bout de ces documents.",
						"spanish": "...El verdadero infierno... está al final de esos documentos.",
						"vietnamese": "...Địa ngục thực sự... nằm ở cuối những tài liệu đó.",
						"thai": "...นรกที่แท้จริง... อยู่ที่ปลายสุดของเอกสารเหล่านั้น",
						"hindi": "...असली नर्क... उन दस्तावेजों के अंत में है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "혼돈 속에서 잠시 정적이 흘렀다. 그러나 탐험대는 알고 있었다. 아직 시작일 뿐이라는 것을.",
						"english": "A momentary silence fell amidst the chaos. But the expedition knew. This was just the beginning.",
						"japanese": "「混沌の中に束の間の静寂が訪れた。しかし、探検隊は知っていた。これはまだ始まりに過ぎないことを。」",
						"chinese": "“混乱中暂时归于寂静。但探险队知道。这只是个开始。”",
						"french": "Un silence momentané tomba au milieu du chaos. Mais l'expédition savait. Ce n'était que le début.",
						"spanish": "Un silencio momentáneo cayó en medio del caos. Pero la expedición sabía. Esto era solo el principio.",
						"vietnamese": "Một khoảnh khắc tĩnh lặng bao trùm giữa sự hỗn loạn. Nhưng đoàn thám hiểm biết. Đây chỉ mới là khởi đầu.",
						"thai": "ความเงียบงันชั่วขณะปกคลุมท่ามกลางความวุ่นวาย แต่คณะสำรวจรู้ดีว่า นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "अराजकता के बीच एक क्षणिक शांति छा गई। लेकिन अभियान दल जानता था। यह तो बस शुरुआत थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"spot": [
						5,
						4
					],
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "분류 오류 영혼들! 모두 폐기 처분해라! {random_boss}!",
						"english": "Classification error souls! Dispose of them all! {random_boss}!",
						"japanese": "分類エラーの魂たちよ！すべて廃棄処分にしろ！{random_boss}！",
						"chinese": "分类错误的灵魂们！全部废弃处理掉！{random_boss}！",
						"french": "Âmes d'erreur de classification ! Éliminez-les toutes ! {random_boss} !",
						"spanish": "¡Almas con error de clasificación! ¡Desháganse de todas ellas! ¡{random_boss}!",
						"vietnamese": "Những linh hồn lỗi phân loại! Hãy xử lý tất cả! {random_boss}!",
						"thai": "เหล่าวิญญาณที่ถูกจัดหมวดหมู่ผิดพลาด! กำจัดพวกมันให้หมด! {random_boss}!",
						"hindi": "वर्गीकरण त्रुटि वाली आत्माएं! उन सभी का निपटारा करो! {random_boss}!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						5
					],
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…불확실성은… 용납하지 않는다.",
						"english": "...Uncertainty... is not tolerated.",
						"japanese": "…不確実性は…許容しない。",
						"chinese": "…不确定性…绝不容忍。",
						"french": "...L'incertitude... n'est pas tolérée.",
						"spanish": "...La incertidumbre... no es tolerada.",
						"vietnamese": "...Sự không chắc chắn... không được chấp nhận.",
						"thai": "...ความไม่แน่นอน...ไม่อาจยอมรับได้",
						"hindi": "...अनिश्चितता...बर्दाश्त नहीं की जाती।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 말도 안 되는 곳에서 빠져나가겠어!",
						"english": "I'm getting out of this absurd place!",
						"japanese": "この馬鹿げた場所から抜け出してやる！",
						"chinese": "我要离开这个荒谬的地方！",
						"french": "Je vais sortir de cet endroit absurde !",
						"spanish": "¡Saldré de este lugar absurdo!",
						"vietnamese": "Tôi sẽ thoát khỏi cái nơi vô lý này!",
						"thai": "ข้าจะออกไปจากที่ไร้สาระนี่ให้ได้!",
						"hindi": "मैं इस बेतुकी जगह से निकल जाऊँगा!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희도 결국… 서류 조각이 될 뿐이다.",
						"english": "You too will ultimately... become mere pieces of paper.",
						"japanese": "お前たちも結局…書類の切れ端になるだけだ。",
						"chinese": "你们最终…也只会变成文件碎片而已。",
						"french": "Vous aussi, vous ne serez finalement... que des morceaux de papier.",
						"spanish": "Ustedes también... al final, solo serán trozos de papel.",
						"vietnamese": "Cuối cùng các ngươi cũng chỉ là... những mảnh giấy mà thôi.",
						"thai": "สุดท้ายแล้ว พวกเจ้าก็เป็นแค่... เศษกระดาษเท่านั้นแหละ",
						"hindi": "तुम भी अंततः... बस कागज़ के टुकड़े बन जाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "서류 뭉치들이 탐험대를 집어삼켰다.",
						"english": "The piles of documents swallowed the expedition whole.",
						"japanese": "「書類の束が探検隊を飲み込んだ。」",
						"chinese": "“成堆的文件吞噬了探险队。”",
						"french": "Les piles de documents engloutirent l'expédition.",
						"spanish": "Los montones de documentos engulleron a la expedición.",
						"vietnamese": "Những chồng tài liệu đã nuốt chửng đoàn thám hiểm.",
						"thai": "กองเอกสารกลืนกินคณะสำรวจไปจนหมดสิ้น",
						"hindi": "दस्तावेजों के ढेरों ने अभियान दल को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…결국 너희도… 분류될 존재에 불과하다.",
						"english": "...In the end, you too... are merely entities to be classified.",
						"japanese": "「…結局お前たちも…分類される存在に過ぎないのだ。」",
						"chinese": "“…最终你们也…不过是待分类的存在。”",
						"french": "...Au final, vous aussi... n'êtes que des entités à classer.",
						"spanish": "...Al final, vosotros también... sois meras entidades a clasificar.",
						"vietnamese": "...Rốt cuộc thì các ngươi cũng... chỉ là những thực thể để phân loại mà thôi.",
						"thai": "...ท้ายที่สุดแล้ว พวกแกก็... เป็นแค่สิ่งมีชีวิตที่ต้องถูกจัดหมวดหมู่เท่านั้น",
						"hindi": "...अंततः तुम भी... केवल वर्गीकृत होने वाली इकाइयाँ हो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						4
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "…내가 말했잖아. 소용없다고.",
						"english": "...I told you. It's no use.",
						"japanese": "「…言っただろう。無駄だって。」",
						"chinese": "“…我说过吧。没用的。”",
						"french": "...Je te l'avais dit. C'est inutile.",
						"spanish": "...Te lo dije. Es inútil.",
						"vietnamese": "...Ta đã nói rồi mà. Vô ích thôi.",
						"thai": "...ฉันบอกแล้วไงว่ามันไร้ประโยชน์",
						"hindi": "...मैंने कहा था ना। कोई फायदा नहीं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 포기 안 해. 다시 도전한다!",
						"english": "I won't give up yet. I'll challenge again!",
						"japanese": "「まだ諦めない。もう一度挑戦する！」",
						"chinese": "“我还没放弃。再挑战一次！”",
						"french": "Je n'abandonne pas encore. Je retenterai !",
						"spanish": "Todavía no me rindo. ¡Volveré a intentarlo!",
						"vietnamese": "Tôi vẫn chưa bỏ cuộc. Sẽ thử thách lại!",
						"thai": "ฉันยังไม่ยอมแพ้ จะลองท้าทายอีกครั้ง!",
						"hindi": "मैं अभी हार नहीं मानूंगा। मैं फिर कोशिश करूंगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"정신 차려보니 지옥이었다.",
			"…근데 지옥이 이렇게 생겼다고?",
			"차라리 불지옥이 낫겠다. 이건… 그냥 관료제 지옥이었다.",
			"여기서 빠져나가지 못하면, 영원히 서류만 만지다 죽을지도 모른다."
		],
		"english": [
			"Waking up, I found myself in hell.",
			"...But this is what hell looks like?",
			"I'd rather have a hellfire. This... was just a bureaucratic hell.",
			"If I can't escape here, I might die forever pushing papers."
		],
		"japanese": [
			"気づけば、そこは地獄だった。",
			"…でも、地獄ってこんな感じなのか？",
			"いっそ炎の地獄の方がマシだ。これは…ただの官僚制地獄だった。",
			"ここから抜け出せなければ、永遠に書類をいじるだけで死ぬかもしれない。"
		],
		"chinese": [
			"醒来时，我发现自己身处地狱。",
			"…但地狱长这样吗？",
			"我宁愿是火海地狱。这…只是个官僚地狱。",
			"如果我无法逃离这里，我可能会永远与文件为伍直到死去。"
		],
		"french": [
			"Je me suis réveillé et c'était l'enfer.",
			"...Mais l'enfer ressemble à ça ?",
			"Je préférerais l'enfer ardent. C'était... juste un enfer bureaucratique.",
			"Si je ne peux pas m'échapper d'ici, je pourrais mourir à jamais en brassant des papiers."
		],
		"spanish": [
			"Me desperté y era el infierno.",
			"...¿Pero así es como se ve el infierno?",
			"Preferiría un infierno de fuego. Esto... era solo un infierno burocrático.",
			"Si no puedo escapar de aquí, podría morir para siempre manejando papeles."
		],
		"vietnamese": [
			"Tỉnh dậy, tôi thấy mình đang ở địa ngục.",
			"...Nhưng địa ngục trông như thế này sao?",
			"Thà là địa ngục lửa còn hơn. Đây... chỉ là địa ngục quan liêu.",
			"Nếu không thoát khỏi đây, tôi có thể chết vì cứ mãi loay hoay với giấy tờ."
		],
		"thai": [
			"ตื่นขึ้นมาก็พบว่าที่นี่คือนรก",
			"...แต่นรกหน้าตาเป็นแบบนี้เหรอ?",
			"ฉันว่านรกเพลิงยังจะดีกว่า นี่มัน... แค่นรกระบบราชการชัดๆ",
			"ถ้าหนีจากที่นี่ไม่ได้ ฉันอาจจะต้องตายไปกับการทำเอกสารตลอดไป"
		],
		"hindi": [
			"जब मैं जागा, तो मैं नर्क में था।",
			"...पर क्या नर्क ऐसा दिखता है?",
			"इससे तो आग का नर्क बेहतर था। यह… बस नौकरशाही का नर्क था।",
			"अगर मैं यहाँ से नहीं निकल पाया, तो शायद हमेशा के लिए कागज़ों में ही मर जाऊँगा।"
		]
	}
} as const;
