export const scenario_modern_albin_36_01 = {
	"scenario_id": "modern_albin_36_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"content": {
						"korean": "네온 불빛 아래, 번화가는 활기로 가득했다. 알빈의 마술은 그 활기 속 작은 소란이었다.",
						"english": "Under neon lights, the bustling street was full of life. Albin's magic was a small commotion amidst that energy.",
						"japanese": "ネオンの光の下、繁華街は活気に満ちていた。アルビンの魔術はその活気の中の小さな騒ぎだった。",
						"chinese": "在霓虹灯下，繁华的街道充满活力。阿尔宾的魔术是这片活力中的一点小骚动。",
						"french": "Sous les néons, la rue animée débordait de vie. La magie d'Albin n'était qu'une petite agitation au milieu de cette énergie.",
						"spanish": "Bajo las luces de neón, la calle bulliciosa estaba llena de vida. La magia de Albin era una pequeña conmoción en medio de esa energía.",
						"vietnamese": "Dưới ánh đèn neon, phố phường nhộn nhịp đầy sức sống. Màn ảo thuật của Albin chỉ là một sự náo động nhỏ giữa dòng năng lượng đó.",
						"thai": "ใต้แสงไฟนีออน ถนนที่พลุกพล่านเต็มไปด้วยชีวิตชีวา มายากลของอัลบินเป็นความวุ่นวายเล็กๆ ท่ามกลางพลังงานนั้น",
						"hindi": "नियॉन रोशनी के नीचे, हलचल भरा बाजार जीवंत था। अल्बिन का जादू उस ऊर्जा के बीच एक छोटी सी हलचल थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "으음… 저 마술사, 좀 이상한데?",
						"english": "Hmm... that magician, he's a bit strange, isn't he?",
						"japanese": "うーん…あの魔術師、ちょっと変じゃない？",
						"chinese": "嗯…那个魔术师，有点奇怪吧？",
						"french": "Hmm… ce magicien, il est un peu étrange, non ?",
						"spanish": "Mmm... ese mago, es un poco extraño, ¿no?",
						"vietnamese": "Ưm... ảo thuật gia đó, hơi lạ nhỉ?",
						"thai": "อืม... นักมายากลคนนั้นดูแปลกๆ นะ?",
						"hindi": "हम्म... वह जादूगर, थोड़ा अजीब है, है ना?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "허술한 것 같은데, 묘하게 시선을 끄네.",
						"english": "It seems clumsy, but it strangely draws attention.",
						"japanese": "お粗末なようだけど、妙に目を引くね。",
						"chinese": "看起来很粗糙，却莫名地吸引人的目光。",
						"french": "Ça semble maladroit, mais ça attire étrangement le regard.",
						"spanish": "Parece torpe, pero extrañamente llama la atención.",
						"vietnamese": "Trông có vẻ vụng về, nhưng lại thu hút ánh nhìn một cách kỳ lạ.",
						"thai": "ดูเหมือนจะหละหลวมนะ แต่ก็ดึงดูดสายตาแปลกๆ",
						"hindi": "यह भ्रामक लगता है, लेकिन यह अजीब तरह से ध्यान खींचता है।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마술 뒤에 뭔가 숨기는 것 같기도 하고.",
						"english": "It feels like he's hiding something behind the magic.",
						"japanese": "魔術の裏に何か隠してるようにも見えるし。",
						"chinese": "感觉他好像在魔术背后藏着什么。",
						"french": "On dirait qu'il cache quelque chose derrière sa magie.",
						"spanish": "Parece que esconde algo detrás de la magia.",
						"vietnamese": "Cảm giác như anh ta đang che giấu điều gì đó đằng sau màn ảo thuật.",
						"thai": "เหมือนจะซ่อนอะไรบางอย่างไว้เบื้องหลังมายากลด้วยนะ",
						"hindi": "ऐसा लगता है कि वह जादू के पीछे कुछ छिपा रहा है।"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "nia",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "(조심스럽게 다가오며) 저 사람… 공연은 매일 하는데, 수상한 소문이 많아요.",
						"english": "(Approaching cautiously) That person... he performs every day, but there are many suspicious rumors about him.",
						"japanese": "(用心深く近づきながら)あの人…毎日公演してるけど、怪しい噂が多いんです。",
						"chinese": "(小心翼翼地走过来) 那个人…他每天都表演，但关于他的可疑传闻很多。",
						"french": "(S'approchant prudemment) Cette personne… il se produit tous les jours, mais il y a beaucoup de rumeurs suspectes à son sujet.",
						"spanish": "(Acercándose con cautela) Esa persona... actúa todos los días, pero hay muchos rumores sospechosos sobre él.",
						"vietnamese": "(Tiếp cận thận trọng) Người đó… anh ta biểu diễn hàng ngày, nhưng có rất nhiều tin đồn đáng ngờ về anh ta.",
						"thai": "(เดินเข้ามาอย่างระมัดระวัง) คนนั้นน่ะ... เขาแสดงทุกวัน แต่มีข่าวลือแปลกๆ เยอะเลย",
						"hindi": "(सावधानी से पास आते हुए) वह व्यक्ति... वह हर दिन प्रदर्शन करता है, लेकिन उसके बारे में कई संदिग्ध अफवाहें हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "소문이요?",
						"english": "Rumors?",
						"japanese": "噂ですか？",
						"chinese": "传闻？",
						"french": "Des rumeurs ?",
						"spanish": "¿Rumores?",
						"vietnamese": "Tin đồn ư?",
						"thai": "ข่าวลือเหรอครับ?",
						"hindi": "अफवाहें?"
					},
					"type": "speech"
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "네. 이 근처 가게 사람들이 이상한 일들을 겪었대요. 중요한 서류가 사라지거나…",
						"english": "Yes. People in nearby shops have been experiencing strange things. Important documents disappearing or...",
						"japanese": "はい。このあたりの店の人がおかしなことを経験したそうです。重要な書類がなくなったり…",
						"chinese": "是的。这附近的店主们都遇到了一些奇怪的事情。重要的文件消失了，或者……",
						"french": "Oui. Les commerçants du coin ont vécu des choses étranges. Des documents importants ont disparu ou...",
						"spanish": "Sí. La gente de las tiendas cercanas ha estado experimentando cosas extrañas. Documentos importantes desapareciendo o...",
						"vietnamese": "Vâng. Mọi người ở các cửa hàng gần đây đã gặp phải những chuyện lạ. Tài liệu quan trọng bị biến mất hoặc...",
						"thai": "ครับ/ค่ะ คนแถวร้านนี้เจอเรื่องแปลกๆ ครับ/ค่ะ เอกสารสำคัญหายไปบ้าง หรือว่า...",
						"hindi": "हाँ। आस-पास की दुकानों के लोग अजीबोगरीब घटनाओं का सामना कर रहे हैं। महत्वपूर्ण दस्तावेज़ गायब हो जाते हैं या..."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "(초조하게 주위를 살피며) 사람들이… 그 서류들을 알빈이 가져갔다고 속삭여요. 마술로 감쪽같이.",
						"english": "(Anxiously looking around) People are... whispering that Albin took those documents. Vanished them with magic.",
						"japanese": "(不安そうに周りを見回しながら) 人々が… その書類をアルビンが持っていったと囁いています。魔法で跡形もなく。",
						"chinese": "(焦躁地环顾四周) 人们……在窃窃私语，说阿尔宾拿走了那些文件。用魔法变没了。",
						"french": "(Regardant nerveusement autour de lui) Les gens… chuchotent qu'Albin a pris ces documents. Disparus par magie.",
						"spanish": "(Mirando ansiosamente a su alrededor) La gente… susurra que Albin se llevó esos documentos. Desaparecidos con magia.",
						"vietnamese": "(Vừa lo lắng nhìn quanh) Mọi người… đang xì xào rằng Albin đã lấy những tài liệu đó. Biến mất một cách thần kỳ bằng phép thuật.",
						"thai": "(มองไปรอบๆ อย่างกระวนกระวาย) ผู้คน... กระซิบกันว่าอัลบินเอาเอกสารเหล่านั้นไป ทำให้มันหายไปอย่างไร้ร่องรอยด้วยเวทมนตร์",
						"hindi": "(घबराकर चारों ओर देखते हुए) लोग... फुसफुसा रहे हैं कि एल्बिन ने वे दस्तावेज़ ले लिए। जादू से गायब कर दिया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "마술로 서류를 훔친다고요?",
						"english": "Stealing documents with magic?",
						"japanese": "魔法で書類を盗むんですか？",
						"chinese": "用魔法偷文件？",
						"french": "Voler des documents par magie ?",
						"spanish": "¿Robar documentos con magia?",
						"vietnamese": "Trộm tài liệu bằng phép thuật sao?",
						"thai": "ขโมยเอกสารด้วยเวทมนตร์เหรอ?",
						"hindi": "जादू से दस्तावेज़ चुरा रहे हैं?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "네. 그런데 그냥 평범한 서류가 아니라, 아주 복잡한 숫자들로 가득한 서류였대요.",
						"english": "Yes. But they weren't just ordinary documents; they were filled with very complex numbers.",
						"japanese": "はい。でもただの普通の書類ではなく、とても複雑な数字でいっぱいの書類だったそうです。",
						"chinese": "是的。但那不是普通的文档，而是充满了非常复杂的数字。",
						"french": "Oui. Mais ce n'étaient pas de simples documents ordinaires ; ils étaient remplis de chiffres très complexes.",
						"spanish": "Sí. Pero no eran documentos ordinarios, estaban llenos de números muy complejos.",
						"vietnamese": "Vâng. Nhưng đó không chỉ là những tài liệu bình thường, mà là những tài liệu chứa đầy những con số rất phức tạp.",
						"thai": "ครับ/ค่ะ แต่มันไม่ใช่แค่เอกสารธรรมดา มันเป็นเอกสารที่เต็มไปด้วยตัวเลขที่ซับซ้อนมาก",
						"hindi": "हाँ। लेकिन वे सिर्फ़ साधारण दस्तावेज़ नहीं थे; वे बहुत जटिल संख्याओं से भरे हुए थे।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "알빈은 마지막 마술을 끝내고 무심하게 카드 한 장을 던졌다. 희미하게 복잡한 숫자 배열이 보였다.",
						"english": "After finishing his last trick, Albin casually tossed a card. A faint, complex array of numbers was visible.",
						"japanese": "アルビンは最後のマジックを終え、何気なくカードを一枚投げた。微かに複雑な数字の配列が見えた。",
						"chinese": "阿尔宾完成最后一场魔术后，漫不经心地扔出一张牌。隐约可见一组复杂的数字。",
						"french": "Après avoir terminé son dernier tour, Albin jeta nonchalamment une carte. Une faible série de chiffres complexes était visible.",
						"spanish": "Después de terminar su último truco, Albin arrojó una carta con indiferencia. Se veía una débil y compleja matriz de números.",
						"vietnamese": "Sau khi kết thúc trò ảo thuật cuối cùng, Albin thờ ơ ném ra một lá bài. Một dãy số phức tạp mờ ảo hiện ra.",
						"thai": "หลังจากจบการแสดงมายากลสุดท้าย อัลบินก็โยนไพ่ใบหนึ่งออกไปอย่างไม่ใส่ใจ เค้าโครงของตัวเลขที่ซับซ้อนปรากฏให้เห็นจางๆ",
						"hindi": "अपना आखिरी जादू खत्म करने के बाद, एल्बिन ने लापरवाही से एक कार्ड फेंका। एक हल्की, जटिल संख्यात्मक सारणी दिखाई दे रही थी।"
					}
				},
				{
					"content": {
						"korean": "(카드를 주우며) 이 숫자는 뭐지?",
						"english": "(Picking up the card) What are these numbers?",
						"japanese": "(カードを拾いながら) この数字は何だ？",
						"chinese": "(捡起卡片) 这些数字是什么？",
						"french": "(Ramassant la carte) C'est quoi ces chiffres ?",
						"spanish": "(Recogiendo la tarjeta) ¿Qué son estos números?",
						"vietnamese": "(Nhặt lá bài lên) Những con số này là gì vậy?",
						"thai": "(หยิบไพ่ขึ้นมา) ตัวเลขพวกนี้คืออะไร?",
						"hindi": "(कार्ड उठाते हुए) ये संख्याएँ क्या हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "nia"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "(점점 더 불안해하며) 모두들 알빈을 피해요. 공연을 보다가 갑자기 사라진 사람도 있다는 소문도 돌아요.",
						"english": "(Growing more and more uneasy) Everyone's avoiding Albin. There are even rumors of people vanishing suddenly while watching his performance.",
						"japanese": "(ますます不安になりながら) みんなアルビンを避けています。公演を見ている最中に突然いなくなった人もいるという噂も流れています。",
						"chinese": "(越来越不安) 大家都躲着阿尔宾。甚至有传言说，有人在看他的表演时突然消失了。",
						"french": "(De plus en plus inquiet) Tout le monde évite Albin. On murmure même que des gens ont disparu subitement en regardant son spectacle.",
						"spanish": "(Cada vez más inquieto) Todos evitan a Albin. Incluso corren rumores de que la gente desaparece de repente mientras ve su actuación.",
						"vietnamese": "(Càng ngày càng bất an) Mọi người đều tránh mặt Albin. Thậm chí còn có tin đồn về những người đột nhiên biến mất khi đang xem biểu diễn của anh ta.",
						"thai": "(รู้สึกไม่สบายใจมากขึ้นเรื่อยๆ) ทุกคนหลีกเลี่ยงอัลบิน มีข่าวลือด้วยว่ามีคนหายตัวไปอย่างกะทันหันขณะชมการแสดงของเขา",
						"hindi": "(और ज़्यादा बेचैन होते हुए) सब लोग एल्बिन से बच रहे हैं। यहाँ तक कि यह भी अफवाहें हैं कि लोग उसका प्रदर्शन देखते हुए अचानक गायब हो गए हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "사라졌다고요?",
						"english": "Vanished?",
						"japanese": "いなくなったって？",
						"chinese": "消失了？",
						"french": "Disparus ?",
						"spanish": "¿Desaparecidos?",
						"vietnamese": "Biến mất sao?",
						"thai": "หายไปเหรอ?",
						"hindi": "गायब हो गए?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "네. 정확히는… 아무도 모르게 조용히, 마치 없었던 사람처럼요.",
						"english": "Yes. To be precise... quietly, without anyone knowing, as if they never existed.",
						"japanese": "はい。正確には… 誰も知らずに静かに、まるで最初からいなかったかのように。",
						"chinese": "是的。确切地说……悄无声息地，在无人知晓的情况下，仿佛他们从未存在过一样。",
						"french": "Oui. Plus précisément… discrètement, sans que personne ne le sache, comme s'ils n'avaient jamais existé.",
						"spanish": "Sí. Para ser exactos... en silencio, sin que nadie lo supiera, como si nunca hubieran existido.",
						"vietnamese": "Vâng. Chính xác là… lặng lẽ, không ai hay biết, như thể họ chưa từng tồn tại.",
						"thai": "ครับ/ค่ะ พูดให้ถูกคือ... อย่างเงียบๆ โดยไม่มีใครรู้ ราวกับว่าพวกเขาไม่เคยมีตัวตนมาก่อน",
						"hindi": "हाँ। ठीक से कहें तो... चुपचाप, बिना किसी को बताए, मानो वे कभी थे ही नहीं।"
					}
				},
				{
					"content": {
						"korean": "뭔가 위험한데.",
						"english": "Something's dangerous.",
						"japanese": "何か危険だ。",
						"chinese": "有点危险。",
						"french": "C'est dangereux.",
						"spanish": "Esto es peligroso.",
						"vietnamese": "Có gì đó nguy hiểm.",
						"thai": "มันอันตรายนะเนี่ย",
						"hindi": "कुछ खतरनाक है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(거의 울먹이며) 제발 돌아가세요! 이 이상 알빈을 쫓다간… 당신들도 위험해질 거예요!",
						"english": "(Almost in tears) Please go back! If you chase Alvin any further... you'll be in danger too!",
						"japanese": "(今にも泣き出しそうで) お願い、引き返して！これ以上アルビンを追ったら…あなたたちも危険になるわ！",
						"chinese": "(几乎要哭出来) 拜托了，请回去吧！如果再追阿尔文…你们也会有危险的！",
						"french": "(Presque en larmes) S'il vous plaît, rebroussez chemin ! Si vous continuez à poursuivre Alvin… vous serez aussi en danger !",
						"spanish": "(Casi llorando) ¡Por favor, regresen! Si siguen persiguiendo a Alvin... ¡ustedes también estarán en peligro!",
						"vietnamese": "(Gần như sắp khóc) Làm ơn hãy quay về đi! Nếu các người còn đuổi theo Alvin nữa… các người cũng sẽ gặp nguy hiểm đấy!",
						"thai": "(เกือบจะร้องไห้) ได้โปรดกลับไปเถอะ! ถ้ายังตามอัลวินไปมากกว่านี้... พวกคุณก็จะตกอยู่ในอันตรายด้วย!",
						"hindi": "(लगभग रोते हुए) कृपया वापस चले जाओ! अगर तुम एल्बिन का और पीछा करोगे... तो तुम भी खतरे में पड़ जाओगे!"
					}
				},
				{
					"content": {
						"korean": "이미 너무 늦었어. 이 수상한 마술의 진짜 정체를 밝혀내야 해.",
						"english": "It's already too late. We must uncover the true nature of this suspicious magic.",
						"japanese": "もう手遅れだ。この怪しい魔法の本当の正体を暴かなければならない。",
						"chinese": "已经太迟了。我们必须揭露这可疑魔法的真正面目。",
						"french": "Il est déjà trop tard. Nous devons découvrir la véritable nature de cette magie suspecte.",
						"spanish": "Ya es demasiado tarde. Debemos descubrir la verdadera naturaleza de esta magia sospechosa.",
						"vietnamese": "Đã quá muộn rồi. Chúng ta phải vạch trần bản chất thật sự của ma thuật đáng ngờ này.",
						"thai": "มันสายเกินไปแล้ว เราต้องเปิดเผยตัวตนที่แท้จริงของเวทมนตร์น่าสงสัยนี้",
						"hindi": "बहुत देर हो चुकी है। हमें इस संदिग्ध जादू की असली प्रकृति का पता लगाना होगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진실은 언제나 이면에 숨어있지.",
						"english": "The truth is always hidden beneath the surface.",
						"japanese": "真実はいつも裏に隠されている。",
						"chinese": "真相总是隐藏在背后。",
						"french": "La vérité est toujours cachée derrière.",
						"spanish": "La verdad siempre se esconde detrás.",
						"vietnamese": "Sự thật luôn ẩn giấu đằng sau.",
						"thai": "ความจริงมักจะซ่อนอยู่เบื้องหลังเสมอ",
						"hindi": "सच हमेशा परदे के पीछे छिपा होता है।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 니아의 경고를 뒤로 하고, 알빈의 그림자가 드리워진 어둠 속으로 발걸음을 옮겼다.",
						"english": "Ignoring Nia's warning, the expedition moved deeper into the darkness where Alvin's shadow loomed.",
						"japanese": "探検隊はニアの警告を背に、アルビンの影が差す闇の中へと足を踏み入れた。",
						"chinese": "探险队将妮娅的警告抛诸脑后，迈进了阿尔文阴影笼罩的黑暗之中。",
						"french": "Ignorant l'avertissement de Nia, l'expédition s'enfonça dans l'obscurité où l'ombre d'Alvin planait.",
						"spanish": "Ignorando la advertencia de Nia, la expedición se adentró en la oscuridad donde la sombra de Alvin se cernía.",
						"vietnamese": "Bỏ qua lời cảnh báo của Nia, đoàn thám hiểm tiến sâu hơn vào bóng tối nơi bóng dáng Alvin bao trùm.",
						"thai": "คณะสำรวจเพิกเฉยต่อคำเตือนของเนียและก้าวเข้าสู่ความมืดที่เงาของอัลวินทอดทาบอยู่",
						"hindi": "निया की चेतावनी को नज़रअंदाज़ करते हुए, अभियान अंधेरे में और गहराई तक बढ़ गया जहाँ एल्बिन की छाया मंडरा रही थी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 허물어졌다. 하지만 알 수 없는 숫자의 파편들이 흩어졌다.",
						"english": "The colossal shadow crumbled. However, countless fragments scattered.",
						"japanese": "巨大な影は崩れ去った。しかし、無数の破片が散らばった。",
						"chinese": "巨大的影子崩溃了。然而，无数碎片四散开来。",
						"french": "L'ombre colossale s'effondra. Cependant, d'innombrables fragments se dispersèrent.",
						"spanish": "La sombra colosal se desmoronó. Sin embargo, innumerables fragmentos se dispersaron.",
						"vietnamese": "Cái bóng khổng lồ sụp đổ. Tuy nhiên, vô số mảnh vỡ đã vương vãi.",
						"thai": "เงาขนาดมหึมาพังทลายลง อย่างไรก็ตาม ชิ้นส่วนจำนวนนับไม่ถ้วนกระจัดกระจายไป",
						"hindi": "विशाल छाया बिखर गई। हालाँकि, अनगिनत टुकड़े बिखर गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "(흐릿해지는 목소리) 크크… 고작 그림자를 베었을 뿐… 진짜 장부는… 아무도 찾을 수 없을 거다…",
						"english": "(Fading voice) Heh heh... You only cut down a shadow... The real ledger... No one will ever find it...",
						"japanese": "(薄れる声) クク… 影を斬っただけだ… 本当の帳簿は… 誰も見つけられないだろう…",
						"chinese": "(声音逐渐模糊) 呵呵……只不过斩断了一个影子……真正的账簿……谁也找不到……",
						"french": "(Voix s'éteignant) Huhu... Tu n'as fait que trancher une ombre... Le vrai registre... Personne ne le trouvera jamais...",
						"spanish": "(Voz desvaneciéndose) Jeje... Solo cortaste una sombra... El verdadero libro de contabilidad... Nadie podrá encontrarlo...",
						"vietnamese": "(Giọng nói mờ dần) Khà khà... Ngươi chỉ chém được một cái bóng thôi... Cuốn sổ cái thật sự... Sẽ không ai tìm thấy được đâu...",
						"thai": "(เสียงแผ่วลง) ฮ่าฮ่า... แค่ฟันเงาเท่านั้น... บัญชีจริง... ไม่มีใครหาเจอหรอก...",
						"hindi": "(धीमी होती आवाज) ही ही... तुमने बस एक परछाई को काटा है... असली खाता-बही... कोई नहीं ढूंढ पाएगा..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "장부? 설마 그 사라진 서류들?",
						"english": "A ledger? You mean those missing documents?",
						"japanese": "帳簿？ まさか、あの消えた書類のことか？",
						"chinese": "账簿？难道是那些失踪的文件？",
						"french": "Un registre ? Tu veux dire ces documents disparus ?",
						"spanish": "¿Un libro de contabilidad? ¿Te refieres a esos documentos perdidos?",
						"vietnamese": "Sổ cái? Chẳng lẽ là những tài liệu biến mất đó?",
						"thai": "บัญชีเหรอ? หมายถึงเอกสารที่หายไปพวกนั้นเหรอ?",
						"hindi": "खाता-बही? क्या तुम उन गायब हुए दस्तावेज़ों की बात कर रहे हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 끝이 아니야. 더 큰 그림자가 남아있어.",
						"english": "This isn't the end. A bigger shadow remains.",
						"japanese": "これで終わりじゃない。もっと大きな影が残っている。",
						"chinese": "这不是结束。还有一个更大的影子存在。",
						"french": "Ce n'est pas la fin. Une ombre plus grande demeure.",
						"spanish": "Esto no es el final. Una sombra más grande acecha.",
						"vietnamese": "Đây chưa phải là kết thúc. Một cái bóng lớn hơn vẫn còn đó.",
						"thai": "นี่ไม่ใช่จุดจบ ยังมีเงาที่ใหญ่กว่าเหลืออยู่",
						"hindi": "यह अंत नहीं है। एक बड़ी परछाई अभी भी बची है।"
					},
					"speaker": "character_3",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그림자 마술사는 쓰러졌지만, 그가 남긴 수많은 숫자의 파편들은 도시의 더 깊은 어둠을 암시했다.",
						"english": "The Shadow Mage fell, but the myriad fragments of numbers he left behind hinted at a deeper darkness within the city.",
						"japanese": "影の魔術師は倒れたが、彼が残した無数の数字の破片は、都市のより深い闇を示唆していた。",
						"chinese": "影之魔术师倒下了，但他留下的无数数字碎片却暗示着城市更深层的黑暗。",
						"french": "Le mage des ombres est tombé, mais les innombrables fragments de chiffres qu'il a laissés derrière lui laissaient entrevoir une obscurité plus profonde dans la ville.",
						"spanish": "El Mago de las Sombras cayó, pero los innumerables fragmentos numéricos que dejó atrás insinuaban una oscuridad más profunda en la ciudad.",
						"vietnamese": "Pháp sư Bóng tối đã ngã xuống, nhưng vô số mảnh số liệu mà hắn để lại đã gợi ý về một bóng tối sâu hơn trong thành phố.",
						"thai": "จอมเวทย์เงาล้มลงแล้ว แต่เศษตัวเลขมากมายที่เขาทิ้งไว้เป็นนัยถึงความมืดมิดที่ลึกซึ้งกว่าในเมือง",
						"hindi": "छाया जादूगर गिर गया, लेकिन उसके छोड़े गए अनगिनत संख्या के टुकड़े शहर के भीतर एक गहरी अंधेरे का संकेत दे रहे थे।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "낡은 건물 지하, 희미한 불빛 아래 거대한 그림자가 움직였다.",
						"english": "In the basement of an old building, a colossal shadow stirred under faint light.",
						"japanese": "古い建物の地下、薄暗い光の下で巨大な影が動いた。",
						"chinese": "老旧建筑的地下室里，微弱的灯光下，一个巨大的影子在移动。",
						"french": "Dans le sous-sol d'un vieux bâtiment, une ombre colossale bougea sous une faible lumière.",
						"spanish": "En el sótano de un edificio antiguo, una sombra colosal se movió bajo una luz tenue.",
						"vietnamese": "Trong tầng hầm của một tòa nhà cũ, một cái bóng khổng lồ di chuyển dưới ánh sáng lờ mờ.",
						"thai": "ในชั้นใต้ดินของอาคารเก่า เงาขนาดมหึมาเคลื่อนไหวภายใต้แสงไฟสลัว",
						"hindi": "एक पुरानी इमारत के बेसमेंट में, एक विशाल छाया मंद रोशनी में हिलती हुई दिखी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔군. 내 허술한 마술에 현혹된 어리석은 자들.",
						"english": "...They've come. The fools ensnared by my shoddy magic.",
						"japanese": "…来たな。私の粗末な魔法に惑わされた愚か者どもめ。",
						"chinese": "……来了啊。被我拙劣魔法迷惑的愚蠢之人。",
						"french": "...Ils sont venus. Ces idiots, piégés par ma magie de pacotille.",
						"spanish": "...Han llegado. Los tontos que cayeron en mi magia chapucera.",
						"vietnamese": "…Chúng đã đến. Những kẻ ngốc bị mắc lừa bởi ma thuật tồi tàn của ta.",
						"thai": "...มาแล้วสินะ พวกงี่เง่าที่หลงกลเวทมนตร์กระจอกของข้า",
						"hindi": "...वे आ गए। मेरे घटिया जादू से फँसे मूर्ख।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가 알빈의 마술 뒤에 숨어있던 진짜 배후인가?",
						"english": "Are you the true mastermind behind Alvin's magic?",
						"japanese": "お前がアルビンの魔法の裏に隠れていた本当の黒幕か？",
						"chinese": "你就是隐藏在阿尔文魔法背后的真正幕后主使吗？",
						"french": "Es-tu le véritable cerveau derrière la magie d'Alvin ?",
						"spanish": "¿Eres el verdadero cerebro detrás de la magia de Alvin?",
						"vietnamese": "Ngươi có phải là kẻ chủ mưu thực sự ẩn sau ma thuật của Alvin không?",
						"thai": "แกคือตัวบงการที่แท้จริงที่ซ่อนอยู่เบื้องหลังเวทมนตร์ของอัลวินงั้นหรือ?",
						"hindi": "क्या तुम एल्बिन के जादू के पीछे असली मास्टरमाइंड हो?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "배후? 나는 이 도시의 혼란을 조율하는 지휘자다. 너희는 그저 거슬리는 악보일 뿐.",
						"english": "Mastermind? I am the conductor orchestrating this city's chaos. You are merely a discordant note.",
						"japanese": "黒幕？私はこの都市の混乱を調律する指揮者だ。お前たちはただの邪魔な楽譜に過ぎない。",
						"chinese": "幕后主使？我是协调这座城市混乱的指挥家。你们不过是碍眼的乐谱罢了。",
						"french": "Cerveau ? Je suis le chef d'orchestre qui mène le chaos de cette ville. Vous n'êtes qu'une note discordante.",
						"spanish": "¿Cerebro? Soy el director que orquesta el caos de esta ciudad. Ustedes son solo una nota discordante.",
						"vietnamese": "Kẻ chủ mưu? Ta là người điều khiển sự hỗn loạn của thành phố này. Các ngươi chỉ là những nốt nhạc chướng tai mà thôi.",
						"thai": "ตัวบงการงั้นหรือ? ข้าคือวาทยกรผู้ควบคุมความโกลาหลของเมืองนี้ พวกเจ้าเป็นเพียงโน้ตเพลงที่น่ารำคาญเท่านั้น",
						"hindi": "मास्टरमाइंड? मैं इस शहर की अराजकता को नियंत्रित करने वाला कंडक्टर हूँ। तुम तो बस एक बेसुरी धुन हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "악보? 웃기지 마!",
						"english": "A discordant note? Don't make me laugh!",
						"japanese": "楽譜？ふざけるな！",
						"chinese": "乐谱？别开玩笑了！",
						"french": "Une note discordante ? Ne me fais pas rire !",
						"spanish": "¿Una nota? ¡No me hagas reír!",
						"vietnamese": "Nốt nhạc ư? Đừng có đùa!",
						"thai": "โน้ตเพลงงั้นหรือ? อย่ามาหัวเราะเยาะ!",
						"hindi": "धुन? मुझे हँसाओ मत!"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그림자가 모든 것을 집어삼켰다. 탐험대는 어둠 속에 갇혔다.",
						"english": "The shadow consumed everything. The expedition team was trapped in darkness.",
						"japanese": "影がすべてを飲み込んだ。探検隊は闇の中に閉じ込められた。",
						"chinese": "影子吞噬了一切。探险队被困在黑暗中。",
						"french": "L'ombre a tout englouti. L'équipe d'exploration a été piégée dans l'obscurité.",
						"spanish": "La sombra lo consumió todo. El equipo de expedición quedó atrapado en la oscuridad.",
						"vietnamese": "Cái bóng đã nuốt chửng mọi thứ. Đội thám hiểm bị mắc kẹt trong bóng tối.",
						"thai": "เงาได้กลืนกินทุกสิ่ง ทีมสำรวจถูกขังอยู่ในความมืด",
						"hindi": "परछाई ने सब कुछ निगल लिया। अभियान दल अंधेरे में फंस गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들… 진실은 너희가 감당할 수 있는 것이 아니다.",
						"english": "Foolish humans... The truth is not something you can handle.",
						"japanese": "愚かな人間たち… 真実は君たちが耐えられるものではない。",
						"chinese": "愚蠢的人类……真相不是你们能承受的。",
						"french": "Humains stupides... La vérité n'est pas quelque chose que vous pouvez supporter.",
						"spanish": "Humanos tontos... La verdad no es algo que puedan soportar.",
						"vietnamese": "Lũ người ngu ngốc... Sự thật không phải là thứ các ngươi có thể chịu đựng được.",
						"thai": "มนุษย์ที่โง่เขลา... ความจริงไม่ใช่สิ่งที่พวกเจ้าจะรับไหว",
						"hindi": "मूर्ख इंसान... सच तुम संभाल नहीं पाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "...아직 끝나지 않았어. 포기하지 않아!",
						"english": "...It's not over yet. I won't give up!",
						"japanese": "…まだ終わってない。諦めない！",
						"chinese": "……还没结束。我不会放弃！",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas !",
						"spanish": "...Todavía no ha terminado. ¡No me rendiré!",
						"vietnamese": "...Vẫn chưa kết thúc. Tôi sẽ không từ bỏ!",
						"thai": "...ยังไม่จบ ฉันจะไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"네온 불빛 아래, 도시의 밤은 평범했다.",
			"거리의 마술사 알빈. 그의 손끝에서 기묘한 환상이 피어났다.",
			"사람들은 환호했지만, 탐험대는 봤다. 허술한 마술 뒤의 섬뜩한 그림자를.",
			"그 이질감은 불길한 예고였다."
		],
		"english": [
			"Under neon lights, the city night was ordinary.",
			"Albin, the street magician. Strange illusions bloomed from his fingertips.",
			"People cheered, but the expedition team saw. A chilling shadow behind the clumsy magic.",
			"That strangeness was an ominous premonition."
		],
		"japanese": [
			"ネオンの光の下、街の夜は平凡だった。",
			"街の魔術師アルビン。彼の指先から奇妙な幻想が咲き乱れた。",
			"人々は歓声を上げたが、探検隊は見た。お粗末な魔術の裏に潜む不気味な影を。",
			"その異質さは、不吉な予兆だった。"
		],
		"chinese": [
			"在霓虹灯下，城市的夜晚平淡无奇。",
			"街头魔术师阿尔宾。奇妙的幻象在他的指尖绽放。",
			"人们欢呼雀跃，但探险队看到了。拙劣魔术背后那令人毛骨悚然的影子。",
			"那种异样感是不祥的预兆。"
		],
		"french": [
			"Sous les néons, la nuit de la ville était ordinaire.",
			"Albin, le magicien de rue. D'étranges illusions fleurissaient au bout de ses doigts.",
			"Les gens applaudissaient, mais l'équipe d'expédition vit. Une ombre glaçante derrière la magie maladroite.",
			"Cette étrangeté était une prémonition inquiétante."
		],
		"spanish": [
			"Bajo las luces de neón, la noche de la ciudad era ordinaria.",
			"Albin, el mago callejero. Extrañas ilusiones florecían de sus dedos.",
			"La gente aplaudía, pero el equipo de expedición vio. Una sombra escalofriante tras la magia torpe.",
			"Esa extrañeza era una premonición ominosa."
		],
		"vietnamese": [
			"Dưới ánh đèn neon, màn đêm thành phố thật bình thường.",
			"Albin, ảo thuật gia đường phố. Những ảo ảnh kỳ lạ nở rộ từ đầu ngón tay anh ta.",
			"Mọi người reo hò, nhưng đội thám hiểm đã nhìn thấy. Một bóng tối rợn người ẩn sau màn ảo thuật vụng về.",
			"Sự bất thường đó là một điềm báo gở."
		],
		"thai": [
			"ใต้แสงไฟนีออน ค่ำคืนในเมืองก็เป็นไปอย่างปกติ",
			"อัลบิน นักมายากลข้างถนน ภาพลวงตาประหลาดผุดขึ้นจากปลายนิ้วของเขา",
			"ผู้คนส่งเสียงเชียร์ แต่ทีมสำรวจกลับเห็น เงาอันน่าขนลุกเบื้องหลังมายากลที่ดูหละหลวมนั้น",
			"ความแปลกประหลาดนั้นเป็นลางบอกเหตุร้าย"
		],
		"hindi": [
			"नियॉन रोशनी के नीचे, शहर की रात सामान्य थी।",
			"सड़क का जादूगर अल्बिन। उसकी उंगलियों से अजीबोगरीब भ्रम पैदा हुए।",
			"लोगों ने जयकार की, लेकिन अभियान दल ने देखा। उस भ्रामक जादू के पीछे एक भयावह छाया।",
			"वह अजीबपन एक अशुभ पूर्वसूचना थी।"
		]
	}
} as const;
