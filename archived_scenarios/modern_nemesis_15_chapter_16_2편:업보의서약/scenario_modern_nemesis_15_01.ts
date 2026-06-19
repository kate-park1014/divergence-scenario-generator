export const scenario_modern_nemesis_15_01 = {
	"scenario_id": "modern_nemesis_15_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
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
					"emotion": "base",
					"content": {
						"korean": "네메시스 빌딩, 그 위압적인 존재감은 도시를 압도했다.",
						"english": "The Nemesis Building, its imposing presence dominated the city.",
						"japanese": "ネメシスビル、その威圧的な存在感は街を圧倒していた。",
						"chinese": "复仇女神大厦，其雄伟的气势压倒了整个城市。",
						"french": "L'immeuble Nemesis, sa présence imposante dominait la ville.",
						"spanish": "El Edificio Nemesis, su imponente presencia dominaba la ciudad.",
						"vietnamese": "Tòa nhà Nemesis, sự hiện diện uy nghi của nó đã lấn át cả thành phố.",
						"thai": "ตึกเนเมซิส การมีอยู่ของมันที่น่าเกรงขามได้ครอบงำเมืองนี้",
						"hindi": "नेमेसिस बिल्डिंग, उसकी प्रभावशाली उपस्थिति ने शहर पर हावी कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "계약은 완벽하다던데, 죽음은 왜 완벽하지 않지?",
						"english": "They say the contract is perfect, so why isn't death?",
						"japanese": "契約は完璧だと言うが、なぜ死は完璧ではないのか？",
						"chinese": "他们说契约是完美的，那为何死亡却不完美？",
						"french": "Ils disent que le contrat est parfait, alors pourquoi la mort ne l'est-elle pas ?",
						"spanish": "Dicen que el contrato es perfecto, ¿entonces por qué la muerte no lo es?",
						"vietnamese": "Họ nói hợp đồng là hoàn hảo, vậy tại sao cái chết lại không?",
						"thai": "พวกเขาบอกว่าสัญญานั้นสมบูรณ์แบบ แล้วทำไมความตายถึงไม่สมบูรณ์แบบ?",
						"hindi": "वे कहते हैं कि अनुबंध उत्तम है, तो फिर मृत्यु क्यों नहीं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bex",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맞아. 이상한 패턴이 있어. 계약 위반자들만 골라서 죽는다고.",
						"english": "Right. There's a strange pattern. Only contract violators are dying.",
						"japanese": "そうだ。奇妙なパターンがある。契約違反者だけが死んでいるんだ。",
						"chinese": "没错。有一个奇怪的模式。只有违反契约的人才会死去。",
						"french": "Exact. Il y a un étrange schéma. Seuls les violateurs de contrat meurent.",
						"spanish": "Cierto. Hay un patrón extraño. Solo los que violan el contrato están muriendo.",
						"vietnamese": "Đúng vậy. Có một kiểu mẫu lạ. Chỉ những người vi phạm hợp đồng mới chết.",
						"thai": "ใช่ มีรูปแบบแปลก ๆ มีแต่ผู้ที่ละเมิดสัญญาเท่านั้นที่ตาย",
						"hindi": "सही है। एक अजीब पैटर्न है। केवल अनुबंध तोड़ने वाले ही मर रहे हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어쩌면… 네메시스의 사무실에 있는 그 오래된 태피스트리가 힌트일지도 몰라.",
						"english": "Perhaps... that old tapestry in Nemesis's office might be a clue.",
						"japanese": "もしかしたら…ネメシスのオフィスにあるあの古いタペストリーがヒントかもしれない。",
						"chinese": "也许……复仇女神办公室里那幅古老的挂毯是个线索。",
						"french": "Peut-être... que cette vieille tapisserie dans le bureau de Nemesis est un indice.",
						"spanish": "Quizás... ese viejo tapiz en la oficina de Nemesis sea una pista.",
						"vietnamese": "Có lẽ... tấm thảm cũ trong văn phòng của Nemesis là một gợi ý.",
						"thai": "บางที... พรมทอผืนเก่าในสำนักงานของเนเมซิสอาจเป็นเบาะแสก็ได้",
						"hindi": "शायद... नेमेसिस के कार्यालय में वह पुरानी टेपेस्ट्री एक सुराग हो सकती है।"
					},
					"speaker": "bex",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내가 조사해봤는데, 사망자들의 몸에서 공통된 표식이 발견돼.",
						"english": "I've investigated, and a common mark is found on the bodies of the deceased.",
						"japanese": "調べてみたんだが、死亡者の体から共通の印が見つかっている。",
						"chinese": "我调查过了，死者身上发现了一个共同的标记。",
						"french": "J'ai enquêté, et une marque commune est trouvée sur les corps des défunts.",
						"spanish": "He investigado, y se encuentra una marca común en los cuerpos de los fallecidos.",
						"vietnamese": "Tôi đã điều tra, và một dấu hiệu chung được tìm thấy trên thi thể của những người đã khuất.",
						"thai": "ฉันสืบมาแล้ว พบรอยสลักที่เหมือนกันบนร่างของผู้ตาย",
						"hindi": "मैंने जांच की है, और मृतकों के शरीर पर एक सामान्य निशान पाया गया है।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "표식? 그게 뭔데?",
						"english": "A mark? What is it?",
						"japanese": "印？それって何だ？",
						"chinese": "标记？那是什么？",
						"french": "Une marque ? Qu'est-ce que c'est ?",
						"spanish": "¿Una marca? ¿Qué es?",
						"vietnamese": "Một dấu hiệu? Đó là gì?",
						"thai": "รอยสลัก? มันคืออะไร?",
						"hindi": "एक निशान? वह क्या है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "말 그대로 '흔적'이야. 뭔가에 묶여있다는 표시처럼.",
						"english": "It's literally a 'trace.' Like a sign of being bound to something.",
						"japanese": "文字通り「痕跡」だ。何かに縛られている印のように。",
						"chinese": "这确实是“痕迹”。就像被某种东西束缚的标记。",
						"french": "C'est littéralement une 'trace'. Comme un signe d'être lié à quelque chose.",
						"spanish": "Es literalmente una 'huella'. Como una señal de estar atado a algo.",
						"vietnamese": "Đúng nghĩa là 'dấu vết'. Như một dấu hiệu bị ràng buộc bởi điều gì đó.",
						"thai": "มันคือ 'ร่องรอย' อย่างแท้จริง เหมือนเป็นสัญลักษณ์ว่าถูกผูกมัดกับบางสิ่ง",
						"hindi": "यह शाब्दिक रूप से एक 'निशान' है। जैसे किसी चीज़ से बंधे होने का संकेत।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건 단순한 우연이 아니야. 누가 의도적으로 조작하고 있어.",
						"english": "This is no mere coincidence. Someone is manipulating things intentionally.",
						"japanese": "これは単なる偶然じゃない。誰かが意図的に操作している。",
						"chinese": "这不是巧合。有人在故意操纵。",
						"french": "Ce n'est pas une simple coïncidence. Quelqu'un manipule délibérément.",
						"spanish": "Esto no es una simple coincidencia. Alguien está manipulando intencionadamente.",
						"vietnamese": "Đây không phải là sự trùng hợp ngẫu nhiên. Có ai đó đang cố ý thao túng.",
						"thai": "นี่ไม่ใช่แค่เรื่องบังเอิญ มีคนจงใจบงการอยู่",
						"hindi": "यह महज संयोग नहीं है। कोई जानबूझकर हेरफेर कर रहा है।"
					},
					"speaker": "bex",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네메시스 사무실의 그 태피스트리 기억나? 핏빛 의식 장면이 그려져 있었잖아.",
						"english": "Remember that tapestry in the Nemesis office? The one with the blood ritual scene.",
						"japanese": "ネメシス事務所のあのタペストリーを覚えているか？血まみれの儀式が描かれていたやつだ。",
						"chinese": "还记得复仇女神办公室里的那幅挂毯吗？上面画着血腥的仪式场景。",
						"french": "Tu te souviens de cette tapisserie dans le bureau de Nemesis ? Celle avec la scène du rituel sanglant.",
						"spanish": "¿Recuerdas ese tapiz en la oficina de Nemesis? El que mostraba una escena de ritual sangriento.",
						"vietnamese": "Nhớ tấm thảm treo tường ở văn phòng Nemesis không? Cái có cảnh nghi lễ đẫm máu ấy.",
						"thai": "จำภาพปักแขวนผนังในสำนักงาน Nemesis ได้ไหม? ที่มีฉากพิธีกรรมเลือดน่ะ",
						"hindi": "नेमेसिस कार्यालय में वह टेपेस्ट्री याद है? जिस पर रक्त अनुष्ठान का दृश्य चित्रित था।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "설마… 그 죽음들이랑 연관이 있다는 거야?",
						"english": "Could it be... connected to those deaths?",
						"japanese": "まさか…あの死と関係があるのか？",
						"chinese": "难道……和那些死亡有关？",
						"french": "Serait-ce... lié à ces morts ?",
						"spanish": "¿Será que... está relacionado con esas muertes?",
						"vietnamese": "Chẳng lẽ… có liên quan đến những cái chết đó sao?",
						"thai": "ไม่จริงน่า... มันเกี่ยวข้องกับการตายเหล่านั้นหรือ?",
						"hindi": "कहीं... उन मौतों से तो जुड़ा नहीं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정확히 일치해. 희생자들의 모습과 표식이 똑같아. 이건 고대의 서약이야.",
						"english": "It matches perfectly. The victims' appearances and markings are identical. This is an ancient covenant.",
						"japanese": "完全に一致する。犠牲者たちの姿と印が同じだ。これは古代の誓約だよ。",
						"chinese": "完全吻合。受害者的样子和标记一模一样。这是一个古老的契约。",
						"french": "Ça correspond parfaitement. Les apparences et les marques des victimes sont identiques. C'est un pacte ancien.",
						"spanish": "Coincide exactamente. La apariencia y las marcas de las víctimas son idénticas. Esto es un pacto ancestral.",
						"vietnamese": "Trùng khớp hoàn toàn. Ngoại hình và dấu hiệu của các nạn nhân y hệt nhau. Đây là một giao ước cổ xưa.",
						"thai": "ตรงกันเป๊ะเลย รูปลักษณ์และเครื่องหมายของเหยื่อเหมือนกันหมด นี่คือพันธสัญญาโบราณ",
						"hindi": "यह बिल्कुल मेल खाता है। पीड़ितों की शक्ल और निशान एक जैसे हैं। यह एक प्राचीन प्रतिज्ञा है।"
					},
					"emotion": "angry",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네메시스는 단순한 기업이 아니야. 뭔가 더 어두운 진실이 있어.",
						"english": "Nemesis isn't just a corporation. There's a darker truth to it.",
						"japanese": "ネメシスは単なる企業じゃない。もっと暗い真実がある。",
						"chinese": "复仇女神不仅仅是一家公司。背后有更黑暗的真相。",
						"french": "Nemesis n'est pas qu'une simple entreprise. Il y a une vérité plus sombre derrière tout ça.",
						"spanish": "Nemesis no es solo una corporación. Hay una verdad más oscura.",
						"vietnamese": "Nemesis không phải là một tập đoàn đơn thuần. Có một sự thật đen tối hơn.",
						"thai": "Nemesis ไม่ใช่แค่บริษัทธรรมดา มันมีเรื่องจริงที่มืดมิดกว่านั้น",
						"hindi": "नेमेसिस सिर्फ एक निगम नहीं है। इसके पीछे एक गहरा और अंधेरा सच है।"
					},
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "우리가 알아낸 건 분명 네메시스의 핵심 비밀일 거야.",
						"english": "What we've discovered must be Nemesis's core secret.",
						"japanese": "我々が突き止めたのは、きっとネメシスの核心的な秘密だ。",
						"chinese": "我们发现的，肯定是复仇女神的核心秘密。",
						"french": "Ce que nous avons découvert doit être le secret fondamental de Nemesis.",
						"spanish": "Lo que hemos descubierto debe ser el secreto principal de Nemesis.",
						"vietnamese": "Những gì chúng ta đã tìm ra chắc chắn là bí mật cốt lõi của Nemesis.",
						"thai": "สิ่งที่เราค้นพบต้องเป็นความลับหลักของ Nemesis แน่นอน",
						"hindi": "हमने जो पता लगाया है, वह निश्चित रूप से नेमेसिस का मुख्य रहस्य होगा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래, 쉽게 내주지 않겠지.",
						"english": "Yes, they won't give it up easily.",
						"japanese": "ああ、簡単には渡さないだろうな。",
						"chinese": "是啊，他们不会轻易放手。",
						"french": "Oui, ils ne le lâcheront pas facilement.",
						"spanish": "Sí, no lo entregarán fácilmente.",
						"vietnamese": "Đúng vậy, họ sẽ không dễ dàng nhả ra đâu.",
						"thai": "ใช่ พวกเขาคงไม่ยอมแพ้ง่ายๆ หรอก",
						"hindi": "हाँ, वे इसे आसानी से नहीं छोड़ेंगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 안쪽에… 이 모든 것을 지키는 자가 있는 것 같아.",
						"english": "Deep inside... there seems to be someone guarding all this.",
						"japanese": "あの奥に…この全てを守る者がいるようだ。",
						"chinese": "在那里面……似乎有守护这一切的人。",
						"french": "Là-dedans... il semble y avoir quelqu'un qui garde tout ça.",
						"spanish": "Ahí dentro... parece haber alguien que protege todo esto.",
						"vietnamese": "Bên trong đó… dường như có kẻ đang canh giữ tất cả những thứ này.",
						"thai": "ข้างในนั้น... เหมือนมีคนคอยปกป้องทุกอย่างอยู่",
						"hindi": "उस अंदरूनी हिस्से में... लगता है कोई है जो इन सब की रखवाली कर रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "두고 볼 순 없어. 더 깊이 들어가야 해.",
						"english": "We can't just stand by. We need to go deeper.",
						"japanese": "見て見ぬふりはできない。もっと深く潜る必要がある。",
						"chinese": "我们不能坐视不理。必须深入下去。",
						"french": "On ne peut pas rester les bras croisés. Il faut aller plus loin.",
						"spanish": "No podemos quedarnos de brazos cruzados. Tenemos que ir más profundo.",
						"vietnamese": "Chúng ta không thể đứng nhìn. Phải đi sâu hơn nữa.",
						"thai": "เราจะอยู่เฉยไม่ได้ ต้องเข้าไปลึกกว่านี้",
						"hindi": "हम बस देखते नहीं रह सकते। हमें और गहराई तक जाना होगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이런… {random_boss}의 힘은… 끝나지 않아….",
						"english": "Ugh... Just this... {random_boss}'s power... isn't over...",
						"japanese": "ぐっ… たかがこれしき… {random_boss}の力は… 終わらぬ…。",
						"chinese": "呃… 仅仅如此… {random_boss}的力量… 永无止境…",
						"french": "Urgh… Juste ça… Le pouvoir de {random_boss}… ne s'achève pas…",
						"spanish": "Argh... Solo esto... El poder de {random_boss}... no termina...",
						"vietnamese": "Khụ... Chỉ thế này thôi sao... Sức mạnh của {random_boss}... chưa kết thúc...",
						"thai": "อึก... แค่นี้เองเหรอ... พลังของ {random_boss}... ไม่สิ้นสุด...",
						"hindi": "उफ़... बस इतना ही... {random_boss} की शक्ति... ख़त्म नहीं हुई..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝까지 발버둥 치는군.",
						"english": "Struggling till the very end.",
						"japanese": "最後までもがくか。",
						"chinese": "挣扎到最后吗。",
						"french": "Tu te débats jusqu'au bout.",
						"spanish": "Sigues luchando hasta el final.",
						"vietnamese": "Vùng vẫy đến cùng.",
						"thai": "ดิ้นรนจนถึงที่สุดสินะ",
						"hindi": "आखिर तक हाथ-पांव मार रहे हो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "쓰러뜨렸지만… 이 서약의 힘은 생각보다 더 깊어.",
						"english": "Defeated, but... the power of this pact runs deeper than expected.",
						"japanese": "倒したが… この誓約の力は、思ったよりも深いな。",
						"chinese": "虽然击败了……但这誓约的力量比想象中更深远。",
						"french": "Vaincu, mais… le pouvoir de ce pacte est plus profond qu'il n'y paraît.",
						"spanish": "Derrotado, pero... el poder de este pacto es más profundo de lo esperado.",
						"vietnamese": "Đã đánh bại, nhưng... sức mạnh của lời thề này sâu hơn tôi nghĩ.",
						"thai": "ล้มลงแล้ว แต่... พลังของคำสาบานนี้ลึกซึ้งกว่าที่คิด",
						"hindi": "हरा दिया, लेकिन... इस अनुबंध की शक्ति उम्मीद से कहीं ज़्यादा गहरी है।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대의 핏빛 서약은, 이제 겨우 그 서막을 열었을 뿐이었다.",
						"english": "The ancient blood pact had only just begun to unfold.",
						"japanese": "古の血の誓約は、今ようやくその序幕を開いたに過ぎなかった。",
						"chinese": "古老的血色誓约，才刚刚拉开序幕。",
						"french": "L'ancien pacte de sang n'avait fait qu'ouvrir son prologue.",
						"spanish": "El antiguo pacto de sangre apenas había abierto su prólogo.",
						"vietnamese": "Lời thề máu cổ xưa, giờ đây mới chỉ hé mở màn dạo đầu.",
						"thai": "พันธสัญญาโลหิตโบราณเพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "प्राचीन रक्त समझौते ने तो अभी सिर्फ़ प्रस्तावना खोली थी।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "감히 여기까지 기어들어오다니… 어리석은 인간들.",
						"english": "How dare you crawl in here... Foolish humans.",
						"japanese": "よくもここまで這い上がってきたな… 愚かな人間どもめ。",
						"chinese": "竟敢爬到这里来……愚蠢的人类。",
						"french": "Comment osez-vous ramper jusqu'ici… Stupides humains.",
						"spanish": "Cómo osas arrastrarte hasta aquí... Estúpidos humanos.",
						"vietnamese": "Dám bò đến tận đây à... Lũ người ngu ngốc.",
						"thai": "กล้าดียังไงถึงคลานมาถึงนี่... มนุษย์โง่เขลาเอ๋ย",
						"hindi": "हिम्मत कैसे हुई तुम्हारी यहां तक रेंगने की... मूर्ख इंसानो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네메시스의 비밀을 지키는 녀석이구나.",
						"english": "So you're the one guarding Nemesis's secret.",
						"japanese": "ネメシスの秘密を守る者か。",
						"chinese": "原来你是守护涅墨西斯秘密的家伙。",
						"french": "Ainsi, tu es celui qui garde le secret de Némésis.",
						"spanish": "Así que eres quien guarda el secreto de Némesis.",
						"vietnamese": "Ngươi là kẻ bảo vệ bí mật của Nemesis.",
						"thai": "แกคือผู้พิทักษ์ความลับของเนเมซิสสินะ",
						"hindi": "तो तुम हो नेमेसिस का रहस्य छिपाने वाला।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "서약을 거스르는 자들은 모두 대가를 치를 것이다.",
						"english": "All who defy the pact shall pay the price.",
						"japanese": "誓約に背く者には、皆代償を払わせよう。",
						"chinese": "所有违背誓约者，都将付出代价。",
						"french": "Tous ceux qui défient le pacte en paieront le prix.",
						"spanish": "Todos los que desafíen el pacto pagarán el precio.",
						"vietnamese": "Tất cả những kẻ chống lại lời thề sẽ phải trả giá.",
						"thai": "ผู้ใดฝืนคำสาบานจักต้องชดใช้",
						"hindi": "जो कोई भी अनुबंध का उल्लंघन करेगा, उसे कीमत चुकानी होगी।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도 예외는 아니야.",
						"english": "And you are no exception.",
						"japanese": "お前たちも例外ではない。",
						"chinese": "你们也不例外。",
						"french": "Et vous ne faites pas exception.",
						"spanish": "Y vosotros no sois la excepción.",
						"vietnamese": "Các ngươi cũng không ngoại lệ.",
						"thai": "พวกเจ้าก็ไม่มีข้อยกเว้น",
						"hindi": "तुम भी कोई अपवाद नहीं हो।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "후훗… 약한 것들. 서약의 힘을 거스를 수 없어.",
						"english": "Hmph... Weaklings. You cannot defy the power of the pact.",
						"japanese": "ふふっ… 弱い者どもめ。誓約の力には逆らえぬ。",
						"chinese": "呵呵……弱者。无法违抗誓约的力量。",
						"french": "Héhé… Faibles créatures. Vous ne pouvez pas défier le pouvoir du pacte.",
						"spanish": "Jejeje... Débiles. No podéis desafiar el poder del pacto.",
						"vietnamese": "Hừm... Đồ yếu ớt. Không thể chống lại sức mạnh của lời thề.",
						"thai": "หึหึ... พวกอ่อนแอ. ไม่อาจต้านทานพลังของคำสาบานได้หรอก",
						"hindi": "हुंह... कमज़ोरों। तुम अनुबंध की शक्ति का उल्लंघन नहीं कर सकते।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어.",
						"english": "Damn it... It's not... over yet.",
						"japanese": "くそっ… まだ… 終わってない。",
						"chinese": "该死……还没……结束。",
						"french": "Maudit… Ce n'est pas… encore fini.",
						"spanish": "Maldita sea... Todavía no... ha terminado.",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc.",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "다시… 도전해야 해.",
						"english": "Must... try again.",
						"japanese": "また… 挑戦しないと。",
						"chinese": "必须… 再次挑战。",
						"french": "Je dois... réessayer.",
						"spanish": "Debo... intentarlo de nuevo.",
						"vietnamese": "Phải... thử lại.",
						"thai": "ต้อง... ลองใหม่",
						"hindi": "फिर... कोशिश करनी होगी।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"완벽한 계약. 모든 것을 보장하는 약속.",
			"그러나 그 이면엔, 기이한 죽음의 그림자가 드리워져 있었다.",
			"벡스와 함께 추적한 진실은, 고대의 피 묻은 서약을 가리켰다.",
			"균열이 시작된다. 이 도시의 가장 깊은 곳에서."
		],
		"english": [
			"A perfect contract. A promise ensuring everything.",
			"Yet, behind it, loomed the shadow of a bizarre death.",
			"The truth we traced with Vex pointed to an ancient, blood-stained vow.",
			"The rift begins. In the deepest parts of this city."
		],
		"japanese": [
			"完璧な契約。すべてを保証する約束。",
			"しかしその裏には、奇妙な死の影が潜んでいた。",
			"ベックスと共に追跡した真実は、古代の血塗られた誓約を指し示した。",
			"亀裂が始まる。この街の最も深い場所で。"
		],
		"chinese": [
			"完美的契约。一个保障一切的承诺。",
			"然而在其背后，却笼罩着离奇死亡的阴影。",
			"与维克斯一起追寻的真相，指向了一份古老的血腥誓约。",
			"裂痕开始。在这座城市最深处。"
		],
		"french": [
			"Un contrat parfait. Une promesse garantissant tout.",
			"Pourtant, derrière cela, planait l'ombre d'une mort étrange.",
			"La vérité que nous avons traquée avec Vex pointait vers un ancien serment taché de sang.",
			"La faille commence. Dans les profondeurs de cette ville."
		],
		"spanish": [
			"Un contrato perfecto. Una promesa que lo garantiza todo.",
			"Sin embargo, detrás de ello, se cernía la sombra de una muerte extraña.",
			"La verdad que rastreamos con Vex apuntaba a un antiguo juramento manchado de sangre.",
			"La grieta comienza. En lo más profundo de esta ciudad."
		],
		"vietnamese": [
			"Một hợp đồng hoàn hảo. Một lời hứa đảm bảo mọi thứ.",
			"Tuy nhiên, đằng sau nó, là bóng ma của một cái chết kỳ lạ.",
			"Sự thật chúng ta theo dõi cùng Vex đã chỉ ra một lời thề cổ xưa, vấy máu.",
			"Rạn nứt bắt đầu. Ở nơi sâu thẳm nhất của thành phố này."
		],
		"thai": [
			"สัญญาที่สมบูรณ์แบบ คำมั่นสัญญาที่รับประกันทุกสิ่ง",
			"ทว่า เบื้องหลังนั้น มีเงาแห่งความตายอันประหลาดปกคลุมอยู่",
			"ความจริงที่เราตามรอยกับ Vex ชี้ไปที่คำสาบานโบราณที่เปื้อนเลือด",
			"รอยแยกเริ่มต้นขึ้น ในส่วนที่ลึกที่สุดของเมืองนี้"
		],
		"hindi": [
			"एक उत्तम अनुबंध। सब कुछ सुनिश्चित करने वाला वादा।",
			"फिर भी, इसके पीछे, एक विचित्र मौत की छाया मंडरा रही थी।",
			"वेक्स के साथ हमने जो सच्चाई खोजी, वह एक प्राचीन, खून से सने हुए वादे की ओर इशारा करती थी।",
			"दरार शुरू होती है। इस शहर के सबसे गहरे हिस्सों में।"
		]
	}
} as const;
