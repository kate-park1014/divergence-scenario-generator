export const scenario_forest_sloth_legacy_01 = {
	"scenario_id": "forest_sloth_legacy_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거리는 텅 비고, 사람들은 그림자처럼 서 있었다.",
						"english": "The streets were empty, and people stood like shadows.",
						"japanese": "通りは空っぽで、人々は影のように立っていた。",
						"chinese": "街道空无一人，人们像影子一样站着。",
						"french": "Les rues étaient vides et les gens se tenaient comme des ombres.",
						"spanish": "Las calles estaban vacías y la gente permanecía como sombras.",
						"vietnamese": "Đường phố trống rỗng, và mọi người đứng như những bóng ma.",
						"thai": "ถนนว่างเปล่า ผู้คนยืนเหมือนเงา",
						"hindi": "सड़कें खाली थीं, और लोग परछाइयों की तरह खड़े थे।"
					}
				},
				{
					"content": {
						"korean": "여기도… 고요함에 잠식된 건가.",
						"english": "Here too... swallowed by silence?",
						"japanese": "ここも… 静寂に侵食されたのか。",
						"chinese": "这里也… 被寂静吞噬了吗？",
						"french": "Ici aussi... englouti par le silence ?",
						"spanish": "¿Aquí también... devorado por el silencio?",
						"vietnamese": "Nơi đây cũng… bị sự tĩnh lặng nuốt chửng ư.",
						"thai": "ที่นี่ก็… ถูกความเงียบกลืนกินไปแล้วหรือเปล่า",
						"hindi": "यहाँ भी... खामोशी ने निगल लिया है क्या?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "ela",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…….",
						"english": "......",
						"japanese": "......",
						"chinese": "......",
						"french": "......",
						"spanish": "......",
						"vietnamese": "......",
						"thai": "......",
						"hindi": "......"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "엘라? 너 여기서 뭐 해.",
						"english": "Ella? What are you doing here?",
						"japanese": "エラ？君、ここで何してるんだ？",
						"chinese": "艾拉？你在这里做什么？",
						"french": "Ella ? Que fais-tu ici ?",
						"spanish": "¿Ella? ¿Qué haces aquí?",
						"vietnamese": "Ella? Cậu làm gì ở đây?",
						"thai": "เอลล่า? เธอมาทำอะไรที่นี่",
						"hindi": "एला? तुम यहाँ क्या कर रही हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아무것도. 아무것도 할 수 없어.",
						"english": "...Nothing. I can't do anything.",
						"japanese": "…何も。何もできない。",
						"chinese": "……什么也做不了。",
						"french": "...Rien. Je ne peux rien faire.",
						"spanish": "...Nada. No puedo hacer nada.",
						"vietnamese": "…Không gì cả. Tớ không thể làm gì.",
						"thai": "…ไม่มีอะไรเลย ฉันทำอะไรไม่ได้",
						"hindi": "…कुछ नहीं। मैं कुछ नहीं कर सकती।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 생각보다 심각해.",
						"english": "This is... more serious than I thought.",
						"japanese": "これは…思ったより深刻だ。",
						"chinese": "这比我想象的要严重。",
						"french": "C'est... plus grave que je ne le pensais.",
						"spanish": "Esto es... más serio de lo que pensaba.",
						"vietnamese": "Cái này… nghiêm trọng hơn tớ nghĩ.",
						"thai": "นี่มัน… ร้ายแรงกว่าที่คิด",
						"hindi": "यह... मेरी सोच से ज़्यादा गंभीर है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ela",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "모든 게 회색이야. 아무것도 느껴지지 않아.",
						"english": "Everything is gray. I feel nothing.",
						"japanese": "全てが灰色だ。何も感じない。",
						"chinese": "一切都是灰色的。我什么都感觉不到。",
						"french": "Tout est gris. Je ne ressens rien.",
						"spanish": "Todo es gris. No siento nada.",
						"vietnamese": "Mọi thứ đều xám xịt. Tôi không cảm thấy gì cả.",
						"thai": "ทุกอย่างเป็นสีเทา ฉันไม่รู้สึกอะไรเลย",
						"hindi": "सब कुछ धूसर है। मुझे कुछ भी महसूस नहीं हो रहा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "슬로우가 남긴 잔재가 이렇게까지….",
						"english": "The remnants of Slow... to this extent...",
						"japanese": "スロウが残した残骸がここまでとは…。",
						"chinese": "慢留下的残余竟然达到了这种程度……",
						"french": "Les vestiges de Slow... à ce point...",
						"spanish": "Los restos de Slow... a tal extremo...",
						"vietnamese": "Tàn dư của Slow... đến mức này...",
						"thai": "เศษซากของสโลว์... ถึงขนาดนี้...",
						"hindi": "स्लो के अवशेष... इस हद तक..."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주변의 나무들이 서서히 투명한 결정을 맺어가고 있었다.",
						"english": "The surrounding trees were slowly forming transparent crystals.",
						"japanese": "周囲の木々はゆっくりと透明な結晶を結んでいった。",
						"chinese": "周围的树木正渐渐结出透明的晶体。",
						"french": "Les arbres alentour formaient lentement des cristaux transparents.",
						"spanish": "Los árboles cercanos estaban formando lentamente cristales transparentes.",
						"vietnamese": "Những cái cây xung quanh đang dần kết tinh thành những tinh thể trong suốt.",
						"thai": "ต้นไม้รอบๆ ค่อยๆ ก่อตัวเป็นผลึกโปร่งใส",
						"hindi": "आस-पास के पेड़ धीरे-धीरे पारदर्शी क्रिस्टल बना रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "…왜 넌 움직여? 왜 싸우는 거야?",
						"english": "...Why do you move? Why do you fight?",
						"japanese": "…なぜ動く？なぜ戦う？",
						"chinese": "……你为什么还要动？为什么要战斗？",
						"french": "...Pourquoi bouges-tu ? Pourquoi te bats-tu ?",
						"spanish": "...¿Por qué te mueves? ¿Por qué luchas?",
						"vietnamese": "...Sao ngươi còn động đậy? Sao ngươi còn chiến đấu?",
						"thai": "...ทำไมแกยังขยับ? ทำไมถึงสู้?",
						"hindi": "...तुम क्यों हिलते हो? क्यों लड़ते हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누군가는 해야 할 일이니까.",
						"english": "Because someone has to do it.",
						"japanese": "誰かがやらねばならないことだからだ。",
						"chinese": "因为总要有人去做。",
						"french": "Parce que quelqu'un doit le faire.",
						"spanish": "Porque alguien tiene que hacerlo.",
						"vietnamese": "Vì phải có người làm.",
						"thai": "เพราะต้องมีใครสักคนทำ",
						"hindi": "क्योंकि किसी को तो करना ही होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ela",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "나는… 그냥 멈추고 싶어.",
						"english": "I... just want to stop.",
						"japanese": "私は…ただ止まりたい。",
						"chinese": "我……只是想停下来。",
						"french": "Je... veux juste arrêter.",
						"spanish": "Yo... solo quiero parar.",
						"vietnamese": "Tôi... chỉ muốn dừng lại.",
						"thai": "ฉัน... แค่อยากหยุด",
						"hindi": "मैं... बस रुकना चाहता हूँ।"
					}
				},
				{
					"content": {
						"korean": "이건 슬로우가 의도한 고요함이 아니야.",
						"english": "This isn't the calm Slow intended.",
						"japanese": "これはスロウが意図した静けさじゃない。",
						"chinese": "这不是慢所预谋的平静。",
						"french": "Ce n'est pas le calme que Slow voulait.",
						"spanish": "Esta no es la calma que Slow pretendía.",
						"vietnamese": "Đây không phải là sự tĩnh lặng mà Slow mong muốn.",
						"thai": "นี่ไม่ใช่ความสงบที่สโลว์ตั้งใจ",
						"hindi": "यह वह शांति नहीं है जो स्लो का इरादा था।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 큰 게 숨어있어. 이 모든 걸 잠식하려는….",
						"english": "Something bigger is hiding. Something that wants to swallow it all...",
						"japanese": "もっと大きなものが潜んでいる。この全てを浸食しようと…。",
						"chinese": "有更大的东西藏着。想要吞噬这一切的……",
						"french": "Quelque chose de plus grand se cache. Quelque chose qui veut tout engloutir...",
						"spanish": "Algo más grande se esconde. Algo que quiere devorarlo todo...",
						"vietnamese": "Có thứ gì đó lớn hơn đang ẩn giấu. Thứ muốn nuốt chửng tất cả...",
						"thai": "มีบางสิ่งที่ใหญ่กว่าซ่อนอยู่ บางสิ่งที่ต้องการกลืนกินทุกอย่าง...",
						"hindi": "कुछ बड़ा छिपा है। जो इन सबको निगलना चाहता है..."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "그게 뭔데? 다 똑같아. 아무것도 바뀌지 않아.",
						"english": "What is it? It's all the same. Nothing changes.",
						"japanese": "それが何だ？何もかも同じだ。何も変わらない。",
						"chinese": "那又怎样？都一样。什么都不会改变。",
						"french": "Qu'est-ce que c'est ? Tout est pareil. Rien ne change.",
						"spanish": "¿Qué es? Todo es igual. Nada cambia.",
						"vietnamese": "Đó là gì? Tất cả đều giống nhau. Không có gì thay đổi.",
						"thai": "มันคืออะไร? มันก็เหมือนเดิมนั่นแหละ ไม่มีอะไรเปลี่ยนไป",
						"hindi": "वह क्या है? सब एक जैसा है। कुछ नहीं बदलता।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "가면 안 돼. 여기서 더 가면… 아무것도 없어.",
						"english": "Don't go. If you go further... there's nothing.",
						"japanese": "行ってはいけない。ここから先は…何もない。",
						"chinese": "不能去。再往前走……就什么都没有了。",
						"french": "N'y va pas. Si tu vas plus loin... il n'y a rien.",
						"spanish": "No vayas. Si avanzas más... no hay nada.",
						"vietnamese": "Đừng đi. Đi xa hơn nữa... sẽ không còn gì cả.",
						"thai": "อย่าไปนะ ถ้าไปต่อจากนี้... ไม่มีอะไรเลย",
						"hindi": "मत जाओ। अगर तुम आगे जाओगे... कुछ भी नहीं है।"
					},
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "하지만 이대로는 아무것도 구할 수 없어.",
						"english": "But like this, we can save nothing.",
						"japanese": "しかし、このままでは何も救えない。",
						"chinese": "但这样下去，我们什么也救不了。",
						"french": "Mais ainsi, nous ne pouvons rien sauver.",
						"spanish": "Pero así, no podemos salvar nada.",
						"vietnamese": "Nhưng cứ thế này, chúng ta không thể cứu vãn bất cứ điều gì.",
						"thai": "แต่ถ้าเป็นแบบนี้ เราจะช่วยอะไรไม่ได้เลย",
						"hindi": "पर ऐसे, हम कुछ भी नहीं बचा सकते।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "가끔 꿈에서… 이상한 목소리가 들려. '진정한 무위'라고….",
						"english": "Sometimes in dreams... I hear a strange voice. It says, 'True Non-Action'...",
						"japanese": "時々夢で… 奇妙な声が聞こえる。「真の無為」と…。",
						"chinese": "有时在梦中… 我听到一个奇怪的声音。它说，“真正的无为”…",
						"french": "Parfois, en rêve... j'entends une voix étrange. Elle dit : « La véritable non-action »...",
						"spanish": "A veces en sueños... escucho una voz extraña. Dice: \"Verdadera no-acción\"...",
						"vietnamese": "Đôi khi trong giấc mơ… tôi nghe thấy một giọng nói kỳ lạ. Nó nói, 'Vô vi chân chính'...",
						"thai": "บางครั้งในความฝัน... ฉันได้ยินเสียงแปลกๆ มันบอกว่า 'ความว่างเปล่าที่แท้จริง'...",
						"hindi": "कभी-कभी सपनों में... मुझे एक अजीब आवाज़ सुनाई देती है। वह कहती है, 'सच्ची निष्क्रियता'..."
					},
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "그게 뭐든, 우린 막아야 해.",
						"english": "Whatever it is, we have to stop it.",
						"japanese": "それが何であれ、私たちは止めなければならない。",
						"chinese": "无论那是什么，我们都必须阻止它。",
						"french": "Quoi que ce soit, nous devons l'arrêter.",
						"spanish": "Sea lo que sea, tenemos que detenerlo.",
						"vietnamese": "Dù nó là gì, chúng ta cũng phải ngăn chặn nó.",
						"thai": "ไม่ว่ามันจะเป็นอะไร เราต้องหยุดมัน",
						"hindi": "जो भी हो, हमें इसे रोकना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…너도 그렇게 될 거야. 결국은….",
						"english": "...You'll become like that too. Eventually...",
						"japanese": "…お前もそうなるだろう。結局は…。",
						"chinese": "…你也会变成那样。最终…",
						"french": "...Tu finiras par devenir comme ça toi aussi. Finalement...",
						"spanish": "...Tú también te convertirás en eso. Al final...",
						"vietnamese": "…Ngươi cũng sẽ như vậy thôi. Cuối cùng thì…",
						"thai": "...แกก็จะกลายเป็นแบบนั้นเหมือนกัน ในที่สุด...",
						"hindi": "...तुम भी वैसे ही हो जाओगे। आखिरकार..."
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "고요함의 근원 앞에서 정체 모를 그림자가 나타났다.",
						"english": "Before the source of stillness, an unknown shadow appeared.",
						"japanese": "静寂の根源の前で、正体不明の影が現れた。",
						"chinese": "在寂静的源头前，一个不明身份的影子出现了。",
						"french": "Devant la source du silence, une ombre inconnue apparut.",
						"spanish": "Ante la fuente de la quietud, apareció una sombra desconocida.",
						"vietnamese": "Trước nguồn gốc của sự tĩnh lặng, một cái bóng không rõ danh tính xuất hiện.",
						"thai": "หน้าแหล่งกำเนิดของความสงบเงียบ เงาปริศนาปรากฏขึ้น",
						"hindi": "शांति के स्रोत के सामने, एक अज्ञात परछाई प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자. 잠식될 운명을 거부하는가?",
						"english": "Fool. Do you refuse your fate of being consumed?",
						"japanese": "愚かな者。侵食される運命を拒むのか？",
						"chinese": "愚蠢的家伙。你拒绝被吞噬的命运吗？",
						"french": "Imbécile. Refuses-tu ton destin d'être consumé ?",
						"spanish": "Necio. ¿Rechazas tu destino de ser consumido?",
						"vietnamese": "Kẻ ngu muội. Ngươi từ chối số phận bị nuốt chửng ư?",
						"thai": "คนโง่ เจ้าปฏิเสธชะตากรรมที่จะถูกกลืนกินงั้นหรือ?",
						"hindi": "मूर्ख। क्या तुम निगल लिए जाने के अपने भाग्य को अस्वीकार करते हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 고요함 속에서… 널 깨부술 힘을 찾을 거다.",
						"english": "In this stillness... I will find the power to shatter you.",
						"japanese": "この静寂の中で… お前を打ち砕く力を見つけるだろう。",
						"chinese": "在这寂静之中… 我会找到击碎你的力量。",
						"french": "Dans ce silence... je trouverai le pouvoir de t'anéantir.",
						"spanish": "En esta quietud... encontraré el poder para destrozarte.",
						"vietnamese": "Trong sự tĩnh lặng này… ta sẽ tìm thấy sức mạnh để nghiền nát ngươi.",
						"thai": "ในความสงบเงียบนี้... ข้าจะพบพลังที่จะทำลายเจ้า",
						"hindi": "इस शांति में... मैं तुम्हें तोड़ने की शक्ति पाऊँगा।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라… 모든 것은 고요함으로 돌아갈 뿐….",
						"english": "Give up... Everything will merely return to silence...",
						"japanese": "「諦めろ… 全ては静寂へと戻るだけだ…。」",
						"chinese": "“放弃吧……一切都将归于寂静……”",
						"french": "Abandonnez... Tout ne fera que retourner au silence...",
						"spanish": "Ríndete... Todo simplemente volverá al silencio...",
						"vietnamese": "Hãy bỏ cuộc đi... Mọi thứ rồi sẽ chỉ trở về với sự tĩnh lặng mà thôi...",
						"thai": "ยอมแพ้ซะ... ทุกสิ่งจะกลับคืนสู่ความเงียบงันเท่านั้น...",
						"hindi": "हार मान लो... सब कुछ बस खामोशी में लौट जाएगा..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어. 우린… 반드시 돌아올 거야.",
						"english": "It's not over yet. We'll... definitely be back.",
						"japanese": "「まだ終わっていない。私たちは…必ず戻ってくる。」",
						"chinese": "“还没结束。我们……一定会回来的。”",
						"french": "Ce n'est pas encore fini. Nous... reviendrons certainement.",
						"spanish": "Aún no ha terminado. Nosotros... definitivamente regresaremos.",
						"vietnamese": "Chưa kết thúc đâu. Chúng ta... nhất định sẽ trở lại.",
						"thai": "ยังไม่จบหรอก เรา... จะต้องกลับมาแน่",
						"hindi": "अभी खत्म नहीं हुआ है। हम... ज़रूर वापस आएँगे।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 고요함은… 멈추지 않아….",
						"english": "Ugh... The stillness... it doesn't stop...",
						"japanese": "くぅ… 静寂は… 止まらない…。",
						"chinese": "呃… 寂静… 不会停止…",
						"french": "Ugh... Le silence... il ne s'arrête pas...",
						"spanish": "Ugh... La quietud... no se detiene...",
						"vietnamese": "Ư… Sự tĩnh lặng… sẽ không dừng lại…",
						"thai": "อึก... ความสงบเงียบ... มันไม่หยุด...",
						"hindi": "उफ़... शांति... यह नहीं रुकती..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "너희도… 결국… 잠식될 뿐….",
						"english": "You too... eventually... will just be consumed...",
						"japanese": "お前たちも… 結局… 侵食されるだけ…。",
						"chinese": "你们也… 最终… 只会被吞噬…",
						"french": "Vous aussi... finalement... vous serez simplement consumés...",
						"spanish": "Vosotros también... al final... seréis simplemente consumidos...",
						"vietnamese": "Các ngươi cũng… cuối cùng… chỉ bị nuốt chửng mà thôi…",
						"thai": "พวกแกก็... ในที่สุด... ก็จะถูกกลืนกิน...",
						"hindi": "तुम भी... अंततः... बस निगल लिए जाओगे..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니, 이제 시작일 뿐이야.",
						"english": "No, this is just the beginning.",
						"japanese": "いや、これは始まりに過ぎない。",
						"chinese": "不，这只是开始。",
						"french": "Non, ce n'est que le début.",
						"spanish": "No, esto es solo el principio.",
						"vietnamese": "Không, đây chỉ mới là bắt đầu thôi.",
						"thai": "ไม่ นี่เป็นแค่จุดเริ่มต้น",
						"hindi": "नहीं, यह तो बस शुरुआत है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela",
					"type": "direction"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "…저들을… 멈출 수 있어?",
						"english": "...Can we... stop them?",
						"japanese": "「…彼らを…止められるのか？」",
						"chinese": "“……能……阻止他们吗？”",
						"french": "...Pouvons-nous... les arrêter ?",
						"spanish": "¿...Podemos... detenerlos?",
						"vietnamese": "...Chúng ta... có thể ngăn chặn họ không?",
						"thai": "...เรา... หยุดพวกเขาได้ไหม?",
						"hindi": "...क्या हम... उन्हें रोक सकते हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "고요함의 잔재는 여전히 세상을 좀먹고 있었다.",
						"english": "The remnants of silence still gnawed at the world.",
						"japanese": "「静寂の残滓は未だに世界を蝕んでいた。」",
						"chinese": "“寂静的残余仍在侵蚀着世界。”",
						"french": "Les vestiges du silence rongeaient encore le monde.",
						"spanish": "Los vestigios del silencio aún carcomían el mundo.",
						"vietnamese": "Tàn dư của sự tĩnh lặng vẫn đang gặm nhấm thế giới.",
						"thai": "เศษซากแห่งความเงียบงันยังคงกัดกินโลกใบนี้",
						"hindi": "खामोशी के अवशेष अभी भी दुनिया को खा रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "더 깊은 진실을 찾아, 그들은 멈추지 않고 나아갔다.",
						"english": "In search of a deeper truth, they pressed on relentlessly.",
						"japanese": "「より深き真実を求め、彼らは立ち止まることなく進み続けた。」",
						"chinese": "“为了寻求更深层次的真相，他们不停地前进。”",
						"french": "En quête d'une vérité plus profonde, ils continuèrent sans relâche.",
						"spanish": "En busca de una verdad más profunda, avanzaron sin cesar.",
						"vietnamese": "Để tìm kiếm sự thật sâu hơn, họ không ngừng tiến về phía trước.",
						"thai": "เพื่อค้นหาความจริงที่ลึกซึ้งยิ่งขึ้น พวกเขายังคงเดินหน้าต่อไปไม่หยุดยั้ง",
						"hindi": "गहरी सच्चाई की तलाश में, वे लगातार आगे बढ़ते रहे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 회색빛으로 물들었다.",
			"사람들은 멍하니 서 있을 뿐. 아무도 움직이지 않았다.",
			"이것이 슬로우가 남긴 고요함의 잔재.",
			"하지만, 이건 시작에 불과했다. 더 깊은 절망이 다가오고 있었다."
		],
		"english": [
			"The world was painted in shades of grey.",
			"People just stood blankly. No one moved.",
			"This was the lingering silence left by Slow.",
			"But this was just the beginning. A deeper despair was approaching."
		],
		"japanese": [
			"世界は灰色に染まった。",
			"人々はただ呆然と立ち尽くすばかり。誰も動かなかった。",
			"これがスロウが残した静寂の残滓。",
			"しかし、これは始まりに過ぎなかった。さらなる深い絶望が迫っていた。"
		],
		"chinese": [
			"世界被染成了灰色。",
			"人们只是茫然地站着。没有人动。",
			"这是斯洛留下的寂静残余。",
			"但这只是个开始。更深的绝望正在逼近。"
		],
		"french": [
			"Le monde était teinté de gris.",
			"Les gens restaient immobiles, le regard vide. Personne ne bougeait.",
			"C'était le silence persistant laissé par Slow.",
			"Mais ce n'était que le début. Un désespoir plus profond approchait."
		],
		"spanish": [
			"El mundo se tiñó de gris.",
			"La gente se quedó de pie, sin expresión. Nadie se movió.",
			"Este era el silencio persistente que dejó Slow.",
			"Pero esto era solo el principio. Una desesperación más profunda se acercaba."
		],
		"vietnamese": [
			"Thế giới chìm trong màu xám.",
			"Mọi người chỉ đứng nhìn trống rỗng. Không ai nhúc nhích.",
			"Đây là tàn dư của sự tĩnh lặng mà Slow để lại.",
			"Nhưng đây chỉ là khởi đầu. Một sự tuyệt vọng sâu sắc hơn đang đến gần."
		],
		"thai": [
			"โลกถูกย้อมด้วยสีเทา",
			"ผู้คนยืนนิ่งงัน ไม่มีใครเคลื่อนไหว",
			"นี่คือความเงียบที่เหลืออยู่จากสโลว์",
			"แต่นี่เป็นเพียงจุดเริ่มต้น ความสิ้นหวังที่ลึกซึ้งกว่ากำลังคืบคลานเข้ามา"
		],
		"hindi": [
			"दुनिया ग्रे रंग में रंग गई थी।",
			"लोग बस खाली खड़े थे। कोई नहीं हिला।",
			"यह स्लो द्वारा छोड़ी गई शांति का अवशेष था।",
			"लेकिन यह तो बस शुरुआत थी। एक गहरी निराशा आ रही थी।"
		]
	}
} as const;
