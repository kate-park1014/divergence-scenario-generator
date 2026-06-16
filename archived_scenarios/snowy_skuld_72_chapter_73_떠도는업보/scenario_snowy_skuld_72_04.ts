export const scenario_snowy_skuld_72_04 = {
	"scenario_id": "snowy_skuld_72_04",
	"order": 4,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "빙하가 맴돈 자취는 끝없이 이어졌다. 그 길은 어디에도 닿지 못했다.",
						"english": "Traces of glaciers swirled endlessly. The path led nowhere.",
						"japanese": "氷河が巡った痕跡は終わりなく続いた。その道はどこにも繋がらなかった。",
						"chinese": "冰川环绕的痕迹无尽延续。那条路通向虚无。",
						"french": "Les traces des glaciers tourbillonnaient sans fin. Le chemin ne menait nulle part.",
						"spanish": "Las huellas de los glaciares giraban sin fin. El camino no llevaba a ninguna parte.",
						"vietnamese": "Dấu vết băng hà xoáy tròn vô tận. Con đường ấy chẳng dẫn đến đâu.",
						"thai": "ร่องรอยธารน้ำแข็งหมุนวนไปไม่สิ้นสุด เส้นทางนั้นไม่นำไปสู่ที่ใดเลย",
						"hindi": "ग्लेशियरों के घूमने के निशान अंतहीन रूप से घूमते रहे। वह रास्ता कहीं नहीं पहुंचा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"speaker": "hild",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…이곳은 영원의 방황. 망자들이 맹세를 지키지 못하고 떠도는 길.",
						"english": "...This is eternal wandering. The path where the dead wander, unable to keep their vows.",
						"japanese": "…ここは永遠の彷徨。亡者が誓いを守れず彷徨う道。",
						"chinese": "…此处乃永恒的彷徨。亡者无法信守誓言，游荡之途。",
						"french": "...C'est l'errance éternelle. Le chemin où les morts errent, incapables de tenir leurs vœux.",
						"spanish": "...Este es el vagar eterno. El camino donde los muertos deambulan, incapaces de cumplir sus votos.",
						"vietnamese": "...Đây là sự lang thang vĩnh cửu. Con đường nơi những linh hồn chết không thể giữ lời thề và cứ mãi trôi dạt.",
						"thai": "…ที่นี่คือการหลงทางนิรันดร์ เส้นทางที่วิญญาณผู้ตายร่อนเร่ไปมา ไม่สามารถรักษาคำสาบานได้",
						"hindi": "...यह शाश्वत भटकन है। वह रास्ता जहाँ मृत आत्माएँ भटकती रहती हैं, अपनी प्रतिज्ञाएँ निभाने में असमर्थ।"
					},
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "힐드. 여기가 스쿌드가 헤매던 곳이야?",
						"english": "Hild. Is this where Skjoldr wandered?",
						"japanese": "ヒルダ。ここがスキュルドが彷徨った場所なの？",
						"chinese": "希尔德。这里是斯库尔德曾徘徊的地方吗？",
						"french": "Hild. C'est ici que Skjoldr a erré ?",
						"spanish": "Hild. ¿Es aquí donde Skjoldr deambuló?",
						"vietnamese": "Hild. Đây có phải là nơi Skjoldr đã lang thang không?",
						"thai": "ฮิลด์ นี่คือที่ที่สคยอร์ลด์เคยร่อนเร่ใช่ไหม?",
						"hindi": "हिल्ड। क्या यहीं पर स्कजोलड्र भटका था?"
					}
				},
				{
					"content": {
						"korean": "응. 룬에 새겨진 슬픔이 느껴져. \"어둠은 어디에도 없고, 검은 돌아갈 곳이 없다.\" 영원한 죄업.",
						"english": "Yes. I feel the sorrow etched in the runes. \"Darkness is nowhere, and the sword has no home.\" Eternal sin.",
						"japanese": "ええ。ルーンに刻まれた悲しみが感じられる。「闇はどこにもなく、剣は帰る場所がない。」永遠の罪業よ。",
						"chinese": "是的。我能感受到符文中刻印的悲伤。 “黑暗无处可寻，剑无归处。”永恒的罪业。",
						"french": "Oui. Je ressens la tristesse gravée dans les runes. « Les ténèbres ne sont nulle part, et l'épée n'a pas de foyer. » Péché éternel.",
						"spanish": "Sí. Siento la tristeza grabada en las runas. «La oscuridad no está en ninguna parte, y la espada no tiene hogar.» Pecado eterno.",
						"vietnamese": "Đúng vậy. Tôi cảm nhận được nỗi buồn khắc sâu trong các ký tự rune. \"Bóng tối không ở đâu cả, và thanh kiếm không có nơi để về.\" Tội lỗi vĩnh cửu.",
						"thai": "ใช่ ฉันรู้สึกถึงความเศร้าที่สลักอยู่ในอักษรรูน ",
						"hindi": "हाँ। मुझे रुन में खुदा हुआ दुख महसूस होता है। "
					},
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "이 길은 오직 방황만을 위한 것이었어.",
						"english": "This path was solely for wandering.",
						"japanese": "この道はただ彷徨うためだけのものだった。",
						"chinese": "这条路只是为了徘徊。",
						"french": "Ce chemin était uniquement destiné à l'errance.",
						"spanish": "Este camino era únicamente para vagar.",
						"vietnamese": "Con đường này chỉ dành cho sự lang thang mà thôi.",
						"thai": "เส้นทางนี้มีไว้สำหรับการร่อนเร่เท่านั้น",
						"hindi": "यह रास्ता केवल भटकने के लिए था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "목적지가 없다는 건가?",
						"english": "So, there's no destination?",
						"japanese": "目的地がないということか？",
						"chinese": "没有目的地吗？",
						"french": "Donc, il n'y a pas de destination ?",
						"spanish": "¿Entonces no hay destino?",
						"vietnamese": "Vậy là không có đích đến sao?",
						"thai": "หมายความว่าไม่มีจุดหมายปลายทางงั้นเหรอ?",
						"hindi": "क्या इसका मतलब कोई मंजिल नहीं है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "수천 년 동안 이어진 헛된 맹세. 지켜질 수 없는 약속이 그를 묶었지.",
						"english": "A futile vow, thousands of years old. An unbreakable promise bound him.",
						"japanese": "数千年にもわたる無駄な誓い。守られぬ約束が彼を縛り付けた。",
						"chinese": "数千年的虚妄誓言。无法兑现的承诺束缚了他。",
						"french": "Un vœu futile, vieux de milliers d'années. Une promesse irréalisable l'a lié.",
						"spanish": "Un vano juramento de miles de años. Una promesa imposible de cumplir lo ató.",
						"vietnamese": "Lời thề vô ích kéo dài hàng ngàn năm. Một lời hứa không thể thực hiện đã trói buộc anh ta.",
						"thai": "คำสาบานที่เปล่าประโยชน์นับพันปี คำมั่นสัญญาที่ไม่อาจรักษาได้ผูกมัดเขาไว้",
						"hindi": "हजारों साल पुरानी एक व्यर्थ प्रतिज्ञा। एक न पूरी होने वाली प्रतिज्ञा ने उसे बांध रखा था。"
					},
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그럼 우리는 뭘 따라온 거지.",
						"english": "...So what have we been following?",
						"japanese": "...では、我々は何を追ってきたのだ。",
						"chinese": "……那我们究竟追随了什么。",
						"french": "...Alors, qu'avons-nous suivi ?",
						"spanish": "...Entonces, ¿qué hemos estado siguiendo?",
						"vietnamese": "...Vậy chúng ta đã theo cái gì?",
						"thai": "...แล้วเราตามอะไรมากันแน่",
						"hindi": "...तो हम क्या पीछा कर रहे थे?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 공허함… 망자의 업보가 우리를 시험하는 듯 해.",
						"english": "This emptiness... It feels like the karma of the dead is testing us.",
						"japanese": "この虚無感… 亡者の業が我々を試しているようだ。",
						"chinese": "这份空虚……亡者的业障似乎在考验我们。",
						"french": "Ce vide... On dirait que le karma des morts nous met à l'épreuve.",
						"spanish": "Este vacío... Parece que el karma de los muertos nos está poniendo a prueba.",
						"vietnamese": "Sự trống rỗng này... Cảm giác như nghiệp chướng của người chết đang thử thách chúng ta.",
						"thai": "ความว่างเปล่านี้... ราวกับกรรมของคนตายกำลังทดสอบเรา",
						"hindi": "यह खालीपन... ऐसा लगता है जैसे मृतकों का कर्म हमें परख रहा है।"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "거대한 그림자가 얼음 위에 드리워졌다. 정체 모를 자가 길을 막아섰다.",
						"english": "A colossal shadow loomed over the ice. An unknown entity blocked our path.",
						"japanese": "巨大な影が氷の上に覆いかぶさった。正体不明の者が道を塞いだ。",
						"chinese": "巨大的阴影笼罩在冰面上。身份不明者挡住了去路。",
						"french": "Une ombre colossale planait sur la glace. Une entité inconnue bloquait notre chemin.",
						"spanish": "Una sombra colosal se cernía sobre el hielo. Una entidad desconocida bloqueó nuestro camino.",
						"vietnamese": "Một cái bóng khổng lồ bao trùm trên băng. Một thực thể không rõ danh tính đã chặn đường.",
						"thai": "เงาขนาดมหึมาทอดทับอยู่บนน้ำแข็ง ผู้ไม่รู้จักตัวตนปิดกั้นเส้นทางของเรา",
						"hindi": "बर्फ पर एक विशाल छाया मंडरा रही थी। एक अज्ञात सत्ता ने हमारा रास्ता रोक दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "뭘 찾으러 여기까지 왔지? 아무것도 없는 곳에.",
						"english": "What did you come all this way for? To a place where there's nothing.",
						"japanese": "何を求めてここまで来た？何もない場所に。",
						"chinese": "为了什么来到这里？一无所有之地。",
						"french": "Qu'êtes-vous venus chercher ici ? Dans un endroit où il n'y a rien.",
						"spanish": "¿Para qué viniste hasta aquí? A un lugar donde no hay nada.",
						"vietnamese": "Các ngươi đến đây để tìm gì? Đến một nơi không có gì cả.",
						"thai": "มาที่นี่เพื่ออะไร? ในสถานที่ที่ไม่มีอะไรเลย",
						"hindi": "तुम इतनी दूर तक क्या खोजने आए हो? एक ऐसी जगह जहाँ कुछ भी नहीं है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…네가 우리의 길을 막는 건가.",
						"english": "...Are you blocking our way?",
						"japanese": "...貴様が我々の道を阻むのか。",
						"chinese": "……是你挡住了我们的去路吗。",
						"french": "...Est-ce toi qui nous bloques le chemin ?",
						"spanish": "...¿Eres tú quien nos bloquea el camino?",
						"vietnamese": "...Ngươi đang chặn đường chúng ta à?",
						"thai": "...เจ้ากำลังขวางทางเราอยู่หรือ",
						"hindi": "...क्या तुम हमारा रास्ता रोक रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이곳은 텅 빈 중심. 너희의 탐색도 결국 허무할 뿐.",
						"english": "This is the empty core. Your search will ultimately be in vain.",
						"japanese": "ここは虚ろな中心。お前たちの探索も結局は虚しいだけだ。",
						"chinese": "这里是空虚的中心。你们的探索终将徒劳无功。",
						"french": "C'est le noyau vide. Votre quête ne sera finalement que vaine.",
						"spanish": "Este es el núcleo vacío. Vuestra búsqueda será en vano al final.",
						"vietnamese": "Đây là trung tâm trống rỗng. Cuộc tìm kiếm của các ngươi cuối cùng cũng chỉ là vô ích.",
						"thai": "ที่นี่คือแกนกลางที่ว่างเปล่า การค้นหาของพวกเจ้าก็ไร้ประโยชน์ในที่สุด",
						"hindi": "यह खाली केंद्र है। तुम्हारी खोज अंततः व्यर्थ ही होगी।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 길은 돌고 돌아, 결국 제자리로 돌아오는 원형의 감옥.",
						"english": "This path circles back, a circular prison that returns to its starting point.",
						"japanese": "この道は巡り巡って、結局元に戻る円環の牢獄。",
						"chinese": "这条路兜兜转转，终将回到原点，一座圆形的牢狱。",
						"french": "Ce chemin tourne en rond, une prison circulaire qui revient toujours à son point de départ.",
						"spanish": "Este camino da vueltas y vueltas, una prisión circular que regresa al punto de partida.",
						"vietnamese": "Con đường này cứ quanh co, một nhà tù tròn quay trở lại điểm xuất phát.",
						"thai": "เส้นทางนี้หมุนวนกลับมายังจุดเริ่มต้น เป็นคุกวงกลม",
						"hindi": "यह मार्ग घूमता रहता है, एक वृत्ताकार जेल जो अंततः उसी जगह लौट आती है।"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 헛걸음하고 있는 건가?",
						"english": "Are we just going in circles?",
						"japanese": "我々は無駄足を踏んでいるのか？",
						"chinese": "我们是在白费力气吗？",
						"french": "Faisons-nous fausse route ?",
						"spanish": "¿Estamos dando vueltas en vano?",
						"vietnamese": "Chúng ta đang đi sai đường à?",
						"thai": "เรากำลังเดินเปล่าประโยชน์หรือ",
						"hindi": "क्या हम व्यर्थ ही भटक रहे हैं?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "목적 없는 방황은 가장 큰 업보. 멈추지 않는 죄.",
						"english": "Aimless wandering is the greatest karma. A never-ending sin.",
						"japanese": "目的のない彷徨いは最大の業。止まらぬ罪。",
						"chinese": "漫无目的的徘徊是最大的业障。永不停歇的罪孽。",
						"french": "L'errance sans but est le plus grand karma. Un péché incessant.",
						"spanish": "Vagar sin rumbo es el mayor karma. Un pecado que no cesa.",
						"vietnamese": "Lang thang vô định là nghiệp chướng lớn nhất. Một tội lỗi không ngừng nghỉ.",
						"thai": "การเร่ร่อนอย่างไร้จุดหมายคือกรรมที่ยิ่งใหญ่ที่สุด บาปที่ไม่หยุดหย่อน",
						"hindi": "लक्ष्यहीन भटकना सबसे बड़ा कर्म है। एक न रुकने वाला पाप।"
					},
					"speaker": "hild",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "자취의 한가운데. 그곳엔 아무것도 없었다. 끝없는 얼음 벌판뿐.",
						"english": "In the midst of the traces. There was nothing there. Only an endless ice field.",
						"japanese": "痕跡のただ中。そこには何もなかった。ただ終わりのない氷の平原だけ。",
						"chinese": "痕迹的中央。那里什么也没有。只有无尽的冰原。",
						"french": "Au milieu des traces. Il n'y avait rien. Seulement un champ de glace sans fin.",
						"spanish": "En medio de las huellas. No había nada allí. Solo un campo de hielo interminable.",
						"vietnamese": "Giữa những dấu vết. Nơi đó không có gì cả. Chỉ là một cánh đồng băng bất tận.",
						"thai": "ท่ามกลางร่องรอย ที่นั่นไม่มีอะไรเลย มีแต่ทุ่งน้ำแข็งอันไร้ที่สิ้นสุด",
						"hindi": "निशानों के बीच। वहाँ कुछ भी नहीं था। केवल एक अंतहीन बर्फ का मैदान।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…정말로 아무것도 없어.",
						"english": "...There really is nothing.",
						"japanese": "…本当に何もない。",
						"chinese": "……真的什么都没有。",
						"french": "...Il n'y a vraiment rien.",
						"spanish": "...Realmente no hay nada.",
						"vietnamese": "...Thật sự không có gì cả.",
						"thai": "...ไม่มีอะไรจริงๆ ด้วย.",
						"hindi": "...सच में कुछ भी नहीं है।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "크아악…! 이긴다고 달라질 건 없어…! 텅 빈 길은 계속될 뿐…!",
						"english": "Kuaaak...! Winning won't change anything...! The empty path will only continue...!",
						"japanese": "クアアアッ…！勝ったところで何も変わらない…！虚ろな道は続くだけだ…！",
						"chinese": "喀啊啊……！赢了也改变不了什么……！空虚的道路只会继续……！",
						"french": "Grrraah...! Gagner ne changera rien...! Le chemin vide ne fera que continuer...!",
						"spanish": "¡Aaaargh...! ¡Ganar no cambiará nada...! ¡El camino vacío solo continuará...!",
						"vietnamese": "Khụ a a...! Thắng cũng không thay đổi được gì...! Con đường trống rỗng sẽ chỉ tiếp tục thôi...!",
						"thai": "ควาาาก...! ชนะไปก็ไม่ต่างอะไรหรอก...! หนทางที่ว่างเปล่าก็จะดำเนินต่อไป...!",
						"hindi": "क्राअआक...! जीतने से कुछ नहीं बदलेगा...! खाली रास्ता बस चलता रहेगा...!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…아니, 우리는 이 길의 끝을 볼 거야.",
						"english": "...No, we will see the end of this path.",
						"japanese": "…いや、私たちはこの道の終わりを見るだろう。",
						"chinese": "……不，我们会看到这条路的尽头。",
						"french": "...Non, nous verrons la fin de ce chemin.",
						"spanish": "...No, veremos el final de este camino.",
						"vietnamese": "...Không, chúng ta sẽ nhìn thấy tận cùng của con đường này.",
						"thai": "...ไม่สิ เราจะเห็นจุดจบของหนทางนี้",
						"hindi": "...नहीं, हम इस रास्ते का अंत देखेंगे।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "하나의 업보가 끝났으나… 또 다른 맹세가 시작되는군.",
						"english": "One karma has ended... but another vow begins.",
						"japanese": "一つの業は終わったが…また別の誓いが始まるな。",
						"chinese": "一个业障结束了……但另一个誓言开始了。",
						"french": "Un karma s'est achevé... mais un autre serment commence.",
						"spanish": "Un karma ha terminado... pero otro juramento comienza.",
						"vietnamese": "Một nghiệp chướng đã kết thúc... nhưng một lời thề khác lại bắt đầu.",
						"thai": "กรรมหนึ่งจบลงแล้ว... แต่อีกคำสาบานหนึ่งก็เริ่มต้นขึ้น",
						"hindi": "एक कर्म समाप्त हो गया है... लेकिन एक और प्रतिज्ञा शुरू होती है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "텅 빈 중심에 희미한 빛이 스몄다. 아직 끝나지 않은 이야기.",
						"english": "A faint light permeated the empty core. A story not yet ended.",
						"japanese": "虚ろな中心に微かな光が差し込んだ。まだ終わらない物語。",
						"chinese": "空虚的中心渗入了微弱的光芒。一个尚未结束的故事。",
						"french": "Une faible lumière a imprégné le centre vide. Une histoire pas encore terminée.",
						"spanish": "Una luz tenue se filtró en el centro vacío. Una historia aún no terminada.",
						"vietnamese": "Một ánh sáng lờ mờ len lỏi vào trung tâm trống rỗng. Một câu chuyện chưa kết thúc.",
						"thai": "แสงเรืองรองสาดส่องลงสู่ใจกลางที่ว่างเปล่า เรื่องราวที่ยังไม่สิ้นสุด",
						"hindi": "खाली केंद्र में एक हल्की रोशनी फैल गई। एक कहानी जो अभी तक खत्म नहीं हुई है।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "텅 빈 얼음 벌판. 그 중심에 그림자가 서 있었다.",
						"english": "An empty ice field. A shadow stood at its center.",
						"japanese": "虚ろな氷の平原。その中心に影が立っていた。",
						"chinese": "空旷的冰原。一个影子站在它的中央。",
						"french": "Un champ de glace vide. Une ombre se tenait en son centre.",
						"spanish": "Un campo de hielo vacío. Una sombra se alzaba en su centro.",
						"vietnamese": "Một cánh đồng băng trống rỗng. Một cái bóng đứng ở trung tâm của nó.",
						"thai": "ทุ่งน้ำแข็งที่ว่างเปล่า เงาหนึ่งยืนอยู่ใจกลาง",
						"hindi": "एक खाली बर्फ का मैदान। उसके केंद्र में एक परछाई खड़ी थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 여기까지 와도 아무것도 없지? 수천 년을 방황한 그처럼.",
						"english": "Yes. Even coming this far, there's nothing, right? Like him, who wandered for thousands of years.",
						"japanese": "そう。ここまで来ても何もなかっただろう？数千年も彷徨った彼のように。",
						"chinese": "是的。即使走到这里，也一无所有，对吗？就像他，徘徊了数千年。",
						"french": "Oui. Même en venant jusqu'ici, il n'y a rien, n'est-ce pas ? Comme lui, qui a erré pendant des milliers d'années.",
						"spanish": "Sí. Incluso llegando hasta aquí, no hay nada, ¿verdad? Como él, que vagó por miles de años.",
						"vietnamese": "Đúng vậy. Ngay cả khi đến đây, cũng không có gì, phải không? Giống như anh ta, người đã lang thang hàng ngàn năm.",
						"thai": "ใช่ไหมล่ะ มาถึงที่นี่ก็ไม่มีอะไรเลยใช่ไหม? เหมือนกับเขาที่เร่ร่อนมาหลายพันปี",
						"hindi": "हाँ। इतनी दूर आने के बाद भी, कुछ नहीं है, है ना? हजारों साल तक भटकने वाले उसके जैसा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "헛된 걸 알면서도… 우리는 멈출 수 없어.",
						"english": "Even knowing it's futile... we cannot stop.",
						"japanese": "無駄だと分かっていても…私たちは止められない。",
						"chinese": "明知是徒劳……我们却无法停止。",
						"french": "Même en sachant que c'est vain... nous ne pouvons pas nous arrêter.",
						"spanish": "Aun sabiendo que es inútil... no podemos detenernos.",
						"vietnamese": "Dù biết là vô ích... chúng ta không thể dừng lại.",
						"thai": "ทั้งที่รู้ว่าไร้ประโยชน์... เราก็หยุดไม่ได้",
						"hindi": "बेकार जानते हुए भी... हम रुक नहीं सकते।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그것이 너희의 업보인가? 어리석은 용사들이여.",
						"english": "Is that your karma? Foolish heroes.",
						"japanese": "それがお前たちの業か？愚かな勇士たちよ。",
						"chinese": "那是你们的业障吗？愚蠢的勇士们。",
						"french": "Est-ce votre karma ? Stupides héros.",
						"spanish": "¿Es ese vuestro karma? Estúpidos héroes.",
						"vietnamese": "Đó có phải là nghiệp chướng của các ngươi không? Hỡi những dũng sĩ ngu ngốc.",
						"thai": "นั่นคือกรรมของพวกเจ้าหรือ? เหล่านักรบผู้โง่เขลา",
						"hindi": "क्या यही तुम्हारा कर्म है? मूर्ख योद्धाओं।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "큭큭… 영원히 헤매다 사라져라. 아무것도 없는 곳에서.",
						"english": "Heh heh… Wander forever and vanish. In a place of nothingness.",
						"japanese": "クク…永遠に彷徨い消え去るがいい。何もない場所で。",
						"chinese": "呵呵…永远彷徨然后消失吧。在虚无之地。",
						"french": "Hé hé… Errez éternellement et disparaissez. Dans un lieu de néant.",
						"spanish": "Je, je... Vaga para siempre y desvanécerte. En un lugar de la nada.",
						"vietnamese": "Khặc khặc… Hãy lang thang mãi mãi rồi biến mất. Ở một nơi không có gì cả.",
						"thai": "คิกคิก… จงร่อนเร่ไปชั่วนิรันดร์แล้วจงหายไป ในที่ที่ไม่มีอะไรเลย",
						"hindi": "हँ हँ... हमेशा के लिए भटकते रहो और गायब हो जाओ। एक खाली जगह में।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기하지 않아.",
						"english": "...It's not over yet. We won't give up.",
						"japanese": "…まだ終わってない。私たちは諦めない。",
						"chinese": "…还没结束。我们不会放弃。",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnerons pas.",
						"spanish": "...Aún no ha terminado. No nos rendiremos.",
						"vietnamese": "...Chưa kết thúc đâu. Chúng tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบ เราจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"빙하가 맴돈 자취. 끝없이 이어진 원이었다.",
			"수천 년을 헤맸으나, 그 길은 어디에도 닿지 못했다.",
			"검은 돌아갈 곳이 없고, 어둠은 잡을 수 없다.",
			"이 텅 빈 중심에서, 우리는 무엇을 찾을 수 있을까."
		],
		"english": [
			"Traces of glaciers swirling. An endlessly looping circle.",
			"Thousands of years wandered, yet the path led nowhere.",
			"The sword has no home, the darkness cannot be grasped.",
			"In this empty core, what can we find?"
		],
		"japanese": [
			"氷河が巡った痕跡。終わりなく続く円だった。",
			"数千年を彷徨ったが、その道はどこにも繋がらなかった。",
			"剣は帰る場所なく、闇は掴めない。",
			"この虚ろな中心で、我々は何を見つけられるだろうか。"
		],
		"chinese": [
			"冰川环绕的痕迹。一个无尽的循环。",
			"徘徊千年，此路不通。",
			"剑无归处，暗不可触。",
			"在这空虚的中心，我们能找到什么？"
		],
		"french": [
			"La trace des glaciers tournoyants. Un cercle sans fin.",
			"Des milliers d'années d'errance, mais le chemin ne menait nulle part.",
			"L'épée n'a pas de foyer, les ténèbres sont insaisissables.",
			"Dans ce noyau vide, que pouvons-nous trouver ?"
		],
		"spanish": [
			"Huellas de glaciares giratorios. Un círculo sin fin.",
			"Miles de años de vagar, pero el camino no llevaba a ninguna parte.",
			"La espada no tiene hogar, la oscuridad no puede ser atrapada.",
			"En este núcleo vacío, ¿qué podemos encontrar?"
		],
		"vietnamese": [
			"Dấu vết băng hà xoáy tròn. Một vòng tròn kéo dài vô tận.",
			"Lang thang hàng ngàn năm, nhưng con đường chẳng dẫn đến đâu.",
			"Thanh kiếm không nơi về, bóng tối không thể nắm bắt.",
			"Trong trung tâm trống rỗng này, chúng ta có thể tìm thấy gì?"
		],
		"thai": [
			"ร่องรอยธารน้ำแข็งหมุนวน วงกลมที่ไม่มีที่สิ้นสุด",
			"หลงทางมาหลายพันปี แต่เส้นทางนั้นไม่นำไปสู่ที่ใดเลย",
			"ดาบไร้ที่กลับคืน ความมืดไม่อาจจับต้องได้",
			"ในแก่นกลางที่ว่างเปล่านี้ เราจะพบอะไรได้บ้าง"
		],
		"hindi": [
			"ग्लेशियरों के घूमने के निशान। एक अंतहीन वृत्त।",
			"हजारों साल भटका, फिर भी वह रास्ता कहीं नहीं पहुंचा।",
			"तलवार का कोई ठिकाना नहीं, अंधेरा पकड़ा नहीं जा सकता।",
			"इस खाली केंद्र में, हम क्या खोज सकते हैं?"
		]
	}
} as const;
