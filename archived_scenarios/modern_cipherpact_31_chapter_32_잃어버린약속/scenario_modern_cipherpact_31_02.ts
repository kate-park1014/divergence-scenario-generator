export const scenario_modern_cipherpact_31_02 = {
	"scenario_id": "modern_cipherpact_31_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"type": "speech",
					"content": {
						"korean": "Cipher Pact의 암호는 도시 지하의 봉인된 구역으로 이어졌다.",
						"english": "The Cipher Pact's code led to a sealed off area beneath the city.",
						"japanese": "サイファパクトの暗号は、都市地下の封鎖された区域へと続いた。",
						"chinese": "密语契约的密码指向了城市地下的一个封闭区域。",
						"french": "Le code du Pacte Chiffré menait à une zone scellée sous la ville.",
						"spanish": "El código del Pacto Cifrado llevó a un área sellada bajo la ciudad.",
						"vietnamese": "Mật mã của Hiệp Ước Mật Mã dẫn đến một khu vực bị phong tỏa dưới lòng thành phố.",
						"thai": "รหัสของสนธิสัญญาไซเฟอร์นำไปสู่พื้นที่ปิดผนึกใต้เมือง",
						"hindi": "सिफर पैक्ट का कोड शहर के नीचे एक सीलबंद क्षेत्र में ले गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 그 지하 통로?",
						"english": "This is... that underground passage?",
						"japanese": "ここが…その地下通路か？",
						"chinese": "这里就是…那个地下通道？",
						"french": "C'est... ce passage souterrain ?",
						"spanish": "Este es... ¿ese pasaje subterráneo?",
						"vietnamese": "Đây là… lối đi ngầm đó sao?",
						"thai": "นี่คือ... ทางใต้ดินนั่นเหรอ?",
						"hindi": "यह है... वह भूमिगत मार्ग?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "kai",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "결국 여기까지 왔군. 뻔한 영웅 심리.",
						"english": "You made it this far, after all. Typical heroics.",
						"japanese": "結局ここまで来たか。お決まりの英雄気取りだな。",
						"chinese": "你终究还是走到这里了。老套的英雄主义。",
						"french": "Vous êtes arrivé jusqu'ici, après tout. Héroïsme typique.",
						"spanish": "Llegaste hasta aquí, después de todo. Típica heroica.",
						"vietnamese": "Cuối cùng ngươi cũng đến đây rồi. Cái thói anh hùng rởm đời.",
						"thai": "ในที่สุดก็มาถึงจนได้ ความกล้าหาญแบบฮีโร่ไร้สาระ",
						"hindi": "तुम यहाँ तक पहुँच ही गए, आखिर। वही पुरानी हीरोपंती।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "카이? 네가 왜 여기에.",
						"english": "Kai? Why are you here?",
						"japanese": "カイ？なぜここに。",
						"chinese": "凯？你为什么在这里？",
						"french": "Kai ? Pourquoi es-tu ici ?",
						"spanish": "¿Kai? ¿Por qué estás aquí?",
						"vietnamese": "Kai? Tại sao anh lại ở đây?",
						"thai": "ไค? นายมาทำอะไรที่นี่?",
						"hindi": "काई? तुम यहाँ क्यों हो?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 그저 구경꾼이야. 너희처럼… 어리석지 않거든.",
						"english": "I'm just a bystander. Unlike you... I'm not foolish.",
						"japanese": "俺はただの傍観者だ。お前たちのように…愚かじゃない。",
						"chinese": "我只是个旁观者。不像你们…我没那么蠢。",
						"french": "Je ne suis qu'un spectateur. Contrairement à vous... je ne suis pas stupide.",
						"spanish": "Solo soy un espectador. A diferencia de ustedes... no soy tonto.",
						"vietnamese": "Ta chỉ là một người ngoài cuộc thôi. Không như các ngươi… ta không ngu ngốc.",
						"thai": "ฉันเป็นแค่คนนอก ไม่เหมือนพวกนาย... ฉันไม่โง่หรอก",
						"hindi": "मैं बस एक दर्शक हूँ। तुम्हारे जैसे… मैं मूर्ख नहीं हूँ।"
					},
					"type": "speech",
					"speaker": "kai"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 가족도, 동료도… 조직의 배신으로 사라졌어.",
						"english": "My family, my comrades... vanished due to the organization's betrayal.",
						"japanese": "私の家族も、仲間も…組織の裏切りで消え去った。",
						"chinese": "我的家人，我的同伴…都因组织的背叛而消失了。",
						"french": "Ma famille, mes camarades... ont disparu à cause de la trahison de l'organisation.",
						"spanish": "Mi familia, mis compañeros... desaparecieron debido a la traición de la organización.",
						"vietnamese": "Gia đình tôi, đồng đội của tôi… đều biến mất vì sự phản bội của tổ chức.",
						"thai": "ครอบครัวของฉัน สหายของฉัน... หายไปเพราะการทรยศขององค์กร",
						"hindi": "मेरा परिवार, मेरे साथी… संगठन के विश्वासघात के कारण गायब हो गए।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그게 대체 누구의 짓인데.",
						"english": "...Whose doing is that, then?",
						"japanese": "「…一体誰の仕業なんだ。」",
						"chinese": "“……那到底是谁干的？”",
						"french": "...De qui est-ce l'œuvre, alors ?",
						"spanish": "¿...De quién es la culpa, entonces?",
						"vietnamese": "...Vậy rốt cuộc là do ai làm?",
						"thai": "...แล้วใครเป็นคนทำล่ะนั่น?",
						"hindi": "...तो यह सब किसने किया?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "알면 뭐해? 진실은 늘 불완전한 조각일 뿐.",
						"english": "What's the use of knowing? Truth is always just an incomplete fragment.",
						"japanese": "「知ってどうなる？真実はいつも不完全な断片に過ぎない。」",
						"chinese": "“知道了又如何？真相永远只是残缺的碎片。”",
						"french": "À quoi bon savoir ? La vérité n'est toujours qu'un fragment incomplet.",
						"spanish": "¿De qué sirve saber? La verdad es siempre solo un fragmento incompleto.",
						"vietnamese": "Biết thì được gì? Sự thật luôn chỉ là những mảnh ghép không trọn vẹn.",
						"thai": "รู้แล้วได้อะไร? ความจริงก็เป็นแค่เสี้ยวส่วนที่ไม่สมบูรณ์เสมอ",
						"hindi": "जानकर क्या फायदा? सच तो हमेशा अधूरा टुकड़ा ही होता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "낡은 디지털 전광판에 '맹세는 깨어졌다'는 문구가 섬광처럼 스쳤다.",
						"english": "The words 'The oath is broken' flashed across an old digital display like lightning.",
						"japanese": "「古いデジタル掲示板に『誓いは破られた』という文言が閃光のように過った。」",
						"chinese": "“旧的数字显示屏上，‘誓言已破碎’的字样如闪电般划过。”",
						"french": "Sur un vieux panneau numérique, la phrase 'Le serment est brisé' apparut comme un éclair.",
						"spanish": "En un viejo panel digital, la frase 'La promesa está rota' pasó como un destello.",
						"vietnamese": "Dòng chữ 'Lời thề đã bị phá vỡ' lướt qua màn hình kỹ thuật số cũ như một tia chớp.",
						"thai": "ข้อความ 'คำสาบานได้ถูกทำลายแล้ว' แวบขึ้นบนป้ายดิจิทัลเก่าเหมือนแสงแฟลช",
						"hindi": "एक पुराने डिजिटल बोर्ड पर 'शपथ टूट गई' का संदेश बिजली की तरह कौंध गया।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고대 기록 저장소는 폐허가 되어 있었다. 모든 것이 부서져 있었다.",
						"english": "The ancient archive was in ruins. Everything was shattered.",
						"japanese": "「古代の記録保管庫は廃墟と化していた。すべてが打ち砕かれていた。」",
						"chinese": "“古老的档案库已成废墟。一切都已破碎。”",
						"french": "L'ancien dépôt d'archives était en ruines. Tout était brisé.",
						"spanish": "El antiguo archivo estaba en ruinas. Todo estaba destrozado.",
						"vietnamese": "Kho lưu trữ cổ đại đã trở thành một đống đổ nát. Mọi thứ đều bị phá hủy.",
						"thai": "หอจดหมายเหตุโบราณกลายเป็นซากปรักหักพัง ทุกสิ่งพังทลาย",
						"hindi": "प्राचीन अभिलेखागार खंडहर में तब्दील हो गया था। सब कुछ टूट चुका था।"
					}
				},
				{
					"content": {
						"korean": "봐. 여기에 모든 진실이 담겨 있었지. 이젠 흔적도 없어.",
						"english": "Look. All the truth was here. Now, not even a trace remains.",
						"japanese": "「見ろ。ここにはすべての真実が収められていた。今はもう痕跡もない。」",
						"chinese": "“看。所有的真相都曾在这里。现在，连痕迹都没有了。”",
						"french": "Regarde. Toute la vérité était ici. Maintenant, il n'y a plus aucune trace.",
						"spanish": "Mira. Toda la verdad estaba aquí. Ahora, ni rastro queda.",
						"vietnamese": "Nhìn đi. Tất cả sự thật đã từng ở đây. Giờ thì không còn dấu vết gì nữa.",
						"thai": "ดูสิ. ความจริงทั้งหมดอยู่ที่นี่ ตอนนี้ไม่เหลือแม้แต่ร่องรอย",
						"hindi": "देखो। सारी सच्चाई यहीं थी। अब तो कोई निशान भी नहीं।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 이걸… 대체 왜.",
						"english": "Who did this... and why?",
						"japanese": "「誰がこれを…一体なぜ。」",
						"chinese": "“谁做了这个……到底为什么？”",
						"french": "Qui a fait ça... et pourquoi ?",
						"spanish": "¿Quién hizo esto... por qué?",
						"vietnamese": "Ai đã làm điều này... tại sao chứ?",
						"thai": "ใครกันนะที่ทำ...ทำไมล่ะ?",
						"hindi": "यह किसने किया... आखिर क्यों?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실은 누군가에게 불편한 법이니까. 잊혀지길 바라는 거지.",
						"english": "Because the truth is inconvenient for someone. They want it forgotten.",
						"japanese": "「真実は誰かにとって不都合だからな。忘れ去られることを願っているのだ。」",
						"chinese": "“因为真相总会让人不舒服。他们希望它被遗忘。”",
						"french": "Parce que la vérité est dérangeante pour quelqu'un. Ils veulent qu'elle soit oubliée.",
						"spanish": "Porque la verdad es incómoda para alguien. Quieren que sea olvidada.",
						"vietnamese": "Vì sự thật luôn gây khó chịu cho một ai đó. Họ muốn nó bị lãng quên.",
						"thai": "เพราะความจริงมันไม่สะดวกสำหรับบางคน พวกเขาอยากให้มันถูกลืมไป",
						"hindi": "क्योंकि सच किसी के लिए असहज होता है। वे इसे भुला देना चाहते हैं।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…곧 알게 될 거야. 너희도, 나처럼.",
						"english": "...You'll know soon. Both you, and me.",
						"japanese": "「…すぐにわかるだろう。お前たちも、私のように。」",
						"chinese": "“……很快你们就会知道的。你们也会像我一样。”",
						"french": "...Vous le saurez bientôt. Vous aussi, comme moi.",
						"spanish": "...Pronto lo sabréis. Vosotros también, como yo.",
						"vietnamese": "...Rồi các ngươi sẽ sớm biết thôi. Cả các ngươi, cũng như ta.",
						"thai": "...อีกไม่นานพวกนายก็จะรู้เอง ทั้งพวกนายและฉันเลย",
						"hindi": "...जल्द ही तुम्हें पता चल जाएगा। तुम भी, मेरी तरह।"
					},
					"speaker": "kai",
					"type": "speech"
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
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "더 깊이 갈수록… 더 큰 절망만 찾아올 뿐.",
						"english": "The deeper we go... only greater despair awaits.",
						"japanese": "「深く進むほど…より大きな絶望が訪れるだけだ。」",
						"chinese": "“越深入……只会迎来更大的绝望。”",
						"french": "Plus nous allons loin... plus grand sera le désespoir.",
						"spanish": "Cuanto más profundo vayamos... mayor será la desesperación que encontraremos.",
						"vietnamese": "Càng đi sâu... chỉ càng tìm thấy nỗi tuyệt vọng lớn hơn.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่... ก็ยิ่งเจอแต่ความสิ้นหวังที่มากขึ้นเท่านั้น",
						"hindi": "जितना गहरा जाएंगे... उतनी ही बड़ी निराशा मिलेगी।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래도 멈출 수 없어. 우리는 진실을 봐야 해.",
						"english": "Still, we can't stop. We must see the truth.",
						"japanese": "「それでも、止まるわけにはいかない。私たちは真実を見なければならない。」",
						"chinese": "“即便如此，也不能停下。我们必须看到真相。”",
						"french": "Pourtant, nous ne pouvons pas nous arrêter. Nous devons voir la vérité.",
						"spanish": "Aun así, no podemos detenernos. Debemos ver la verdad.",
						"vietnamese": "Dù vậy, chúng ta không thể dừng lại. Chúng ta phải nhìn thấy sự thật.",
						"thai": "ถึงอย่างนั้นก็หยุดไม่ได้ เราต้องเห็นความจริง",
						"hindi": "फिर भी, हम रुक नहीं सकते। हमें सच देखना होगा।"
					}
				},
				{
					"content": {
						"korean": "헛된 희망에 매달리는군. 결국 아무것도 바뀌지 않아.",
						"english": "You cling to false hope. Nothing will change in the end.",
						"japanese": "徒な希望にしがみついているな。結局何も変わらない。",
						"chinese": "你还在紧抓着虚假的希望。最终，什么都不会改变。",
						"french": "Tu t'accroches à un faux espoir. Au final, rien ne changera.",
						"spanish": "Te aferras a una esperanza vana. Al final, nada cambiará.",
						"vietnamese": "Ngươi bám víu vào hy vọng hão huyền. Cuối cùng, chẳng có gì thay đổi đâu.",
						"thai": "เจ้าเกาะติดอยู่กับความหวังที่ไร้สาระ ท้ายที่สุดก็ไม่มีอะไรเปลี่ยนแปลง",
						"hindi": "तुम व्यर्थ आशा से चिपके हो। अंत में कुछ नहीं बदलेगा।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "카이는 차가운 눈으로 탐험대를 비웃을 뿐이었다.",
						"english": "Kai merely scoffed at the expedition team with cold eyes.",
						"japanese": "カイは冷たい目で探検隊を嘲笑うだけだった。",
						"chinese": "凯只是用冰冷的目光嘲笑着探险队。",
						"french": "Kai ne fit que se moquer de l'équipe d'expédition avec des yeux froids.",
						"spanish": "Kai solo se burló del equipo de expedición con ojos fríos.",
						"vietnamese": "Kai chỉ cười khẩy đoàn thám hiểm bằng ánh mắt lạnh lùng.",
						"thai": "ไคเพียงแต่เยาะเย้ยทีมสำรวจด้วยสายตาเย็นชา",
						"hindi": "काई ने ठंडी आँखों से अभियान दल का उपहास किया।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "하찮은 승리… 결국 아무것도 바뀌지 않아. 이 도시의 맹세는…",
						"english": "A paltry victory... In the end, nothing changes. The city's vow is...",
						"japanese": "些細な勝利…結局何も変わらない。この都市の誓いは…",
						"chinese": "一场微不足道的胜利……最终，什么都不会改变。这座城市的誓言是……",
						"french": "Une maigre victoire... Au final, rien ne change. Le vœu de cette ville est...",
						"spanish": "Una victoria insignificante... Al final, nada cambia. El juramento de esta ciudad es...",
						"vietnamese": "Một chiến thắng tầm thường… Cuối cùng, chẳng có gì thay đổi. Lời thề của thành phố này là…",
						"thai": "ชัยชนะอันเล็กน้อย... ท้ายที่สุดก็ไม่มีอะไรเปลี่ยนแปลง คำปฏิญาณของเมืองนี้คือ...",
						"hindi": "एक तुच्छ जीत... अंत में कुछ नहीं बदलता। इस शहर की शपथ है..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "…何だと？",
						"chinese": "……你说什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "…Cái gì?",
						"thai": "...ว่าไงนะ?",
						"hindi": "...क्या कहा?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "내가 말했지? 결국 다 부서질 뿐이라고.",
						"english": "Didn't I tell you? Everything just crumbles eventually.",
						"japanese": "言っただろう？結局、全てが壊れるだけだと。",
						"chinese": "我不是说了吗？最终一切都会支离破碎。",
						"french": "Je l'avais dit, non ? Au final, tout finit par se briser.",
						"spanish": "¿No te lo dije? Al final, todo se rompe.",
						"vietnamese": "Tôi đã nói rồi mà? Cuối cùng thì mọi thứ cũng chỉ tan vỡ thôi.",
						"thai": "ฉันบอกแล้วใช่ไหม? สุดท้ายทุกอย่างก็แค่พังทลายลงเท่านั้นแหละ",
						"hindi": "मैंने कहा था ना? अंततः सब कुछ बिखर जाता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이게 정말 승리일까.",
						"english": "...Is this truly a victory?",
						"japanese": "…これが本当に勝利なのか。",
						"chinese": "…这真的是胜利吗？",
						"french": "...Est-ce vraiment une victoire ?",
						"spanish": "¿...Es esto realmente una victoria?",
						"vietnamese": "...Đây có thật sự là một chiến thắng?",
						"thai": "...นี่คือชัยชนะจริงๆ หรือ?",
						"hindi": "...क्या यह सचमुच जीत है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "첫 번째 그림자는 사라졌지만, 탐험대의 마음에 깊은 허무감이 자리 잡았다. 균열은 더욱 깊어지고 있었다.",
						"english": "The first shadow vanished, but a profound sense of emptiness settled in the explorers' hearts. The rift was deepening further.",
						"japanese": "最初の影は消え去ったが、探検隊の心には深い虚無感が宿った。亀裂はさらに深まっていた。",
						"chinese": "第一个影子消失了，但一种深刻的虚无感却在探险队心中扎根。裂痕正在加深。",
						"french": "La première ombre disparut, mais un profond sentiment de vide s'installa dans le cœur des explorateurs. La fissure s'approfondissait davantage.",
						"spanish": "La primera sombra se desvaneció, pero una profunda sensación de vacío se instaló en los corazones de los exploradores. La grieta se hacía cada vez más profunda.",
						"vietnamese": "Bóng ma đầu tiên biến mất, nhưng một cảm giác trống rỗng sâu sắc đã định cư trong lòng những nhà thám hiểm. Vết nứt ngày càng sâu hơn.",
						"thai": "เงาแรกหายไปแล้ว แต่ความรู้สึกว่างเปล่าอันลึกซึ้งได้เข้ามาแทนที่ในใจของคณะสำรวจ รอยแยกยิ่งลึกขึ้นไปอีก",
						"hindi": "पहली परछाई तो गायब हो गई, लेकिन खोजकर्ताओं के दिलों में गहरी शून्यता घर कर गई। दरारें और गहरी होती जा रही थीं।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "탐험대는 여기서 끝이다. 너희의 진실은… 영원히 봉인될 것이다.",
						"english": "The expedition ends here. Your truth... will be sealed forever.",
						"japanese": "探検隊はここで終わりだ。お前たちの真実は…永遠に封印されるだろう。",
						"chinese": "探险队到此为止。你们的真相…将永远被封印。",
						"french": "L'expédition se termine ici. Votre vérité... sera scellée à jamais.",
						"spanish": "La expedición termina aquí. Vuestra verdad... será sellada para siempre.",
						"vietnamese": "Đoàn thám hiểm kết thúc tại đây. Sự thật của các ngươi… sẽ bị phong ấn vĩnh viễn.",
						"thai": "คณะสำรวจสิ้นสุดลงแค่นี้ ความจริงของพวกเจ้า... จะถูกผนึกไว้ตลอดกาล",
						"hindi": "अभियान यहीं समाप्त होता है। तुम्हारी सच्चाई... हमेशा के लिए सील कर दी जाएगी।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아니… 아직 끝나지 않았어.",
						"english": "No... it's not over yet.",
						"japanese": "いや…まだ終わっていない。",
						"chinese": "不…还没结束。",
						"french": "Non... ce n'est pas encore fini.",
						"spanish": "No... aún no ha terminado.",
						"vietnamese": "Không... vẫn chưa kết thúc đâu.",
						"thai": "ไม่... ยังไม่จบหรอก",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "진실을 찾아? 웃기는군. 패배만이 있을 뿐.",
						"english": "Searching for truth? Ridiculous. There is only defeat.",
						"japanese": "真実を探すだと？笑わせるな。あるのは敗北だけだ。",
						"chinese": "寻找真相？可笑。只有失败。",
						"french": "Chercher la vérité ? Ridicule. Il n'y a que la défaite.",
						"spanish": "¿Buscando la verdad? Ridículo. Solo hay derrota.",
						"vietnamese": "Tìm kiếm sự thật ư? Nực cười. Chỉ có thất bại mà thôi.",
						"thai": "ตามหาความจริงงั้นเหรอ? น่าขำ มีแต่ความพ่ายแพ้เท่านั้นแหละ",
						"hindi": "सच्चाई ढूंढ रहे हो? हास्यास्पद। केवल हार ही है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…다시 일어설 거야. 반드시.",
						"english": "...I will rise again. Absolutely.",
						"japanese": "…また立ち上がる。必ず。",
						"chinese": "…我会再次站起来。一定会。",
						"french": "...Je me relèverai. Absolument.",
						"spanish": "...Me levantaré de nuevo. Sin falta.",
						"vietnamese": "...Tôi sẽ đứng dậy một lần nữa. Nhất định.",
						"thai": "...ฉันจะลุกขึ้นอีกครั้ง ให้ได้",
						"hindi": "...मैं फिर उठूंगा। निश्चित रूप से।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이 구역의 심장부, 거대한 그림자가 탐험대를 가로막았다.",
						"english": "In the heart of this sector, a colossal shadow blocked the expedition team's path.",
						"japanese": "この区域の心臓部で、巨大な影が探検隊の行く手を阻んだ。",
						"chinese": "在这区域的核心，一个巨大的影子挡住了探险队的去路。",
						"french": "Au cœur de ce secteur, une ombre colossale barra la route à l'équipe d'expédition.",
						"spanish": "En el corazón de este sector, una sombra colosal bloqueó el camino del equipo de expedición.",
						"vietnamese": "Tại trung tâm khu vực này, một bóng đen khổng lồ đã chặn đường đoàn thám hiểm.",
						"thai": "ณ ใจกลางของโซนนี้ เงาขนาดมหึมาได้ขวางทางทีมสำรวจ",
						"hindi": "इस क्षेत्र के हृदय में, एक विशाल छाया ने अभियान दल का रास्ता रोक दिया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 왔느냐, 어리석은 자들.",
						"english": "You dare come this far, you fools.",
						"japanese": "よくもここまで来たな、愚か者ども。",
						"chinese": "你们这群愚蠢的家伙，竟敢来到这里。",
						"french": "Comment osez-vous venir jusqu'ici, idiots.",
						"spanish": "¿Os atrevéis a llegar tan lejos, necios?",
						"vietnamese": "Ngươi dám đến tận đây sao, lũ ngu xuẩn.",
						"thai": "กล้าดียังไงถึงมาถึงที่นี่ได้ เจ้าพวกโง่เง่า",
						"hindi": "इतनी दूर आने की हिम्मत कैसे हुई तुम्हारी, मूर्खों।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 진실을 가로막는 괴물이군.",
						"english": "You're the monster blocking the truth.",
						"japanese": "お前が真実を阻む怪物だな。",
						"chinese": "你就是那个阻碍真相的怪物。",
						"french": "Tu es le monstre qui bloque la vérité.",
						"spanish": "Eres el monstruo que bloquea la verdad.",
						"vietnamese": "Ngươi là quái vật ngăn cản sự thật.",
						"thai": "แกคือสัตว์ประหลาดที่ขวางทางความจริง",
						"hindi": "तुम ही हो वह राक्षस जो सच को रोक रहा है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실? 너희가 감당할 수 있는 것은… 죽음뿐이다.",
						"english": "Truth? All you can handle is... death.",
						"japanese": "真実だと？お前たちが耐えられるのは…死だけだ。",
						"chinese": "真相？你们能承受的只有……死亡。",
						"french": "La vérité ? Tout ce que vous pouvez supporter, c'est… la mort.",
						"spanish": "¿Verdad? Todo lo que podéis soportar es... la muerte.",
						"vietnamese": "Sự thật? Thứ duy nhất các ngươi có thể gánh chịu… là cái chết mà thôi.",
						"thai": "ความจริง? สิ่งที่พวกเจ้าจะรับไหวก็มีแต่... ความตายเท่านั้นแห",
						"hindi": "सच? तुम बस मौत ही झेल सकते हो।"
					}
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "봐. 또 다른 그림자가 나타났지. 끝없이 반복될 거야.",
						"english": "See? Another shadow has appeared. It will repeat endlessly.",
						"japanese": "見ろ。また別の影が現れた。これは無限に繰り返されるだろう。",
						"chinese": "看。又一个影子出现了。这将无休止地重复下去。",
						"french": "Regardez. Une autre ombre est apparue. Cela se répétera sans fin.",
						"spanish": "Mira. Otra sombra ha aparecido. Se repetirá sin fin.",
						"vietnamese": "Nhìn xem. Một bóng đen khác lại xuất hiện. Nó sẽ lặp lại không ngừng.",
						"thai": "ดูสิ เงาอื่นปรากฏขึ้นแล้ว มันจะวนซ้ำไม่รู้จบ",
						"hindi": "देखो। एक और परछाई आ गई। यह अनंत काल तक दोहराई जाएगी।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "입 다물어, 카이. 우리는 막을 거야.",
						"english": "Shut up, Kai. We'll stop it.",
						"japanese": "黙れ、カイ。俺たちが止める。",
						"chinese": "闭嘴，凯。我们会阻止它。",
						"french": "Tais-toi, Kai. Nous l'arrêterons.",
						"spanish": "Cállate, Kai. Lo detendremos.",
						"vietnamese": "Im đi, Kai. Chúng ta sẽ ngăn chặn nó.",
						"thai": "หุบปากนะไค เราจะหยุดมันเอง",
						"hindi": "चुप रहो, काई। हम इसे रोकेंगे।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"Cipher Pact가 던진 단서. 도시의 심장부를 관통했다.",
			"하지만 그곳은 빛이 닿지 않는 균열의 그림자 속.",
			"진실은 늘 불완전하다는 비웃음만이 가득했다.",
			"첫 번째 그림자가 탐험대를 기다리고 있었다."
		],
		"english": [
			"A clue from the Cipher Pact. It pierced the heart of the city.",
			"But that place was in the shadow of a rift, untouched by light.",
			"Only the sneer that truth is always incomplete filled the air.",
			"The first shadow awaited the expedition team."
		],
		"japanese": [
			"サイファパクトが残した手がかり。それは都市の心臓を貫いた。",
			"だが、そこは光が届かぬ亀裂の影の中。",
			"真実は常に不完全だという嘲笑だけが満ちていた。",
			"最初の影が探検隊を待ち受けていた。"
		],
		"chinese": [
			"密语契约留下的线索。它直指城市的心脏。",
			"然而，那地方在裂缝的阴影中，光线无法触及。",
			"只有嘲笑声充斥着，说真相总是不完整的。",
			"第一个影子正等待着探险队。"
		],
		"french": [
			"Un indice du Pacte Chiffré. Il a transpercé le cœur de la ville.",
			"Mais cet endroit était dans l'ombre d'une faille, intouché par la lumière.",
			"Seul le ricanement que la vérité est toujours incomplète emplissait l'air.",
			"La première ombre attendait l'équipe d'expédition."
		],
		"spanish": [
			"Una pista del Pacto Cifrado. Atravesó el corazón de la ciudad.",
			"Pero ese lugar estaba en la sombra de una grieta, intocable por la luz.",
			"Solo la burla de que la verdad siempre es incompleta llenaba el aire.",
			"La primera sombra esperaba al equipo de expedición."
		],
		"vietnamese": [
			"Một manh mối từ Hiệp Ước Mật Mã. Nó xuyên thẳng vào trung tâm thành phố.",
			"Nhưng nơi đó nằm trong bóng tối của một vết nứt, không một tia sáng nào chạm tới.",
			"Chỉ có tiếng cười nhạo rằng sự thật luôn không trọn vẹn vang vọng khắp nơi.",
			"Bóng tối đầu tiên đang chờ đợi đội thám hiểm."
		],
		"thai": [
			"เบาะแสจากสนธิสัญญาไซเฟอร์ มันเจาะทะลุใจกลางเมือง",
			"แต่ที่นั่นอยู่ในเงามืดของรอยแยกที่แสงส่องไม่ถึง",
			"มีเพียงเสียงเยาะเย้ยว่าความจริงนั้นไม่สมบูรณ์เสมอไป",
			"เงามืดแรกกำลังรอคอยทีมสำรวจ"
		],
		"hindi": [
			"सिफर पैक्ट से मिला सुराग। इसने शहर के दिल को भेद दिया।",
			"लेकिन वह जगह एक दरार की छाया में थी, जहाँ रोशनी नहीं पहुँचती थी।",
			"हवा में केवल यही उपहास भरा था कि सत्य हमेशा अधूरा होता है।",
			"पहली छाया अभियान दल का इंतजार कर रही थी।"
		]
	}
} as const;
