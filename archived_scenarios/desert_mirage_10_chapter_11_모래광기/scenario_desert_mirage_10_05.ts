export const scenario_desert_mirage_10_05 = {
	"scenario_id": "desert_mirage_10_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "pool_DuneSinger_Mirage_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "모래의 심장. 모든 환각과 광기의 근원이 이곳에 있었다.",
						"english": "The heart of the sand. The source of all illusions and madness was here.",
						"japanese": "砂の心臓。全ての幻覚と狂気の根源がここに存在した。",
						"chinese": "沙之心。所有幻觉与疯狂的根源皆在于此。",
						"french": "Le cœur du sable. La source de toutes les illusions et de la folie se trouvait ici.",
						"spanish": "El corazón de la arena. La fuente de todas las ilusiones y la locura estaba aquí.",
						"vietnamese": "Trái tim của cát. Nguồn gốc của mọi ảo ảnh và điên loạn đều ở đây.",
						"thai": "ใจกลางของทราย. ต้นกำเนิดของภาพลวงตาและความบ้าคลั่งทั้งหมดอยู่ที่นี่.",
						"hindi": "रेत का हृदय। सभी भ्रम और पागलपन का मूल यहीं था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kemet",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "결국 여기까지 왔군… 미라지가 있는 곳이다.",
						"english": "So, we've finally made it here... This is where Mirage resides.",
						"japanese": "ついにここまで来たか… ここがミラージュのいる場所だ。",
						"chinese": "最终还是到这里了啊… 米拉奇就在这里。",
						"french": "Alors, nous sommes enfin arrivés ici… C'est là que réside Mirage.",
						"spanish": "Así que, finalmente hemos llegado aquí… Aquí es donde reside Mirage.",
						"vietnamese": "Vậy là cuối cùng chúng ta cũng đến đây rồi… Đây là nơi Mirage cư ngụ.",
						"thai": "ในที่สุดเราก็มาถึงที่นี่... นี่คือที่ที่มิราจอยู่.",
						"hindi": "तो, हम आखिरकार यहाँ आ ही गए… यहीं मिराज रहता है।"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리 몸의 모래 변이가… 더 빨라지고 있어.",
						"english": "The sand transformation in our bodies... it's accelerating.",
						"japanese": "我々の体の砂への変異が…さらに加速している。",
						"chinese": "我们体内的沙化变异…正在加速。",
						"french": "La transformation en sable de nos corps… s'accélère.",
						"spanish": "La transformación de arena en nuestros cuerpos… se acelera.",
						"vietnamese": "Sự biến đổi cát trong cơ thể chúng ta… đang nhanh hơn.",
						"thai": "การกลายร่างเป็นทรายในร่างกายของเรา… กำลังเร็วขึ้น",
						"hindi": "हमारे शरीर में रेत का परिवर्तन... तेज़ हो रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "시간이 얼마 없어. 미라지의 광기가 이 사막을 완성하려 한다.",
						"english": "Time is running out. Mirage's madness seeks to complete this desert.",
						"japanese": "時間がない。ミラージュの狂気がこの砂漠を完成させようとしている。",
						"chinese": "时间不多了。幻影的疯狂正试图完成这片沙漠。",
						"french": "Il ne reste plus beaucoup de temps. La folie de Mirage cherche à achever ce désert.",
						"spanish": "Se acaba el tiempo. La locura de Mirage busca completar este desierto.",
						"vietnamese": "Không còn nhiều thời gian. Sự điên loạn của Mirage đang muốn hoàn thành sa mạc này.",
						"thai": "เวลาใกล้หมดแล้ว ความบ้าคลั่งของมิราจกำลังจะทำให้ทะเลทรายนี้สมบูรณ์",
						"hindi": "समय कम है। मिराज का पागलपन इस रेगिस्तान को पूरा करना चाहता है।"
					},
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "그는 한때 위대한 검객이었다… '진정한 지혜'를 찾아 헤매던.",
						"english": "He was once a great swordsman... searching for 'true wisdom'.",
						"japanese": "彼はかつて偉大な剣士だった…「真の知恵」を求めてさまよっていた。",
						"chinese": "他曾是一位伟大的剑士…寻找着“真正的智慧”。",
						"french": "Il était autrefois un grand épéiste… errant à la recherche de la 'véritable sagesse'.",
						"spanish": "Él fue una vez un gran espadachín… buscando la 'verdadera sabiduría'.",
						"vietnamese": "Anh ta từng là một kiếm sĩ vĩ đại… lang thang tìm kiếm 'sự khôn ngoan đích thực'.",
						"thai": "เขาเคยเป็นนักดาบผู้ยิ่งใหญ่… ผู้ที่ออกตามหา 'ปัญญาที่แท้จริง'",
						"hindi": "वह कभी एक महान तलवारबाज था... 'सच्ची बुद्धि' की तलाश में भटक रहा था।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kemet",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "그는 사막 자체에 흡수되었어. '진정한 지혜'가 아니라… 광기를 얻은 채로.",
						"english": "He was absorbed into the desert itself. Not 'true wisdom'... but madness he gained.",
						"japanese": "彼は砂漠そのものに吸収された。「真の知恵」ではなく…狂気を手に入れたまま。",
						"chinese": "他被沙漠本身吸收了。没有获得“真正的智慧”…而是疯癫。",
						"french": "Il a été absorbé par le désert lui-même. Non pas la 'véritable sagesse'... mais la folie qu'il a acquise.",
						"spanish": "Fue absorbido por el desierto mismo. No 'verdadera sabiduría'... sino locura lo que obtuvo.",
						"vietnamese": "Anh ta đã bị sa mạc nuốt chửng. Không phải 'sự khôn ngoan đích thực'... mà là sự điên loạn đã chiếm lấy anh.",
						"thai": "เขาถูกดูดกลืนเข้าไปในทะเลทราย ไม่ใช่ 'ปัญญาที่แท้จริง'... แต่เป็นความบ้าคลั่งที่เขาได้รับ",
						"hindi": "वह रेगिस्तान में ही समा गया। 'सच्ची बुद्धि' नहीं... बल्कि पागलपन उसे मिला।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼 지금 우리가 싸우는 건… 인간이 아니라는 거야?",
						"english": "So what we're fighting now... isn't human?",
						"japanese": "じゃあ、今私たちが戦っているのは…人間じゃないってこと？",
						"chinese": "那么我们现在对抗的…不是人类吗？",
						"french": "Alors, ce que nous combattons maintenant… n'est pas humain ?",
						"spanish": "¿Así que lo que estamos luchando ahora… no es humano?",
						"vietnamese": "Vậy thứ chúng ta đang chiến đấu… không phải là con người sao?",
						"thai": "ถ้าอย่างนั้น สิ่งที่เรากำลังต่อสู้ด้วยตอนนี้… ไม่ใช่มนุษย์เหรอ?",
						"hindi": "तो अब हम जिससे लड़ रहे हैं... वह इंसान नहीं है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "kemet",
					"content": {
						"korean": "그의 몸에 깃든 모래가… 이 모든 환각의 근원이야.",
						"english": "The sand inhabiting his body... is the source of all these illusions.",
						"japanese": "彼の体に宿る砂が…これらすべての幻覚の根源だ。",
						"chinese": "寄宿在他体内的沙子…是所有这些幻觉的根源。",
						"french": "Le sable qui habite son corps… est la source de toutes ces illusions.",
						"spanish": "La arena que habita su cuerpo… es la fuente de todas estas ilusiones.",
						"vietnamese": "Cát trong cơ thể anh ta… là nguồn gốc của mọi ảo ảnh này.",
						"thai": "ทรายที่สิงสถิตอยู่ในร่างกายของเขา… คือต้นกำเนิดของภาพลวงตาทั้งหมดนี้",
						"hindi": "उसके शरीर में बसी रेत... इन सभी भ्रमों का स्रोत है।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "젠장… 이 손이… 모래로 변해가.",
						"english": "Damn it... my hand... it's turning into sand.",
						"japanese": "くそ…この手が…砂に変わっていく。",
						"chinese": "该死…这只手…正在变成沙子。",
						"french": "Merde… cette main… elle se transforme en sable.",
						"spanish": "Maldita sea… esta mano… se está convirtiendo en arena.",
						"vietnamese": "Chết tiệt… bàn tay này… đang biến thành cát.",
						"thai": "ให้ตายสิ… มือนี้… กำลังกลายเป็นทราย",
						"hindi": "धिक्कार है... यह हाथ... रेत में बदल रहा है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "미라지를 막지 못하면… 우리도 저 사막의 일부가 될 거야.",
						"english": "If we can't stop Mirage... we'll become part of that desert too.",
						"japanese": "ミラージュを止められなければ…私たちもあの砂漠の一部になるだろう。",
						"chinese": "如果我们无法阻止幻影…我们也将成为那片沙漠的一部分。",
						"french": "Si nous ne pouvons pas arrêter Mirage… nous deviendrons aussi une partie de ce désert.",
						"spanish": "Si no podemos detener a Mirage… nosotros también seremos parte de ese desierto.",
						"vietnamese": "Nếu chúng ta không ngăn được Mirage… chúng ta cũng sẽ trở thành một phần của sa mạc đó.",
						"thai": "ถ้าเราหยุดมิราจไม่ได้… เราก็จะกลายเป็นส่วนหนึ่งของทะเลทรายนั้นด้วย",
						"hindi": "अगर हम मिराज को नहीं रोक पाए... तो हम भी उस रेगिस्तान का हिस्सा बन जाएंगे।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "광기는 전염된다. 이 모래가 모든 것을 동화시키려 해.",
						"english": "Madness is contagious. This sand seeks to assimilate everything.",
						"japanese": "狂気は伝染する。この砂がすべてを同化させようとしている。",
						"chinese": "疯狂是会传染的。这些沙子试图同化一切。",
						"french": "La folie est contagieuse. Ce sable cherche à tout assimiler.",
						"spanish": "La locura es contagiosa. Esta arena busca asimilarlo todo.",
						"vietnamese": "Sự điên loạn có tính lây lan. Cát này đang cố gắng đồng hóa mọi thứ.",
						"thai": "ความบ้าคลั่งติดต่อได้ ทรายนี้พยายามจะกลืนกินทุกสิ่ง",
						"hindi": "पागलपन संक्रामक है। यह रेत सब कुछ आत्मसात करना चाहती है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우리가 멈추지 않으면… 모두가 미라지처럼 변하겠지.",
						"english": "If we don't stop... everyone will turn into Mirage.",
						"japanese": "私たちが止めなければ…皆ミラージュのようになってしまうだろう。",
						"chinese": "如果我们不阻止…所有人都会变成幻影那样。",
						"french": "Si nous n'arrêtons pas… tout le monde se transformera en Mirage.",
						"spanish": "Si no nos detenemos… todos se convertirán en Mirage.",
						"vietnamese": "Nếu chúng ta không dừng lại… mọi người sẽ biến thành Mirage.",
						"thai": "ถ้าเราไม่หยุด… ทุกคนจะกลายเป็นมิราจ",
						"hindi": "अगर हम नहीं रुके... तो सब मिराज जैसे बन जाएंगे।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "이 사막의 비원은… 더 이상 지켜볼 수 없어.",
						"english": "I can no longer just watch this desert's sorrow.",
						"japanese": "この砂漠の悲願… もう見ていられない。",
						"chinese": "这沙漠的悲愿……我不能再袖手旁观了。",
						"french": "Je ne peux plus assister impuissant à cette désolation du désert.",
						"spanish": "No puedo seguir viendo el lamento de este desierto.",
						"vietnamese": "Không thể tiếp tục đứng nhìn nỗi bi ai của sa mạc này.",
						"thai": "ความปรารถนาอันเศร้าโศกของทะเลทรายนี้... ฉันไม่อาจทนมองต่อไปได้อีกแล้ว",
						"hindi": "इस रेगिस्तान के दुख को… अब और नहीं देख सकता।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "절망만 줄 수는 없어… 끝까지 싸운다.",
						"english": "I cannot give only despair... I will fight to the end.",
						"japanese": "絶望だけは与えられない… 最後まで戦う。",
						"chinese": "不能只带来绝望……战斗到最后。",
						"french": "Je ne peux pas seulement donner du désespoir... Je me battrai jusqu'au bout.",
						"spanish": "No puedo dar solo desesperación... Lucharé hasta el final.",
						"vietnamese": "Không thể chỉ mang đến tuyệt vọng... Sẽ chiến đấu đến cùng.",
						"thai": "จะไม่มีวันยอมจำนนต่อความสิ้นหวัง... จะสู้จนถึงที่สุด",
						"hindi": "सिर्फ़ निराशा नहीं दे सकता… अंत तक लड़ूंगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kemet",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "저 검… 전설 속 검객 미라지의 검과 같아.",
						"english": "That sword... it's like the sword of the legendary swordsman, Mirage.",
						"japanese": "あの剣… 伝説の剣士ミラージュの剣と同じだ。",
						"chinese": "那把剑……与传说中的剑客幻影之剑一样。",
						"french": "Cette épée... elle est comme l'épée du légendaire épéiste, Mirage.",
						"spanish": "Esa espada... es como la espada del legendario espadachín, Mirage.",
						"vietnamese": "Thanh kiếm đó... giống với thanh kiếm của kiếm sĩ huyền thoại Mirage.",
						"thai": "ดาบนั่น... เหมือนกับดาบของนักดาบในตำนาน มิราจเลย",
						"hindi": "वह तलवार… जैसे पौराणिक तलवारबाज़ मिराज की तलवार।"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "과거의 그림자가… 광기로 변한 채 우리를 기다린다.",
						"english": "The shadow of the past... transformed into madness, awaits us.",
						"japanese": "過去の影が… 狂気と化して私たちを待っている。",
						"chinese": "过去的阴影……化作疯狂，正等待着我们。",
						"french": "L'ombre du passé... transformée en folie, nous attend.",
						"spanish": "La sombra del pasado... transformada en locura, nos espera.",
						"vietnamese": "Bóng tối quá khứ... hóa thành điên loạn, đang chờ đợi chúng ta.",
						"thai": "เงาของอดีต... กลายเป็นความบ้าคลั่ง รอคอยเราอยู่",
						"hindi": "अतीत की परछाई… पागलपन में बदलकर हमारा इंतज़ार कर रही है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 이상 물러날 곳은 없어. 이 광기를 끝내자.",
						"english": "There's no turning back. Let's end this madness.",
						"japanese": "もう後には引けない。この狂気を終わらせよう。",
						"chinese": "已无退路。结束这场疯狂吧。",
						"french": "Il n'y a plus de retour en arrière. Mettons fin à cette folie.",
						"spanish": "No hay marcha atrás. Acabemos con esta locura.",
						"vietnamese": "Không còn đường lui nữa. Hãy chấm dứt sự điên loạn này.",
						"thai": "ไม่มีทางถอยอีกแล้ว มายุติความบ้าคลั่งนี้กันเถอะ",
						"hindi": "अब पीछे हटने की कोई जगह नहीं। इस पागलपन को खत्म करते हैं।"
					}
				},
				{
					"content": {
						"korean": "카운트다운의 끝이 다가왔다. 사막의 침식이 온몸을 잠식했다.",
						"english": "The countdown's end is near. The desert's erosion has consumed my entire body.",
						"japanese": "カウントダウンの終わりが来た。砂漠の浸食が全身を蝕んだ。",
						"chinese": "倒计时已到尽头。沙漠的侵蚀已吞噬全身。",
						"french": "La fin du compte à rebours est proche. L'érosion du désert a consumé tout mon corps.",
						"spanish": "El final de la cuenta regresiva se acerca. La erosión del desierto ha consumido todo mi cuerpo.",
						"vietnamese": "Đếm ngược đã kết thúc. Sự xâm thực của sa mạc đã nuốt chửng toàn thân.",
						"thai": "การนับถอยหลังสิ้นสุดลงแล้ว การกัดกร่อนของทะเลทรายได้กลืนกินทั่วร่าง",
						"hindi": "उलटी गिनती का अंत आ गया है। रेगिस्तान के कटाव ने पूरे शरीर को निगल लिया है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "너희도 결국 나의 모래가 될 뿐이다… 하하하!",
						"english": "You too will eventually become my sand… Hahaha!",
						"japanese": "お前たちも結局、私の砂になるだけだ…ハハハ！",
						"chinese": "你们最终也只会变成我的沙子……哈哈哈！",
						"french": "Vous aussi finirez par devenir mon sable… Hahaha !",
						"spanish": "Ustedes también acabarán siendo mi arena… ¡Jajaja!",
						"vietnamese": "Các ngươi rồi cũng sẽ chỉ trở thành cát của ta thôi… Hahaha!",
						"thai": "พวกเจ้าก็จะกลายเป็นทรายของข้าในที่สุด… ฮ่าฮ่าฮ่า!",
						"hindi": "तुम भी अंततः मेरी रेत बन जाओगे… हाहाहा!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it… It's not… over yet!",
						"japanese": "くそ…まだ…終わってない！",
						"chinese": "该死……还没……结束！",
						"french": "Mince… Ce n'est pas… encore fini !",
						"spanish": "Maldita sea… ¡Todavía no… ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn chưa… kết thúc đâu!",
						"thai": "บ้าจริง… ยัง… ไม่จบหรอก!",
						"hindi": "धिक्कार है… अभी… खत्म नहीं हुआ है!"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "kemet"
				},
				{
					"emotion": "angry",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "포기하지 마! 희망은… 아직 남아있어!",
						"english": "Don't give up! Hope is… still left!",
						"japanese": "諦めるな！希望は…まだ残っている！",
						"chinese": "别放弃！希望……还在！",
						"french": "N'abandonne pas ! L'espoir… est encore là !",
						"spanish": "¡No te rindas! ¡La esperanza… aún existe!",
						"vietnamese": "Đừng bỏ cuộc! Hy vọng… vẫn còn!",
						"thai": "อย่ายอมแพ้! ความหวัง… ยังมีอยู่!",
						"hindi": "हार मत मानो! उम्मीद… अभी बाकी है!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "하하하! 내가 그랬던 것처럼, 영원히…!",
						"english": "Hahaha! Just as I did, forever...!",
						"japanese": "ハハハ！私と同じように、永遠に…！",
						"chinese": "哈哈哈！就像我一样，永远地……！",
						"french": "Hahaha ! Tout comme moi, pour toujours… !",
						"spanish": "¡Jajaja! ¡Como yo, para siempre...!",
						"vietnamese": "Hahaha! Giống như ta vậy, mãi mãi…!",
						"thai": "ฮ่าฮ่าฮ่า! เหมือนที่ข้าเป็น ตลอดไป…!",
						"hindi": "हाहाहा! जैसा मैं था, हमेशा के लिए...!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "미라지의 갑옷이 부서지자, 그의 몸에서 찬란한 모래 폭풍이 터져 나왔다.",
						"english": "As Mirage's armor shattered, a brilliant sandstorm erupted from his body.",
						"japanese": "ミラージュの鎧が砕け散ると、彼の体から眩い砂嵐が噴き出した。",
						"chinese": "幻影的盔甲破碎时，一道灿烂的沙尘暴从他体内爆发出来。",
						"french": "Lorsque l'armure de Mirage vola en éclats, une brillante tempête de sable jaillit de son corps.",
						"spanish": "Cuando la armadura de Mirage se hizo añicos, una brillante tormenta de arena estalló de su cuerpo.",
						"vietnamese": "Khi giáp của Mirage vỡ tan, một cơn bão cát rực rỡ bùng lên từ cơ thể hắn.",
						"thai": "เมื่อเกราะของมิราจแตกสลาย พายุทรายที่เจิดจ้าก็ปะทุออกมาจากร่างของเขา",
						"hindi": "जैसे ही मिराज का कवच टूटा, उसके शरीर से एक शानदार रेत का तूफान उमड़ पड़ा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는… 정말 푸른 들판을 꿈꿨던 건가…",
						"english": "Did he… truly dream of a green field…?",
						"japanese": "彼は…本当に青い野原を夢見ていたのか…",
						"chinese": "他……真的梦想着一片绿色的田野吗……？",
						"french": "Rêvait-il… vraiment d'un champ verdoyant… ?",
						"spanish": "¿Realmente… soñó con un campo verde…?",
						"vietnamese": "Hắn… thực sự đã mơ về một cánh đồng xanh sao…?",
						"thai": "เขา… ฝันถึงทุ่งหญ้าเขียวขจีจริงๆ อย่างนั้นหรือ…?",
						"hindi": "क्या उसने… सचमुच एक हरे भरे मैदान का सपना देखा था…?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "kemet",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "결국… 미라지도 사막의 희생자였다.",
						"english": "In the end… Mirage too was a victim of the desert.",
						"japanese": "結局…ミラージュも砂漠の犠牲者だったのだ。",
						"chinese": "最终……幻影也是沙漠的受害者。",
						"french": "En fin de compte… Mirage fut lui aussi une victime du désert.",
						"spanish": "Al final… Mirage también fue una víctima del desierto.",
						"vietnamese": "Cuối cùng… Mirage cũng là một nạn nhân của sa mạc.",
						"thai": "ในที่สุด… มิราจก็เป็นเหยื่อของทะเลทรายเช่นกัน",
						"hindi": "अंततः… मिराज भी रेगिस्तान का शिकार था।"
					},
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"content": {
						"korean": "광기의 근원은 사라졌지만, 그 여운은 사막에 남아 있었다.",
						"english": "The source of madness vanished, but its lingering presence remained in the desert.",
						"japanese": "狂気の根源は消え去ったが、その余韻は砂漠に残っていた。",
						"chinese": "疯狂的根源消失了，但它的余波仍然留在沙漠中。",
						"french": "La source de la folie avait disparu, mais son écho persistait dans le désert.",
						"spanish": "La fuente de la locura se desvaneció, pero su eco persistía en el desierto.",
						"vietnamese": "Nguồn gốc của sự điên loạn đã biến mất, nhưng dư âm của nó vẫn còn lại trong sa mạc.",
						"thai": "ต้นกำเนิดของความบ้าคลั่งได้หายไปแล้ว แต่ร่องรอยของมันยังคงหลงเหลืออยู่ในทะเลทราย",
						"hindi": "पागलपन का स्रोत गायब हो गया, लेकिन उसका अवशेष रेगिस्तान में बना रहा।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "이것이 구원이었을까? 아니면 또 다른 침해의 시작일까?",
						"english": "Was this salvation? Or the beginning of another transgression?",
						"japanese": "これは救済だったのか？それとも、新たな侵犯の始まりなのか？",
						"chinese": "这是救赎吗？还是另一次侵犯的开始？",
						"french": "Était-ce le salut ? Ou le début d'une autre transgression ?",
						"spanish": "¿Fue esto la salvación? ¿O el comienzo de otra transgresión?",
						"vietnamese": "Đây là sự cứu rỗi sao? Hay là khởi đầu của một cuộc xâm phạm khác?",
						"thai": "นี่คือความรอดหรือเปล่า? หรือเป็นจุดเริ่มต้นของการรุกล้ำครั้งใหม่?",
						"hindi": "क्या यह मुक्ति थी? या एक और उल्लंघन की शुरुआत?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "아아… 너희도 왔구나! 이 끝없는 모래의 바다 속으로…",
						"english": "Ah... you've come too! Into this endless sea of sand...",
						"japanese": "ああ… お前たちも来たか！この終わりのない砂の海へと…",
						"chinese": "啊……你们也来了！进入这无尽的沙海之中……",
						"french": "Ah... vous êtes venus aussi ! Dans cette mer de sable infinie...",
						"spanish": "Ah... ¡vosotros también habéis venido! A este mar interminable de arena...",
						"vietnamese": "À... các ngươi cũng đến rồi! Vào biển cát vô tận này...",
						"thai": "อ่า... พวกเจ้าก็มาถึงแล้วสินะ! สู่ทะเลทรายอันไร้ขอบเขตนี้...",
						"hindi": "आह… तुम भी आ गए! रेत के इस अंतहीन सागर में…"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나의 푸른 들판은 모두 모래가 되었으니, 너희도 이제 이 위대한 침묵을 느껴야 해!",
						"english": "All my green fields have turned to sand, so now you too must feel this great silence!",
						"japanese": "私の緑の野はすべて砂になった。だからお前たちもこの偉大な沈黙を感じるべきだ！",
						"chinese": "我的青葱田野都已化为黄沙，所以你们现在也必须感受这伟大的沉默！",
						"french": "Tous mes champs verdoyants sont devenus du sable, alors vous aussi, vous devez ressentir ce grand silence maintenant !",
						"spanish": "Todos mis campos verdes se han convertido en arena, ¡así que vosotros también debéis sentir ahora este gran silencio!",
						"vietnamese": "Tất cả đồng cỏ xanh tươi của ta đã biến thành cát, vậy nên bây giờ các ngươi cũng phải cảm nhận sự im lặng vĩ đại này!",
						"thai": "ทุ่งหญ้าสีเขียวของฉันกลายเป็นทรายไปหมดแล้ว ดังนั้นพวกเจ้าก็ต้องรู้สึกถึงความเงียบงันอันยิ่งใหญ่นี้ด้วย!",
						"hindi": "मेरे सारे हरे-भरे खेत रेत बन गए हैं, इसलिए अब तुम्हें भी इस महान चुप्पी को महसूस करना होगा!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 광기를… 끝내주겠어!",
						"english": "This madness... I'll put an end to it!",
						"japanese": "この狂気を… 終わらせてやる！",
						"chinese": "这场疯狂……我会终结它！",
						"french": "Cette folie... Je vais y mettre fin !",
						"spanish": "Esta locura... ¡Voy a acabar con ella!",
						"vietnamese": "Sự điên loạn này... ta sẽ chấm dứt nó!",
						"thai": "ความบ้าคลั่งนี้... ฉันจะยุติมันเอง!",
						"hindi": "इस पागलपन को… मैं खत्म कर दूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kemet",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "미라지의 비원… 여기서 멈춰야 해!",
						"english": "Mirage's sorrow... it must stop here!",
						"japanese": "ミラージュの悲願… ここで止めなければならない！",
						"chinese": "幻影的悲愿……必须在这里停止！",
						"french": "La tristesse de Mirage... ça doit s'arrêter ici !",
						"spanish": "El lamento de Mirage... ¡debe detenerse aquí!",
						"vietnamese": "Nỗi bi ai của Mirage... phải dừng lại ở đây!",
						"thai": "ความปรารถนาอันเศร้าโศกของมิราจ... ต้องหยุดลงที่นี่!",
						"hindi": "मिराज का दुख… यहीं रुकना चाहिए!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 심장. 모든 광기의 근원이 이곳에 있었다.",
			"그곳에 미라지가 있었다. 한때 위대한 검객이었던 그는, 이제 사막 그 자체가 되었다.",
			"진실은 환영보다 잔인했다. 그리고 시간은, 우리 편이 아니었다.",
			"절망 속에서, 마지막 결전이 시작된다."
		],
		"english": [
			"The heart of the desert. The source of all madness resided here.",
			"There stood Mirage. Once a great swordsman, he had become the desert itself.",
			"The truth was crueler than any illusion. And time was not on our side.",
			"In despair, the final battle begins."
		],
		"japanese": [
			"砂漠の心臓。全ての狂気の根源がここに存在した。",
			"そこにミラージュがいた。かつて偉大な剣士であった彼は、今や砂漠そのものとなった。",
			"真実は幻影よりも残酷だった。そして時間は、我々の味方ではなかった。",
			"絶望の中、最後の決戦が始まる。"
		],
		"chinese": [
			"沙漠之心。所有疯狂的根源皆在于此。",
			"幻影米拉奇身在其中。他曾是伟大的剑客，如今却化作了沙漠本身。",
			"真相比幻象更残酷。而且时间，已不站在我们这边。",
			"绝望之中，最终决战开始了。"
		],
		"french": [
			"Le cœur du désert. La source de toute folie résidait ici.",
			"Là se tenait Mirage. Jadis grand épéiste, il était devenu le désert lui-même.",
			"La vérité était plus cruelle que toute illusion. Et le temps n'était pas de notre côté.",
			"Dans le désespoir, la confrontation finale commence."
		],
		"spanish": [
			"El corazón del desierto. La fuente de toda locura residía aquí.",
			"Allí estaba Mirage. Una vez un gran espadachín, ahora se había convertido en el desierto mismo.",
			"La verdad era más cruel que cualquier ilusión. Y el tiempo no estaba de nuestro lado.",
			"En la desesperación, la batalla final comienza."
		],
		"vietnamese": [
			"Trái tim của sa mạc. Nguồn gốc của mọi điên loạn đều ở đây.",
			"Mirage ở đó. Từng là một kiếm sĩ vĩ đại, giờ đây anh ta đã trở thành chính sa mạc.",
			"Sự thật tàn khốc hơn mọi ảo ảnh. Và thời gian, không còn đứng về phía chúng ta.",
			"Trong tuyệt vọng, trận chiến cuối cùng bắt đầu."
		],
		"thai": [
			"ใจกลางทะเลทราย. ต้นกำเนิดของความบ้าคลั่งทั้งหมดอยู่ที่นี่.",
			"มิราจอยู่ที่นั่น. ครั้งหนึ่งเขาเคยเป็นนักดาบผู้ยิ่งใหญ่ บัดนี้เขากลายเป็นทะเลทรายเอง.",
			"ความจริงโหดร้ายกว่าภาพลวงตาใดๆ. และเวลา, ไม่ได้อยู่ข้างเรา.",
			"ในความสิ้นหวัง, การต่อสู้ครั้งสุดท้ายเริ่มต้นขึ้น."
		],
		"hindi": [
			"रेगिस्तान का हृदय। समस्त पागलपन का मूल यहीं था।",
			"वहाँ मिराज खड़ा था। कभी एक महान तलवारबाज़, अब वह रेगिस्तान ही बन गया था।",
			"सत्य किसी भी भ्रम से अधिक क्रूर था। और समय, हमारे पक्ष में नहीं था।",
			"निराशा में, अंतिम युद्ध शुरू होता है।"
		]
	},
	"epilogue": {
		"korean": [
			"광기의 심장이 멈추자, 사막은 고요한 침묵을 되찾았다.",
			"미라지는 사라졌다. 그의 비극적인 비원과 함께.",
			"하지만 모래의 흔적은 여전히 남았다. 완전히 되돌릴 수는 없었다.",
			"끝없이 확장하던 사막은 멈췄지만 — 그 침묵은 구원일까, 아니면 또 다른 저주인가."
		],
		"english": [
			"As the heart of madness ceased, the desert regained its serene silence.",
			"Mirage vanished. Along with his tragic unfulfilled wish.",
			"But the scars of the sand remained. Nothing could be fully undone.",
			"The endlessly expanding desert had halted — but was its silence salvation, or yet another curse?"
		],
		"japanese": [
			"狂気の心臓が止まると、砂漠は静かな沈黙を取り戻した。",
			"ミラージュは消えた。彼の悲劇的な悲願と共に。",
			"しかし、砂の痕跡はまだ残っていた。完全に元に戻すことはできなかった。",
			"際限なく広がっていた砂漠は止まったが — その沈黙は救済なのか、それともまた別の呪いなのか。"
		],
		"chinese": [
			"当疯狂之心停止跳动，沙漠重拾了它宁静的沉默。",
			"米拉奇消失了。连同他那悲剧性的未竟之愿。",
			"然而，沙漠的痕迹依旧留存。一切都无法完全逆转。",
			"无尽扩张的沙漠停了下来 — 然而那份沉寂是救赎，抑或是又一个诅咒？"
		],
		"french": [
			"Lorsque le cœur de la folie cessa, le désert retrouva son silence serein.",
			"Mirage disparut. Emportant avec lui son vœu tragique et inassouvi.",
			"Mais les traces du sable persistaient. Tout ne pouvait être entièrement annulé.",
			"Le désert qui s'étendait sans fin s'était arrêté — mais ce silence était-il une salvation, ou une autre malédiction ?"
		],
		"spanish": [
			"Cuando el corazón de la locura cesó, el desierto recuperó su silencio sereno.",
			"Mirage desapareció. Junto con su trágico deseo insatisfecho.",
			"Pero las huellas de la arena permanecieron. Nada pudo ser completamente revertido.",
			"El desierto que se expandía sin cesar se detuvo — pero ¿era ese silencio una salvación, o una maldición más?"
		],
		"vietnamese": [
			"Khi trái tim điên loạn ngừng đập, sa mạc tìm lại sự tĩnh lặng của nó.",
			"Mirage biến mất. Cùng với ước nguyện bi thảm chưa thành của anh ta.",
			"Nhưng dấu vết của cát vẫn còn đó. Không thể hoàn toàn đảo ngược mọi thứ.",
			"Sa mạc không ngừng mở rộng đã dừng lại — nhưng liệu sự im lặng đó là sự cứu rỗi, hay một lời nguyền khác?"
		],
		"thai": [
			"เมื่อหัวใจแห่งความบ้าคลั่งหยุดลง, ทะเลทรายก็กลับคืนสู่ความเงียบสงบ.",
			"มิราจหายไป. พร้อมกับความปรารถนาที่เศร้าโศกและไม่สมหวังของเขา.",
			"แต่ร่องรอยของทรายยังคงอยู่. ไม่มีอะไรที่สามารถย้อนกลับได้อย่างสมบูรณ์.",
			"ทะเลทรายที่ขยายตัวไม่รู้จบได้หยุดลง — แต่ความเงียบนั้นคือการไถ่บาป, หรือคำสาปอีกอย่างหนึ่งกันแน่?"
		],
		"hindi": [
			"जैसे ही पागलपन का हृदय रुका, रेगिस्तान ने अपनी शांत चुप्पी पुनः प्राप्त कर ली।",
			"मिराज गायब हो गया। अपनी दुखद अधूरी इच्छा के साथ।",
			"लेकिन रेत के निशान अब भी बाकी थे। कुछ भी पूरी तरह से ठीक नहीं किया जा सका।",
			"अनंत रूप से फैलता रेगिस्तान थम गया — लेकिन क्या वह चुप्पी मोक्ष थी, या एक और अभिशाप?"
		]
	}
} as const;
